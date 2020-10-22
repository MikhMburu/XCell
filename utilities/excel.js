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

const create_file = (newJSON, filename ) =>{
  // Create a workbook
  const wb = xlsx.utils.book_new(); 
  // Create a Worksheet
  const ws = xlsx.utils.json_to_sheet(newJSON)
  // Append worksheet to workbook
  xlsx.utils.book_append_sheet(wb, ws, "SUMMARY");
  // Create xlsx file with the workbook
  xlsx.writeFile(wb, filename)
}

module.exports={
  convert_to_json,
  create_file
}