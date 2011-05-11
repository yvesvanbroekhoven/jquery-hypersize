/*
 * jQuery Hypersize
 * Original code by http://twitter.com/frederfred
 * Author: Yves Van Broekhoven
 */

(function($){
  
  var _init
  ,   _events
  ;
  
  _init = function(_this){
    
    // Gather browser and image size
    var browser_w = $(window).width();
    var browser_h = $(window).height();
  
    var bg_el     = _this;
    var bg_el_img = $('img', _this);
  
    var img_w     = bg_el_img.width();
    var img_h     = bg_el_img.height();
  
    // Define ratios
    var img_r     = img_h/img_w;
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
  
  _events = function(_this){
    $(window).resize(function(){
      _init(_this);
    });
  };
  
  $.fn.hypersize = function(options){
    $(this).each(function(){
      _init($(this));
      _events($(this));
    });
  };
  
}(jQuery));