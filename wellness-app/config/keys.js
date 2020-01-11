// display message on console when loaded
console.log("\nthis is loaded");

var yelpAPIKey = {yelpAPIKey: process.env.YELPAPIKEY};
// export data so it is available
exports.yelp = {
    yelpAPIKey: process.env.YELPAPIKEY
};

// export data so it is available
exports.database = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};
