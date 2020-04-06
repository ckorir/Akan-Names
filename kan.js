function validate(){
    var dd = document.getElementById("dob").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var cc = document.getElementById("century").value;
    
    var d = parseInt(dd);
    var m = parseInt(mm);
    var y = parseInt(yy);
    var c = parseInt(cc);

    var math = (( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d)%7;
    var exact = Math.round(math);

    if(exact === 1 && op1.checked === true){
        swal("Your Akan name is", "Kwasi meaning you were born on a Sunday");
    }
    if(exact === 2 && op1.checked === true){
        swal("Your Akan name is", "Kwadwo meaning you were born on a Monday");
    }
    if(exact === 3 && op1.checked === true){
        swal("Your Akan name is", "Kwabena meaning you were born on a Tuesday");
    }
    if(exact === 4 && op1.checked === true){
        swal("Your Akan name is", "Kwaku meaning you were born on a Wednesday");
    }
    if(exact === 5 && op1.checked === true){
        swal("Your Akan name is", "Yaw meaning you were born on a Thursday");
    }
    if(exact === 6 && op1.checked === true){
        swal("Your Akan name is", "Kofi meaning you were born on a Friday");
    }
    if(exact === 0 && op1.checked === true){
        swal("Your Akan name is", "Kwame meaning you were born on a Saturday");
    }

    if(exact === 1 && op2.checked === true){
        swal("Your Akan name is", "Akosua meaning you were born on a Sunday");
    }
    if(exact === 2 && op2.checked === true){
        swal("Your Akan name is", "Adwoa meaning you were born on a Monday");
    }
    if(exact === 3 && op2.checked === true){
        swal("Your Akan name is", "Abenaa meaning you were born on a Tuesday");
    }
    if(exact === 4 && op2.checked === true){
        swal("Your Akan name is", "Akua meaning you were born on a Wednesday");
    }
    if(exact === 5 && op2.checked === true){
        swal("Your Akan name is", "Yaa meaning you were born on a Thursday");
    }
    if(exact === 6 && op2.checked === true){
        swal("Your Akan name is", "Afua Kofi meaning you were born on a Friday");
    }
    if(exact === 0 && op2.checked === true){
        swal("Your Akan name is", "Ama meaning you were born on a Saturday");
    }

    if(dd === '' || mm === '' || yy === '' || cc == ''){
        swal({
            title: "Error",
            text: "You haven't filled all fields!",
            icon: "warning",
          });
    }
   
    else if(dd <=0 || dd>31){
        swal({
            title: "Error",
            text: "You haven't entered an invalid date!",
            icon: "warning",
          });
    }
    else if(mm <=0 || mm>12){
        swal({
            title: "Error",
            text: "You haven't entered an invalid month!",
            icon: "warning",
          });
    }
    else if( yy <1000 ){
        swal({
            title: "Error",
            text: "You haven't entered an invalid year!",
            icon: "warning",
          });
    }
    else if( cc > 99 || cc < 10){
        swal({
            title: "Error",
            text: "You haven't entered an invalid Century!",
            icon: "warning",
          });
    }


    event.preventDefault();
}