function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");

  try {
   const age = parseInt(ageText);
   if(isNaN(age)){
    throw "Please enter a number"
   }
   else if(age<18){
    throw "You are not adult";
   }else if(age>30){
    throw "Your age must be less than 30"
   }
   errorTag.innerHTML = ""
  } catch (err) {
    console.log("Error : ", err);
    errorTag.innerHTML = "Error : "+ err;
  }
  finally{
    console.log("All done inside try catch")
  }
//   console.log(11111111111)
}
