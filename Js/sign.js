$(document).ready(function() {
    $('#login-form').submit(function(e) {
        e.preventDefault();

        var formData = {
            Email: $('#Email').val(),
            password: $('#password').val()
        };

        if (formData.username === '' || formData.password === '') {
            $('#login-message').text('please enter both Email and password.').css('color','red');
            return;
        }
    })
})


$(document).ready(function(){

    $('#Email').keyup(function(){
        var regx_email = /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-Z]{5,10}(.)([a-zA-Z]+))$/i ;
    
        var email_inp = $(this).val();
        if (regx_email.test(email_inp)) {
            $("#Email_status").text("valid");
            $("#Email_status").removeClass("text-danger");
            
        }
        else {
            $("#Email_status").addClass("text-danger");
            $("#Email_status").text("Invalid");
        }
    });

    $('#password').keyup(function(){
        var regx_pass = /^([a-zA-Z]+)([0-9]+)([$&+,:;=?@#|'<>.^*()%!-]+)$/i ;
    
        var pass = $(this).val();
        if (regx_pass.test(pass)) {
            $("#password_status").text("valid");
            $("#password_status").removeClass("text-danger");
            
        }
        else {
            $("#password_status").addClass("text-danger");
            $("#password_status").text("Invalid");
        }
    });
});


// to reset from 

$(document).ready(function() {
    $('#submitBtn').click(function(event) {
        event.preventDefault(); // Prevent the default form submission
        $('#login-form').trigger("reset"); // Reset the form
    });
});




function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password i"); 
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash"); 
    } else {
        passwordInput.type = "password";
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye"); 
    }
}


$(document).ready(function() {
    $('#login-form').submit(function(e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
        let valid = true;
    
            // Form validation
        if (name === '') {
            $('#nameError').text('Name is required');
            valid = false;
        } else {
            $('#nameError').text('');
        }
    
        if (email === '') {
            $('#emailError').text('Email is required');
            valid = false;
        } else {
            $('#emailError').text('');
        }
    
        if (message === '') {
            $('#messageError').text('Message is required');
            valid = false;
        } else {
            $('#messageError').text('');
        }
    
        if (valid) {
                // Form submission logic here
            alert('Form submitted successfully!');
        }
    });

    $('#clearForm').click(function() {
        $('#contactForm')[0].reset();
        $('.error').text('');
    });
});
