/*
 * jQuery Hypersize
 */

(function($){
  
  var _init
  ;
  
  _init = function(){
    
    // Gather browser and image size
    var browser_w = $(window).width();
    var browser_h = $(window).height();
  
    var bg_el = $('#background-image');
    var bg_el_img = $('#background-image img');
  
    var img_w = bg_el_img.width();
    var img_h = bg_el_img.height();
  
    // Define ratios
    var img_r = img_h/img_w;
    var browser_r = browser_h/browser_w;
  
    bg_el.width(browser_w).height(browser_h);
  
    if (browser_r < img_r)
    {
      bg_el_img.width(browser_w).height(browser_w * img_r);
    }
    else
    {
      bg_el_img.width(browser_h / img_r).height(browser_h);
    }
  
    bg_el_img.css({
      'margin-left' : (browser_w - bg_el_img.width())/2+'px',
      'margin-top'  : (browser_h - bg_el_img.height())/2+'px'
    });
    
  };
  
  $.fn.hypersize = function(options){
    _init();
  };
  
  $.fn.hypersize.defaults = {
    
  };
  
}(jQuery));

//function hyper_size()
//{
//  
//  
//  
//}
//
//$(window).resize(function(){
//  hyper_size();
//});