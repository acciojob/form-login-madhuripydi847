function getFormvalue() {
    //Write your code here
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input</title>
    <script>
        function getFormvalue(event) {
            event.preventDefault(); // Prevent form from submitting normally
            
            let firstName = document.querySelector('input[name="fname"]').value.trim();
            let lastName = document.querySelector('input[name="lname"]').value.trim();
            
            if (!firstName || !lastName) {
                alert("Please enter both first and last name.");
                return;
            }
            
            alert(`${firstName} ${lastName}`);
        }
    </script>
</head>
<body>
    <form onsubmit="getFormvalue(event)">
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname">
        <br>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname">
        <br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>

}
