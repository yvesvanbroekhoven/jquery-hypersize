# jQuery Hypersize

With jQuery Hypersize you can put an image in the background of your site, 
and it will scale by ratio the the full dimensions of the viewport.

Originally coded by [http://twitter.com/frederfred](http://twitter.com/frederfred). Just jQueryfied by me.

## How to use?

### HTML
  
You need an element that contains an `<img>` just after the opening `<body>` tag.

    <div id="hypersize-background">
      <img src="path-to-an-image.jpg" alt="">
    </div>
    
### CSS

The containing element has to be positioned fixed, stretched over the viewport.
With the z-index, we can place everything else over it.

    #hypersize-background {
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

### Javascript

Offcourse, be sure you've include jQuery ;)

    <script src="http://www.google.com/jsapi?key="></script>
    <script type="text/javascript">
      google.load("jquery", "1.4");
    </script>

Include the script:

    <script src="jquery.hypersize.js"></script>

Run the script on window load:

    <script>
      window.onload = function(){
        $("#hypersize-background").hypersize();
      };
    </script>
    
The main reason why you should run this on window load and not on DOM ready is 
because webkit browsers can't get the image dimensions when the image isn't
loaded completely.