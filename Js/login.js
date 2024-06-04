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





// enter both username and email 

$(document).ready(function() {
    $('#sign-form').submit(function(e) {
        e.preventDefault();

        var formData = {
            name: $('#name').val(),
            Email: $('#Email').val()
            // password: $('#password').val()
        };

        if (formData.name === '' || formData.Email === '') {
            $('#sign-message').text('please enter both Username and Email.').css('color', 'red');
            return;
        }
    })
})

// to reset form 

$(document).ready(function() {
    $('#submitBtn').click(function(event) {
        event.preventDefault(); 
        $('#sign-form').trigger("reset"); 
    });
});


// togglepassword 

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password i"); // Adjust selector if not using an <i> element
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



function togglePasswordVisibility(fieldId) {
    var passwordInput = document.getElementById(fieldId);
    var toggleButton = passwordInput.nextElementSibling; // Assumes the button is right after the input
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerHTML = '<i class="fa fa-eye-slash"></i>'; // Change to "Hide" icon
    } else {
        passwordInput.type = "password";
        toggleButton.innerHTML = '<i class="fa fa-eye"></i>'; // Change back to "Show" icon
    }
}



// Function to check if passwords match
function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var statusText = document.getElementById("confirm_password_status");

    if (password === confirmPassword && password !== '') {
        statusText.innerHTML = "Passwords match";
        statusText.style.color = "green";
    } else if (confirmPassword !== '') {
        statusText.innerHTML = "Passwords do not match";
        statusText.style.color = "red";
    } else {
        statusText.innerHTML = "";
    }
}


document.getElementById("confirmPassword").addEventListener('input', checkPasswordMatch);