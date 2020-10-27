// Import libraries
const express = require("express")
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
const { convert_to_json,create_file } = require("./utilities/excel");
// Define variables
const app = express();
const port = process.env.PORT || 5000;
const filePath = path.join(__dirname, "/upload");
// Define functions and middleware
app.use(fileUpload());
app.use(express.json());
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
    fs.readdir(filePath, (err, files)=>{
      if(err){
        return res.status(500).json({error: "Server error"})
      }
      const fullPath = path.join(filePath, files[0]);
      const result = convert_to_json(fullPath)
      res.json(result);
    })
    })
})
// Create excel file from finished json
app.post("/publish", async (req, res)=>{
  // console.log(req.body);
  // res.send("JSON successfully sent to backend");
  const newData = req.body.data;
  const fname = req.body.fileName
  const uploadPath = `${__dirname}/client/upload/${fname}.xlsx`
  // console.log(newData);
  
  try {
    await create_file(newData, uploadPath);
    res.json({isPublished: true})
  } catch (err) {
    res.status(400).json({msg: "Server error", error: err})
  }
  

})
// Listen on port 5000
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
})
