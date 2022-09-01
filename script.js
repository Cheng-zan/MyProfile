function validateForm() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
        alert("please fill the information")
    }
    else {
        alert("message send")
    }
    return false;
}


