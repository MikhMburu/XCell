export const computeGrade = (cswk, exam) =>{
	let result = {};
	result["final"]= parseInt(cswk)+ parseInt(exam);
	
	if(result.final>= 70 && result.final<=100){
		result["grade"] = "A"
	}else if(result.final>= 60 && result.final <70){
		result["grade"] = "B"
	}else if(result.final>= 50 && result.final <60){
		result["grade"] = "C"
	}else if(result.final>= 40 && result.final <50){
		result["grade"] = "D"
	}else if(result.final>=1 && result.final <40){
		result["grade"] = "F"
	}else{
		result["grade"] = "ABS";
		result["final"] = 0;
	}
	return result
}
