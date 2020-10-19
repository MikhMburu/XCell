// Import libraries
const express = require("express")
const fileUpload = require("express-fileupload");
// Define variables
const app = express();
const port = process.env.PORT || 5000;
// Define functions and middleware
app.use(fileUpload())
// Create endpoints
app.get("/", (req, res)=>{
  res.send("Welcome to XCell");
})
  // Upload an excel file
app.post("/upload", (req, res)=>{
  // check whether file exists
  if(req.files === null){
    return res.status(400).json({error: "No file uploaded.."});
  }
  // if it exists, move it to upload folder
  const file = req.files.file;
  file.mv(`${__dirname}/upload/${file.name}`, err=>{
    if(err){
      console.error("Path does not exist...\n",err);
      return res.status(500).json({error: "Server error"})
    }
    // TODO: Process file and send data back to client
    res.send("File uploaded")
  })
})
// Listen on port 5000
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
})
