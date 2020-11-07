function idCard () {
    // getting the inputted information from the user
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var Address = document.getElementById("Address").value;
    var Age = parseInt(document.getElementById("Age").value);
    var PhoneNumber = parseInt(document.getElementById("PhoneNumber").value);

    // displaying the information given
    document.getElementById("postFullName").innerHTML = FirstName + " " + LastName;
    document.getElementById("postAddress").innerHTML = Address;
    
    var numberArray = [];
    numberArray.push(Age,PhoneNumber);
    
    for (var i=0; i<numberArray.length; i++) {
        if (numberArray[i]<=100) {
            document.getElementById("postAge").innerHTML = "Age:" +" "+ Age;
        }
        else if (numberArray[i] > 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:"+" " + PhoneNumber;
        }
    }
}