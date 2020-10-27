// Import libraries
const xlsx = require("xlsx");
const fs = require("fs");
// Import files and functions
const createHeader = require("./header");
const createBody = require("../utilities/body");
const merges = require("./merges");
const createFooter = require("./footer");
// Define functions and variables


const convert_to_json = (file) =>{
  const wb = xlsx.readFile(file);
  const ws= wb.Sheets["Sheet1"];

  return xlsx.utils.sheet_to_json(ws);
};

const create_file = async (newJSON, filename ) =>{
  // Create a workbook
  const wb = xlsx.utils.book_new(); 
  // Create a Worksheet
    // Add Header
    const header = createHeader(newJSON.header)
    // Add body
    let bodyJSON = [];
    bodyJSON.push(newJSON.body);
    // console.log(`Printing File in JSON format.... \n ${JSON.stringify(bodyJSON,null,2)} \n \n \n \n`);
    const fileBody = createBody(newJSON.body)
    // console.log(`Printing excel sheet.....\n ${JSON.stringify(fileBody, null, 2)}`)
    // TODO: Add footer and mergers
    const fileFooter = await createFooter(newJSON.footer);
    
    // Append objects
    // delete fileBody["!ref"]
    // const mergesObj = JSON.parse(merges);
    // console.log(mergesObj);
    console.log(merges);
    const ws = {
      ...header,
      ...fileBody,
      ...fileFooter,
      ...merges
    }
    console.log(header);
    // console.log(fileBody);
    console.log(fileFooter);
  // const ws = xlsx.utils.json_to_sheet(newJSON)
  // console.log(JSON.stringify(ws,null, 2));
  // Append worksheet to workbook
  xlsx.utils.book_append_sheet(wb, ws, "SUMMARY");
  // Create xlsx file with the workbook
  xlsx.writeFile(wb, filename)
  
}

module.exports={
  convert_to_json,
  create_file
}