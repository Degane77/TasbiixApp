document.getElementById('calculate').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2); // Round to 2 decimal places
        
        var category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        
        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
});