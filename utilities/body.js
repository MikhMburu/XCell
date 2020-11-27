const createBody = (bodyObj)=>{
  let index = 13;
  let body ={}
  let acol={};
  let bcol={};
  let ccol={};
  let dcol={};
  let ecol={};
  let fcol={};
  let gcol={};

  // Populate cells
  bodyObj.map(item=>{
    acol[`A${index}`]={
      t: "s",
      v: `${index-12}`,
      r: `<t>${index-12}</t>`,
      h: `${index-12}`,
      w: `${index-12}`
    }
    bcol[`B${index}`]={
      t: "s",
      v: `${item["REGNO"]}`,
      r: `<t>${item["REGNO"]}</t>`,
      h: `${item["REGNO"]}`,
      w: `${item["REGNO"]}`
    }
    ccol[`C${index}`]={
      t: "s",
      v: `${item["STUDENT_NAME"]}`,
      r: `<t>${item["STUDENT_NAME"]}</t>`,
      h: `${item["STUDENT_NAME"]}`,
      w: `${item["STUDENT_NAME"]}`
    }
    dcol[`D${index}`] = {
      t: `s`,
      v: `${item["CSWK"]}`,
      r: `<t>${item["CSWK"]}</t>`,
      h: `${item["CSWK"]}`,
      w: `${item["CSWK"]}`
    }
    ecol[`E${index}`] = {
      t: `s`,
      v: `${item["EXAM"]}`,
      r: `<t>${item["EXAM"]}</t>`,
      h: `${item["EXAM"]}`,
      w: `${item["EXAM"]}`
    }
    fcol[`F${index}`] = {
      t: `s`,
      v: `${item["FINAL"]}`,
      r: `<t>${item["FINAL"]}</t>`,
      h: `${item["FINAL"]}`,
      w: `${item["FINAL"]}`
    }
    gcol[`G${index}`] = {
      t: `s`,
      v: `${item["GRADE"]}`,
      r: `<t>${item["GRADE"]}</t>`,
      h: `${item["GRADE"]}`,
      w: `${item["GRADE"]}`
    }
    index+=1;
  })
  body ={
    ...acol,
    ...bcol,
    ...ccol,
    ...dcol,
    ...ecol,
    ...fcol,
    ...gcol
  }
  return body;

}

module.exports = createBody;