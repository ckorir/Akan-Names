

function validate(){
    var dd = parseInt(document.getElementById("dob").value);
    var mm = parseInt(document.getElementById("month").value);
    var yy = parseInt(document.getElementById("year").value);
    
    if(dd.value === '' || mm === '' || yy === '' ){
        swal({
            title: "Error",
            text: "You haven't filled all fields!",
            icon: "warning",
          });
    }
      
    else{
        alert(dd +5);
    }
}