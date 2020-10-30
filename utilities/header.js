const createHeader = (hdrJSON)=>{
const {size,faculty,group,dept, yearofstudy, programme,acadYear,dateofexam, title} = hdrJSON

  return header = {
    "!ref": `A6:G${size}`,
  A6: {
    t: "s",
    v: "UNIVERSITY OF NAIROBI",
    r: "<t>UNIVERSITY OF NAIROBI</t>",
    h: "UNIVERSITY OF NAIROBI",
    w: "UNIVERSITY OF NAIROBI"
  },
  A7: {
    t: "s",
    v: "CLASS LIST FOR INDIVIDUAL PAPER/COURSES",
    r: "<t>CLASS LIST FOR INDIVIDUAL PAPER/COURSES</t>",
    h: "CLASS LIST FOR INDIVIDUAL PAPER/COURSES",
    w: "CLASS LIST FOR INDIVIDUAL PAPER/COURSES"
  },
  A8: {
    t: "s",
    v: `Faculty: ${faculty}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Faculty</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>: ${faculty}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Faculty</b></span><span style="font-size:11pt;">: ${faculty}</span>`,
    w: `Faculty: ${faculty}`
  },
  F8: {
    t: "s",
    v: `Group: ${group}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Group</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>: ${group}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Group</b></span><span style="font-size:11pt;">: ${group}</span>`,
    w: `Group: ${group}`
  },
  A9: {
    t: "s",
    v: `Department: ${dept}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Department:</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t xml:space="preserve"> ${dept}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Department:</b></span><span style="font-size:11pt;"> ${dept}</span>`,
    w: `Department: ${dept}`
  },
  F9: {
    t: "s",
    v: `Year: ${yearofstudy}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t xml:space="preserve">Year: </t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>${yearofstudy}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Year: </b></span><span style="font-size:11pt;">${yearofstudy}</span>`,
    w: `Year: ${yearofstudy}`
  },
  A10: {
    t: "s",
    v: `Programme: ${programme}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Programme</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>: ${programme}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Programme</b></span><span style="font-size:11pt;">: ${programme}</span>`,
    w: `Programme: ${programme}`
  },
  F10: {
    t: "s",
    v: `Acad Yr: ${acadYear}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Acad Yr</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>: ${acadYear}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Acad Yr</b></span><span style="font-size:11pt;">: ${acadYear}</span>`,
    w: `Acad Yr: ${acadYear}`
  },
  A11: {
    t: "s",
    v: `Title of Paper: ${title}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>Title of Paper</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>: ${title}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Title of Paper</b></span><span style="font-size:11pt;">: ${title}</span>`,
    w: `Title of Paper: ${title}`
  },
  F11: {
    t: "s",
    v: `Date: ${dateofexam}`,
    r: `<r><rPr><b/><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t xml:space="preserve">Date: </t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="Times New Roman"/><family val="1"/></rPr><t>${dateofexam}</t></r>`,
    h: `<span style="font-size:11pt;"><b>Date: </b></span><span style="font-size:11pt;">${dateofexam}</span>`,
    w: `Date: ${dateofexam}`
  },
  A12: {
    t: "s",
    v: "#",
    r: "<t>#</t>",
    h: "#",
    w: "#"
  },
  B12: {
    t: "s",
    v: "REG. NO",
    r: "<t>REG. NO</t>",
    h: "REG. NO",
    w: "REG. NO"
  },
  C12: {
    t: "s",
    v: "STUDENT NAME",
    r: "<t>STUDENT NAME</t>",
    h: "STUDENT NAME",
    w: "STUDENT NAME"
  },
  D12: {
    t: "s",
    v: "CSWK",
    r: "<t>CSWK</t>",
    h: "CSWK",
    w: "CSWK"
  },
  E12: {
    t: "s",
    v: "EXAM",
    r: "<t>EXAM</t>",
    h: "EXAM",
    w: "EXAM"
  },
  F12: {
    t: "s",
    v: "TOTAL",
    r: "<t>TOTAL</t>",
    h: "TOTAL",
    w: "TOTAL"
  },
  G12: {
    t: "s",
    v: "GRADE",
    r: "<t>GRADE</t>",
    h: "GRADE",
    w: "GRADE"
  },
  }
}

module.exports= createHeader;