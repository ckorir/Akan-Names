

function validate(){
    var dd = document.getElementById("dob").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    
    if(dd === '' || mm === '' || yy === '' ){
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