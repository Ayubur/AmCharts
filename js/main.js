$(window).on('resize', function(){
      var win = $(this);

      if(win.width() <=400){
        if($('.sidebar-fixed ').css('display')=='block'){
          $('.navbar-brand').addClass("navbar-brand-padding");
        }else{
            $('.navbar-brand').removeClass("navbar-brand-padding");
        }
      }
      else if (win.width() > 992) {

        $('.main').removeClass("padding-side");
        $('.navbar-brand').removeClass("navbar-brand-padding");

    }else if(win.width()<= 991){
      if($('.sidebar-fixed ').css('display')=='block'){
        $('.main').addClass("padding-side");
      }else{
          $('.main').removeClass("padding-side");
      }
    }

});
// Default Color picker declaration

$('.navbar-toggler').click(function(){
  $('.sidebar-fixed ').toggleClass('show-side');
  $('.main').toggleClass("padding-side");
});




//Modal issues



//Display element

$(document).ready(function(){
     $('#brand').click(function(){
           $('#hide-list').hide();
          $('#pie-chart-panel').css('display','none');
          $('#graph-chart-panel').css('display','none');
          $('#bar-chart-panel').css('display','none');
          $('#index-content').css('display','block');
    });

    $('#piechart').click(function(){
          $('#hide-list').removeClass("hidden");
               $('#hide-list').show();
          $('#pie-chart-panel').css('display','block');
          $('#graph-chart-panel').css('display','none');
          $('#bar-chart-panel').css('display','none');
          $('#index-content').css('display','none');
    });

    $('#linechart').click(function(){
          $('#hide-list').removeClass("hidden");
             $('#hide-list').show();
         $('#pie-chart-panel').css('display','none');
         $('#graph-chart-panel').css('display','block');
         $('#bar-chart-panel').css('display','none');
         $('#index-content').css('display','none');

    });

    $('#barchart').click(function(){
          $('#hide-list').removeClass("hidden");
             $('#hide-list').show();
          $('#pie-chart-panel').css('display','none');
          $('#bar-chart-panel').css('display','block');
           $('#graph-chart-panel').css('display','none');
          $('#index-content').css('display','none');

    });
});

/**
function showcharts(){
      var select_chart = $("#chart-type").val();
      if(select_chart== 'pie-chart'){
         $('.sp-replacer').css('display','inline-block');

             $('#pie-chart-panel').show();
            $('#graph-chart-panel').hide();
            $('#bar-chart-panel').hide();
      }
      else if(select_chart== 'graph-chart'){
         $('.sp-replacer').css('display','inline-block');

          $('#pie-chart-panel').hide();
         $('#graph-chart-panel').show();
         $('#bar-chart-panel').hide();
      }
      else if(select_chart== 'bar-chart'){
         $('.sp-replacer').css('display','inline-block');

        $('#pie-chart-panel').hide();
        $('#graph-chart-panel').hide();
        $('#bar-chart-panel').show();
      }
      else {
        $('#pie-chart-panel').hide();
        $('#graph-chart-panel').hide();
        $('#bar-chart-panel').hide();
      }
}

**/





/** New Side Menu **/
$(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');

    });

   // Remove menu for searching
   $('#search-trigger').click(function () {
        $('.navbar-nav').removeClass('slide-in');
        $('.side-body').removeClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').removeClass('slide-in');

    });
});
