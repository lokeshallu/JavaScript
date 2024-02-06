function acceptData(){
    const username = document.getElementById("username").value
   
   validateUsername(username)
    
    const email = document.getElementById("email").value

    validateEmail(email)

   
    let password = document.getElementById("password").value
    validatePassword(password)
   
    let gender =document.querySelector("input[name='gender']:checked").value
   let getclicked = gender?gender.value:false
   alert(gender)
   validateGender(getclicked)

   
    let dateofBirth = document.getElementById("date").value
    validatedate(dateofBirth)
   
    let monthofBirth = document.getElementById("month").value
    validateMonth(monthofBirth)
   
    let yearofBirth = document.getElementById("year").value
    validateYear(yearofBirth)

    let checkbox =document.querySelector("input[name='checkbox']:checked").value
    let getchecked = checkbox?checkbox.value:false
   
    validateCheckbox(getchecked)


   
   alert(username+" "+ password+" "+email+" "+gender+" "+dateofBirth+"/"+monthofBirth+"/"+yearofBirth)
   
   }
   
   function validateUsername(username){
       let regex =/^[A-Za-z0-9]+$/  //regular expression
       if(username==''){
           alert("userName can't be empty")
   
           } else if (username.length <5 || username.length >12){
               alert("user name should be min 5 max 15 characters")
           }else if(regex.test(username)==false){
               alert("username shouid contains only digits && characters only")
           }
           else{
            //    alert("validate username")
           }
   
       
   
   
   }
   
   function validatePassword(password){
    let Aregex = /[A-Z]/
    let aregex = /[a-z]/
    let sregex =/[!@#$%^&*()_-]/
    
       if(password==""){
           alert("password can't be empty")
       }else if(Aregex.test(password)==false){
        alert("Passwod should have atleast one Upper character")

       }else if(aregex.test(password)==false){
        alert("password should have altest 1 samll letter")
       }else if(sregex.test(password)==false){
        alert("password should have alteast 1 special character")
       }else{
        alert("it is a valid email id")
       }
   
   }

   function validateEmail(email){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
       if(email==""){
           alert("email can't be empty")
       }else if(email.length <5 || email.length>100){
        alert("email shouble aleast 5 characters")

       }else if(regex.test(email)==false ){
        alert("email should be Upper character and lowercharacters and special characters")
       }else{
        // alert("valid  email")
       }
   
   }
   
   function validateGender(gender){
       if(gender==''){
           alert("gender can't be empty")
       }
   
   }
   
   function validatedate(date){
       if(date==''){
           alert("date can't be empty")
       }
   
   }
   function validateYear(year){
    if(year==''){
        alert('Enter the month')
    }
       
   
   }
   
   function validateMonth(month){
    if(month==''){
        alert("enter the month")
    }
   
   }
   function validateCheckbox(checkbox){
    if(checkbox==""){
        alert("pleace check the box")
    }else{
        alert("all are accept")
    }
   
   }