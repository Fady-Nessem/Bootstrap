$( document ).ready( function(){
  
  $(window).scroll(function(){
    var scrolltop = $(window).scrollTop();
        
        if ( scrolltop > 50 ) {
            $(".navbar").addClass('overheader')       
        }
        else {
            $(".navbar").removeClass('overheader')
        }
  })

  $(".navbar-link").on('click' , function(){
    var ele = $(this).attr("href");
        $("html , body").animate({
          scrollTop: $(ele).offset().top
        } , 1000)
        })
  })