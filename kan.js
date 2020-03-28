
function validate(){
    var dd = document.getElementById("dob").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var
    
    if(dd.value === '' || mm === '' || yy === '' ){
        alert("Please complete the form")
    }
    else{
        alert("Welcome");
    }
    
   
}