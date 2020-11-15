import React,{useContext, useRef,useEffect} from 'react';
import StudentContext from "./context/studentContext";
const SearchBar = () => {
  // Create ref
  const text = useRef("")
  // Use Context
  const context = useContext(StudentContext);
  const {filtered, setFilter, clearFilter} = context

  useEffect(()=>{
    if(filtered===null){
      text.current.value=""
    }
  });

  // Define functions
  const onChangeHandler = e =>{
    if(text.current.value!==""){
      setFilter(e.target.value);
    }else{
      clearFilter()
    }
  }
  return (
    <div className="card mb-2" style={{"width": "26rem"}}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Search</span>
              </div>
              <input className="form-control" type="text" name="searchRec" ref={text} placeholder="Type in Student Name or Reg. Number"  onChange={onChangeHandler}/>
              
            </div>
          </div>
  )
}

export default SearchBar;
