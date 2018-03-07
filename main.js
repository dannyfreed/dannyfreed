function capitlizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function() {
  $('[data-wanker]').wanker();
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 45
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Customize for specific companies
  var company = getParameterByName('hi')
  var logos = [
    {
      company: 'slack',
      logo: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 576 270" style="enable-background:new 0 0 576 270;" xml:space="preserve"> <style type="text/css"> .st0{fill:#ECB32D;} .st1{fill:#63C1A0;} .st2{fill:#E01A59;} .st3{fill:#331433;} .st4{fill:#D62027;} .st5{fill:#89D3DF;} .st6{fill:#258B74;} .st7{fill:#819C3C;} .st8{fill:#2D333A;} </style> <g> <g> <path class="st0" d="M141.8,87.1c-1.9-5.7-8-8.8-13.7-7c-5.7,1.9-8.8,8-7,13.7l28.1,86.4c1.9,5.3,7.7,8.3,13.2,6.7 c5.8-1.7,9.3-7.8,7.4-13.4C169.8,173.3,141.8,87.1,141.8,87.1z"/> <path class="st1" d="M98.3,101.2c-1.9-5.7-8-8.8-13.7-7c-5.7,1.9-8.8,8-7,13.7l28.1,86.4c1.9,5.3,7.7,8.3,13.2,6.7 c5.8-1.7,9.3-7.8,7.4-13.4C126.3,187.4,98.3,101.2,98.3,101.2z"/> <path class="st2" d="M177.2,158.6c5.7-1.9,8.8-8,7-13.7c-1.9-5.7-8-8.8-13.7-7L84,166.1c-5.3,1.9-8.3,7.7-6.7,13.2 c1.7,5.8,7.8,9.3,13.4,7.4C90.9,186.7,177.2,158.6,177.2,158.6z"/> <path class="st3" d="M102,183.1c5.6-1.8,12.9-4.2,20.7-6.7c-1.8-5.6-4.2-12.9-6.7-20.7l-20.7,6.7L102,183.1z"/> <path class="st4" d="M145.6,168.9c7.8-2.5,15.1-4.9,20.7-6.7c-1.8-5.6-4.2-12.9-6.7-20.7l-20.7,6.7L145.6,168.9z"/> <path class="st5" d="M163,115.1c5.7-1.9,8.8-8,7-13.7c-1.9-5.7-8-8.8-13.7-7l-86.4,28.1c-5.3,1.9-8.3,7.7-6.7,13.2 c1.7,5.8,7.8,9.3,13.4,7.4C76.8,143.1,163,115.1,163,115.1z"/> <path class="st6" d="M87.9,139.5c5.6-1.8,12.9-4.2,20.7-6.7c-2.5-7.8-4.9-15.1-6.7-20.7l-20.7,6.7L87.9,139.5z"/> <path class="st7" d="M131.4,125.4c7.8-2.5,15.1-4.9,20.7-6.7c-2.5-7.8-4.9-15.1-6.7-20.7l-20.7,6.7L131.4,125.4z"/> </g> </g> <path class="st8" d="M264.8,109.8c3.8,1.7,4.1,2.9,1.1,8.6c-3.1,5.8-3.8,6.2-7.6,4.7c-4.7-2-10.8-3.5-14.7-3.5 c-6.4,0-10.6,2.3-10.6,5.8c0,11.5,36.6,5.3,36.6,29.7c0,12.3-10.6,20.5-26.4,20.5c-8.3,0-18.6-2.8-25.7-6.4 c-3.5-1.8-3.8-2.8-0.7-8.7c2.6-5.1,3.5-5.7,7.3-4.1c6,2.6,13.7,4.7,18.8,4.7c5.8,0,9.7-2.4,9.7-5.8c0-11.1-37.3-5.8-37.3-29.5 c0-12.6,10.5-21,26.2-21C249.1,104.7,258.4,106.9,264.8,109.8z"/> <path class="st8" d="M294.4,80.8v91.2c0,1.4-1.5,2.8-3.5,2.8h-9.6c-2.1,0-3.5-1.5-3.5-2.8V80.8c0-4.5,1.3-4.9,8.3-4.9 C294.1,75.8,294.4,76.4,294.4,80.8z"/> <path class="st8" d="M362.6,132v39.3c0,2.1-1.5,3.5-3.5,3.5h-9.5c-2.2,0-3.7-1.6-3.5-3.8l0.1-4.2c-5.1,5.7-12.5,8.7-19.9,8.7 c-14.3,0-23.9-8.3-23.9-20.6c0-13.1,10.8-22,27.1-22c6.2,0,11.8,1.1,16.4,3v-4.5c0-7.2-5.7-11.5-15.4-11.5c-4.5,0-10.1,1.8-14.5,4.4 c-3.4,1.9-4.2,1.8-7.9-3.7c-3.6-5.5-3.5-6.5,0-8.8c6.7-4.3,15.7-7.1,24-7.1C350.8,104.7,362.6,114.8,362.6,132z M318.4,154.8 c0,4.7,4,7.8,9.9,7.8c7.2,0,13.8-3.5,17.6-9.4v-6.1c-3.8-1.5-8.5-2.3-12.6-2.3C324.3,144.8,318.4,149,318.4,154.8z"/> <path class="st8" d="M427.6,109.9c3.5,2,3.6,3.1-0.2,9c-3.6,5.6-4.2,5.9-8.1,4c-2.9-1.5-7.6-2.8-11.4-2.8c-12,0-20,7.9-20,19.9 c0,12.4,8,20.8,20,20.8c4.2,0,9.4-1.6,12.8-3.5c3.5-2,4.2-1.9,7.9,3.5c3.3,5,3.3,6.2,0.3,8.3c-5.4,3.7-13.8,6.5-21.3,6.5 c-22.2,0-37.1-14.2-37.1-35.6c0-21.2,14.9-35.3,37.3-35.3C414.6,104.7,422.6,107,427.6,109.9z"/> <path class="st8" d="M500.2,166.2c2.8,3.5,1.7,4.8-5.3,7.3c-7.1,2.6-8.1,2.4-10.6-0.8l-19.9-26.5l-8.9,8.6v17.2 c0,1.4-1.5,2.8-3.5,2.8h-9.6c-2.1,0-3.5-1.5-3.5-2.8V80.8c0-4.5,1.3-4.9,8.3-4.9c8.1,0,8.3,0.6,8.3,4.9v51.8l27.2-26.1 c3-2.8,4.7-2.6,10,0.9c5.9,3.8,6.3,4.9,3.5,7.6L476,134.8L500.2,166.2z"/> </svg>'
    }
  ]

  var logo = logos.filter(function( obj ) {
    if (obj.company === company) {
      return obj.logo
    }
  });
  if (logo.length) {
    $('.see-for-yourself').html("<span>I hope</span><span class='welcome-logo'>" + logo[0].logo + "</span><span> is next!</span>")
  }

});
