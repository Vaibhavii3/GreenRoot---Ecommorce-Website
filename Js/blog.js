//filter

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all') {
            $(".post-box").show("1000");
        }else {
            $(".post-box").not("." + value).hide("1000");
            $(".post-box").filter("." + value).show("1000")
        }
    });
    //add active to btn 
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});


//share

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


// $(document).ready(function(){
//     $('#blogForm').submit(function(event) {
//       event.preventDefault(); 
  
      
//       var title = $('#blogTitle').val();
//       var content = $('#blogContent').val();
  

//       console.log('Title: ' + title);
//       console.log('Content: ' + content);
  
     
//       $('#blogModal').modal('hide');
//     });
//   });
