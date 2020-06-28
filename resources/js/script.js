
$(document).ready(function() {
    
    /* STICKY NAVIGATION */
    $('.js--about-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    }, {
        offset: '180px;'
    });
    
    
    /* MAIN NAVIGATION SCROLL */
    $(document).ready(function() {
	
      var headerHeight = $('nav').outerHeight();

      $('.main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
      });
    });
    
    
    /* ANIMATIONS ON SCROLL */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });
    
    
    /* MOBILE NAVIGATION  */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); 
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close- round');
        }
        
    });
    
    
    /* MODAL  */
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    /* CONTACT FORM */
    
    $('.js--my-form')[0].reset();
//    $('#js--contact-form')[0].reset();
    
//    $("#sendMessage").click(function() {
//        var firstName = $("#firstName").val();
//        var lastName = $("#lastName").val();
//        var email = $("#email").val();
//        var message = $("#message").val();

//        alert(JSON.stringify({firstName: firstName, lastName: lastName, email: email, message: message}));
        
//        $.ajax({ 
//            type: "POST",
//            url: "server/contact_form.php",
//            data: {firstName: firstName, lastName: lastName, email: email, message: message},
//            dataType: "json",
//            success: function(response) { 
//                if (response.status == "error") {
//                    alert(response.message);
//                    //$('#msgs').html("<div class='alert alert-danger'>"+response.message+"</div>");
//                } else {
//                    //$('#msgs').html("<div class='alert alert-success'>"+response.message+"</div>");
//                    alert(response.message);
//                }   
//            }
//        });
//        return false;
//        })
//        
//    });
        
});