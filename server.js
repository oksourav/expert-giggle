const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Flag for the CTF challenge
const FLAG = "technovate[manhaTtAnhenge_Newyork^]";

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission and render the result
app.post("/submit", (req, res) => {
  const userInput = req.body.userInput;

  // Render the user's input without sanitization (This is intentionally vulnerable to XSS)
  const responseHtml = `
        <h1>XSS CTF Challenge</h1>
        <p>Your input was:</p>
        <div>${userInput}</div>
        <br>
        <div id="flag" style="display:none;">${FLAG}</div>
        <br><br>
        <a href="/">Go Back</a>
    `;

  res.send(responseHtml);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
