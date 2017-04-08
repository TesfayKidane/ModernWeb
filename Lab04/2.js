var http = require("http");
var qs = require("querystring");
var StringBuilder = require("stringbuilder");
var fs = require('fs');
var path = require('path');
var port = 9000;

function getRegistrationHtml(req, resp, data) {
    var sb = new StringBuilder({ newline: "\r\n" });
    sb.appendLine("<html>");
    sb.appendLine(" <body>");
    sb.appendLine("     <form method='post'>");
    sb.appendLine("         <table>");
    sb.appendLine("             <tr>");
    sb.appendLine("                 <td>Name: </td>");

    if (data && data.name) {
        sb.appendLine("                 <td><input type='text' id='name' name='name' value='{0}'/></td>", data.name);
    }
    else {
        sb.appendLine("                 <td><input type='text' id='name' name='name' /></td>");
    }

    sb.appendLine("             </tr>");
    sb.appendLine("             <tr>");
    sb.appendLine("                 <td>Email: </td>");

    if (data && data.email) {
        sb.appendLine("                 <td><input type='text' id='email' name='email' value='{0}'/></td>", data.email);
    }
    else {
        sb.appendLine("                 <td><input type='text' id='email' name='email' /></td>");
    }

    sb.appendLine("             </tr>");
    sb.appendLine("             <tr>");
    sb.appendLine("                 <td><input type='submit' value='Submit' /></td>");
    sb.appendLine("             </tr>");

    if (data && data.name && data.email) {    
        sb.appendLine("             <tr>");
        sb.appendLine("                 <td>Registered</td>");
        sb.appendLine("             </tr>");
    }

    sb.appendLine("         </table>");
    sb.appendLine("     </form>")
    sb.appendLine(" </body>");
    sb.appendLine("</html>");
    sb.build(function (err, result) {
        resp.write(result);
        resp.end();
    });
}

function getRegistraionForm(req, resp, data) {
    resp.writeHead(200, { "Content-Type": "text/html" });
    writeRequestBodyToFile(req,resp,data);
    getRegistrationHtml(req, resp, data);
}
function writeRequestBodyToFile(req,resp,data){
    var str = '';
    if(data && data.name && data.email){
        str = 'name : ' + data.name + '\nemail : ' + data.email;   
    }
    var writable = fs.createWriteStream(path.join(__dirname+'/CS5722.txt'),{defaultEncoding: 'utf8', autoClose: true});
    writable.write(str.toString());
    writable.close();
}
function getHome(req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>Home</title></head><body>Register   <a href='/register'>here</a> </body> </html>");
    resp.end();
}

function get404(req, resp) {
    resp.writeHead(404, "Resource Not Found", { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>404</title></head><body>404: Resource not found. Go to <a href='/'>Home</a></body></html>");
    resp.end();
}

function get405(req, resp) {
    resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
    resp.write("<html><html><head><title>405</title></head><body>405: Method not supported</body></html>");
    resp.end();
}

http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                getHome(req, resp);
            }
            else if (req.url === "/register") {
                getRegistraionForm(req, resp);
            }
            else {
                get404(req, resp);
            }
            break;
        case "POST":
            if (req.url === "/register") {
                var reqBody = '';
                req.on('data', function (data) {
                    reqBody += data;
                    if (reqBody.length > 1e7) { //10MB
                        resp.writeHead(413, 'Request Entity Too Large', { 'Content-Type': 'text/html' });
                        resp.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
                    }
                });
                req.on('end', function () {
                    var formData = qs.parse(reqBody);
                    getRegistraionForm(req, resp, formData);
                });
            }
            else {
                get404(req, resp);
            }
            break;
        default:
            get405(req, resp);
            break;
    }
}).listen(port , () => console.log("listeaning on : " + port));