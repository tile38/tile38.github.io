$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        document.getElementById('results').textContent = '';
        document.getElementById('results-err').textContent = '';
        document.getElementById('contact-send').style.display = 'none'

        // Retrieve all the params
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        if (!name || !email || !message){
            document.getElementById('results-err').textContent = "All fields are required";
            document.getElementById('contact-send').style.display = ''
            return;
        }

        if (email.indexOf('@') <= 0 || email.indexOf('@') > email.indexOf('.')){
            document.getElementById('results-err').textContent = "Invalid email address";
            document.getElementById('contact-send').style.display = ''
            return;
        }
        document.getElementById('results').textContent = "Sending... please wait";

        // Build the request URL
        var url = 'https://mailer.tile38.com/send?email=' + email + '&first=' + name

        // Perform the post request
        $.post(url, message, function (data) {
            // Show a success if a 200 is received
            document.getElementById('results').innerHTML = "Sent.<br>We'll contact you back asap";
        }, 'text').fail(function (error) {
            // Display the error if a non-200 is received
            document.getElementById('results-err').textContent = error.responseText;
            document.getElementById('contact-send').style.display = ''
        }, 'text');
    });
});