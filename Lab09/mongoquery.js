// download JSON file here : http://mumstudents.org/cs572/lecture09/
// import it into mongodb using mongoimport

// import like this
C:> mongoimport -d local -c zipcodes C:\Lab09\zips.json

// 1. Find all zip codes in the Iowa state
db.zipcodes.aggregate(
    [
        {$match: {state:"IA"}},
        {$project: {
            _id:0,
            zipcode: "$_id",
            state:1
        }}
    ]
)

// output
{ "state" : "IA", "zipcode" : "50001" }
{ "state" : "IA", "zipcode" : "50002" }
{ "state" : "IA", "zipcode" : "50003" }
{ "state" : "IA", "zipcode" : "50005" }
{ "state" : "IA", "zipcode" : "50006" }
{ "state" : "IA", "zipcode" : "50007" }
{ "state" : "IA", "zipcode" : "50008" }
{ "state" : "IA", "zipcode" : "50009" }
{ "state" : "IA", "zipcode" : "50010" }
{ "state" : "IA", "zipcode" : "50020" }
{ "state" : "IA", "zipcode" : "50021" }
{ "state" : "IA", "zipcode" : "50022" }
{ "state" : "IA", "zipcode" : "50025" }
{ "state" : "IA", "zipcode" : "50026" }
{ "state" : "IA", "zipcode" : "50027" }
{ "state" : "IA", "zipcode" : "50028" }
{ "state" : "IA", "zipcode" : "50029" }
{ "state" : "IA", "zipcode" : "50030" }
{ "state" : "IA", "zipcode" : "50031" }
{ "state" : "IA", "zipcode" : "50033" }

// filter by city
db.zipcodes.aggregate([
    {$group: { 
        _id:"$city",
        count:{$sum:1}
    }}
])
//2. find all zip codes with a population less than 1000.
db.zipcodes.aggregate([
    {$match : {pop : {$gt : 1000}}},
    {$project: {
        _id:0,
        zipcode:"$_id",
        pop:1
    }}
])

//output
{ "pop" : 15338, "zipcode" : "01001" }
{ "pop" : 36963, "zipcode" : "01002" }
{ "pop" : 4546, "zipcode" : "01005" }
{ "pop" : 10579, "zipcode" : "01007" }
{ "pop" : 1240, "zipcode" : "01008" }
{ "pop" : 3706, "zipcode" : "01010" }
{ "pop" : 1688, "zipcode" : "01011" }
{ "pop" : 23396, "zipcode" : "01013" }
{ "pop" : 31495, "zipcode" : "01020" }
{ "pop" : 1764, "zipcode" : "01022" }
{ "pop" : 1484, "zipcode" : "01026" }
{ "pop" : 16864, "zipcode" : "01027" }
{ "pop" : 13367, "zipcode" : "01028" }
{ "pop" : 11985, "zipcode" : "01030" }
{ "pop" : 2385, "zipcode" : "01031" }
{ "pop" : 5526, "zipcode" : "01033" }
{ "pop" : 1652, "zipcode" : "01034" }
{ "pop" : 4231, "zipcode" : "01035" }
{ "pop" : 4709, "zipcode" : "01036" }
{ "pop" : 3184, "zipcode" : "01038" }

//3. Find all cities that have more than one zipcode, sort the results based by
// state and city name

db.zipcodes.aggregate([
    {$group : { 
        _id:"$city",
        details:{$addToSet:{state:"$state",zipcode:"$_id"}}
    }},
    {$project: {
        _id:1, details:1, size_of_details: {$size: "$details"}
    }},
    {$match : {size_of_details:{$gt:2}}},   
    {$sort : {_id:-1}}
])

//4. display the least populated city in each state.

db.zipcodes.aggregate([
    {$group : {
        _id: {state:"$state",city:"$city"},
        population:{$min:"$pop"},
    }},
    {$sort: {
        "_id.state":1,
        "population":1
    }},
    {$group: {
        _id:"$_id.state",
        city:{$first:"$_id.city"},
        population:{$first:"$population"}
    }},
    {$project:{
        _id:0,
        state:"$_id",
        city:1,
        population:1
    }},
    {$sort:{
        "state":1
    }}
])

