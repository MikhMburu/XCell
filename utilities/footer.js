
const createFooter = (objFooter) =>{
  const {analysis, docLength} = objFooter;
  let index = docLength + 12;
  // Create Footer super object
  let footer = {};
  let bcol = {
  };
      bcol[`B${index-1}`] = {
        t: "s",
        v: "ANALYSIS",
        r: "<t>ANALYSIS</t>",
        h: "ANALYSIS",
        w: "ANALYSIS"
      };
  let ccol = {};
  let dcol ={};
  dcol[`D${index+1}`]={
        t: "s",
        v: "Lecturer:………………………………………….",
        r: "<t>Lecturer:………………………………………….</t>",
        h: "Lecturer:………………………………………….",
        w: "Lecturer:…………………………………………."
      }
      dcol[`D${index+4}`]={
        t: "s",
        v: "Signature:………………………………………….",
        r: "<t>Signature:………………………………………….</t>",
        h: "Signature:………………………………………….",
        w: "Signature:…………………………………………."
      };
      dcol[`D${index+6}`]={
        t: "s",
        v: "Date:………………………………………….",
        r: "<t>Date:………………………………………….</t>",
        h: "Date:………………………………………….",
        w: "Date:…………………………………………."
      };
  analysis.map(item=>{
    // Populate bcol
    bcol[`B${index}`] = {
          t: `s`,
          v: `${item[0]}`,
          r: `<t>${item[0]}</t>`,
          h: `${item[0]}`,
          w: `${item[0]}`
        };
        ccol[`C${index}`] = {
          t: `s`,
          v: `${item[1]}`,
          r: `<t>${item[1]}</t>`,
          h: `${item[1]}`,
          w: `${item[1]}`
        }
    
      index+=1;
  });
  footer = {
    ...bcol,
    ...ccol,
    ...dcol
  }
  return footer;
  
}

module.exports= createFooter;
