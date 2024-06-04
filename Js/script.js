

var btns = document.querySelectorAll(".quick-view-button");
    var modals = document.querySelectorAll(".modal");
    var spans = document.querySelectorAll(".close");

    btns.forEach((btn, index) => {
        btn.onclick = function() {
            modals[index].style.display = "block";
        }
    });

    spans.forEach((span, index) => {
        span.onclick = function() {
            modals[index].style.display = "none";
        }
    });

    window.onclick = function(event) {
        modals.forEach((modal, index) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }








$(document).ready(function() {
    $('#contactForm').submit(function(e) {
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


const shareBtns = document.querySelectorAll(".share-btn");
shareBtns.forEach(shareBtn => {
    shareBtn.addEventListener("click", (event)=>{
        if(navigator.share){
            navigator.share({
                title:"Google Official Website",
                url:"https://www.google.com",
            }).then(()=>{
                console.log("Thanks for sharing");
            }).catch((err)=>{
                console.log("Error using web share api:");
                console.log(arr);
            })
        }else{
            alert("Brower doesn't support this web API")
        }
    });
});

// var btns = document.querySelectorAll(".new-arrival-view-details-button");
//     var modals = document.querySelectorAll(".modal");
//     var spans = document.querySelectorAll(".close");

//     btns.forEach((btn, index) => {
//         btn.onclick = function() {
//             modals[index].style.display = "block";
//         }
//     });

//     spans.forEach((span, index) => {
//         span.onclick = function() {
//             modals[index].style.display = "none";
//         }
//     });
