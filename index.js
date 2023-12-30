//Function to find drivers whose names match the provided string (case-insensitive)
function findMatching(drivers, query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
//Function to find drivers whose names begin with the provided letters (case- insenstive)
function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));

}
//Function to find driver objects whose name property matches the provided string (case-insensitive)
function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());

}