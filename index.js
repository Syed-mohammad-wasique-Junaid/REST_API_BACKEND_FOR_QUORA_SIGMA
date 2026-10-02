const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// UUID → Used to generate a unique ID for every post
const { v4: uuidv4 } = require("uuid");

// Method Override → Allows us to use PATCH and DELETE from HTML forms
const methodOverride = require("method-override");

// Middleware to read form data sent through POST/PATCH requests
app.use(express.urlencoded({ extended: true }));

// Middleware to support HTTP methods like PATCH and DELETE from HTML forms
app.use(methodOverride("_method"));

// Set EJS as the template/view engine
app.set("view engine", "ejs");

// Tell Express where the EJS files are located
app.set("views", path.join(__dirname, "views"));

// Serve static files such as CSS, JavaScript, images, etc.
app.use(express.static(path.join(__dirname, "public")));


/* =========================================================
   TEMPORARY DATABASE
   =========================================================
   This is an in-memory array.
   Data will be lost when the server is restarted.
   ========================================================= */

let posts = [
    {
        id: uuidv4(),
        username: "junaid",
        content: "welcome to actkrit"
    },
    {
        id: uuidv4(),
        username: "humaira",
        content: "welcome to RYMEC"
    },
    {
        id: uuidv4(),
        username: "ananya",
        content: "welcome to honnavar"
    }
];


/* =========================================================
   GET API - HOME PAGE
   ========================================================= */

// GET /
// Used to check whether the server is working
app.get("/", (req, res) => {
    res.send("server working well");
});


/* =========================================================
   GET API - DISPLAY ALL POSTS
   ========================================================= */

// GET /posts
// Used to fetch/display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


/* =========================================================
   GET API - SHOW NEW POST FORM
   ========================================================= */

// GET /posts/new
// Displays the form used to create a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


/* =========================================================
   POST API - CREATE / ADD NEW POST
   ========================================================= */

// POST /posts
// Used to add/create a new post
app.post("/posts", (req, res) => {

    // Get username and content from the submitted form
    let { username, content } = req.body;

    // Generate a unique ID for the new post
    let id = uuidv4();

    // Add the new post to the posts array
    posts.push({
        id,
        username,
        content
    });

    // Redirect user back to all posts
    res.redirect("/posts");

    // Display updated posts array in terminal
    console.log(posts);
});


/* =========================================================
   GET API - DISPLAY ONE PARTICULAR POST
   ========================================================= */

// GET /posts/:id
// Used to fetch/display a single post using its ID
app.get("/posts/:id", (req, res) => {

    // Get the ID from the URL
    let { id } = req.params;

    // Find the post having the matching ID
    let post = posts.find((p) => id === p.id);

    console.log(post);

    // Send the selected post to show.ejs
    res.render("show.ejs", { post });
});


/* =========================================================
   PATCH API - UPDATE AN EXISTING POST
   ========================================================= */

// PATCH /posts/:id
// Used to UPDATE the content of an existing post
app.patch("/posts/:id", (req, res) => {

    // Get the ID of the post from the URL
    let { id } = req.params;

    // Get the new content from the edit form
    let newContent = req.body.content;

    // Find the post using its ID
    let post = posts.find((p) => id === p.id);

    // Update the content of the selected post
    post.content = newContent;

    console.log(post);

    // Redirect back to all posts
    res.redirect("/posts");
});


/* =========================================================
   GET API - SHOW EDIT FORM
   ========================================================= */

// GET /posts/:id/edit
// Displays the edit form for a particular post
app.get("/posts/:id/edit", (req, res) => {

    // Get the post ID from the URL
    let { id } = req.params;

    // Find the post using its ID
    let post = posts.find((p) => id === p.id);

    // Send the post data to edit.ejs
    // so the existing content can be displayed in the form
    res.render("edit.ejs", { post });
});


/* =========================================================
   DELETE API - DELETE A POST
   ========================================================= */

// DELETE /posts/:id
// Used to DELETE a particular post
app.delete("/posts/:id", (req, res) => {

    // Get the ID from the URL
    let { id } = req.params;

    // Remove the post whose ID matches the given ID
    posts = posts.filter((p) => id !== p.id);

    // Redirect back to all posts
    res.redirect("/posts");
});


/* =========================================================
   START SERVER
   ========================================================= */

// Start the Express server on port 8080
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});