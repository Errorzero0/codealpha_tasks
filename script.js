function calculateAge() {
    // Get the input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Validate the input values
    if (!isValidInput(day) || !isValidInput(month) || !isValidInput(year)) {
        alert("Please enter valid numeric values without any special characters.");
        return;
    }

    const dayInt = parseInt(day);
    const monthInt = parseInt(month);
    const yearInt = parseInt(year);

    if (dayInt < 1 || dayInt > 31 || monthInt < 1 || monthInt > 12 || yearInt < 0) {
        alert("Please enter valid values.");
        return;
    }

    // Get the current date
    const currentDate = new Date();

    // Create a date object with the input values
    const birthDate = new Date(yearInt, monthInt - 1, dayInt);

    // Check if birth date is in the future
    if (birthDate > currentDate) {
        alert("Birth date cannot be in the future.");
        return;
    }

    // Calculate the difference in milliseconds
    let ageInMilliseconds = currentDate - birthDate;

    // Convert milliseconds to years
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    ageInYears = Math.floor(ageInYears);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You are ${ageInYears} years old.`;
}

function isValidInput(input) {
    const regex = /^[0-9]+$/;
    return regex.test(input);
}
