document.getElementById("dividebutton").addEventListener("click", function() {
    // Get values from the input fields
    let foo = parseFloat(document.getElementById("num1").value);
    let bar = parseFloat(document.getElementById("num2").value);

    // Perform division
    let result = foo / bar;

    // Check if the result is NaN or if division by zero occurs
    if (isNaN(result) || bar === 0) {
        document.getElementById("result-display").innerText = "You can't divide us!";
    } else {
        // Display the result on the page
        document.getElementById("result-display").innerText = "The result is: " + result;
    }
});


