const express = require("express");
const fs = require("fs");


// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 7500

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

// Starts the server to begin listening

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});