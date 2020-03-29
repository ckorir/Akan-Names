

function validate(){
    var dd = document.getElementById("dob").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var cc = document.getElementById("century").value;
    
    var d = parseInt(dd);
    var m = parseInt(mm);
    var y = parseInt(yy);
    var c = parseInt(cc);

    
    if(dd === '' || mm === '' || yy === '' || cc == ''){
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