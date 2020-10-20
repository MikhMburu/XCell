// Import libraries
const xlsx = require("xlsx");
const fs = require("fs");
// Import files and functions

// Define functions and variables


const convert_to_json = (file) =>{
  const wb = xlsx.readFile(file);
  const ws= wb.Sheets["Sheet1"];

  return xlsx.utils.sheet_to_json(ws);
};

module.exports={
  convert_to_json
}