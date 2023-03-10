const express = require("express"); 
const fs = require("fs");

// Sets up the Express App. 
var app = express();
var PORT = process.env.PORT || 3001

// Sets up the Express app to handle data parsing. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./routing/html-routes")(app);
require("./routing/api-routes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 
