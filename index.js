function showDate() {
    const input = document.getElementById('fullDate').value;
    const dateParts = input.split('.');

    if (dateParts.length !== 3) {
        document.getElementById('result').innerText = 'Please enter a valid date in dd-mm-yyyy format.';
        return;
    }
    const day = dateParts[0];
    const month = parseInt(dateParts[1]);
    const year = dateParts[2];

    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    if (isNaN(month) || month < 1 || month > 12) {
        document.getElementById('result').innerText = 'Please enter a valid month.';
        return;
    }
    const monthName = monthNames[month - 1];
    const result = `${day} / ${monthName} / ${year}`;
    document.getElementById('result').innerText = `Result: ${result}`;

}
