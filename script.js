function validateForm() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
        alert("please fill the information")    
        return false;
    }
    else {
        alert("message send")
        return true;
    }

}


