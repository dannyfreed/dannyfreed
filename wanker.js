(function(){(function(e){return $.fn.wanker=function(e){var t;t=$.extend({delay:1e3,duration:1500},e);return this.each(function(){var e,n,r,i,s,o,u;e=$(this);i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(!i){r=false;o=null;n=null;u=null;s=function(){r=false;return n=null};return $(window).resize(function(){if(r){n=Math.abs(new Date-o)}else{o=new Date;r=true}if(n>t.delay){e.fadeIn()}if(u){clearTimeout(u)}return u=setTimeout(function(){e.fadeOut();return s()},t.duration)})}})}})($)}).call(this)