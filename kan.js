

function validate(){
    var dd = document.getElementById("dob").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var cc = document.getElementById("century").value;
    var male = document.getElementById("op1").value;
    var female = document.getElementById("op2").value;
    
    var d = parseInt(dd);
    var m = parseInt(mm);
    var y = parseInt(yy);
    var c = parseInt(cc);

    var math = (( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d)%7;
    var exact = Math.round(math);

    if(exact === 1 && op1.checked === true){
        alert("Your Akan name is Kwasi")
    }

    if(dd === '' || mm === '' || yy === '' || cc == ''){
        swal({
            title: "Error",
            text: "You haven't filled all fields!",
            icon: "warning",
          });
    }
      
    

}