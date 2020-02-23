
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582015765302";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    if ($(".bxslider").length > 0 && $(".banner").length > 1) {
        var slider = $(".bxslider").bxSlider({
            auto: true,
            pause: 3000,
            onSlideAfter: function(){
                slider.startAuto();
            }
        });
    }
})




/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582015765302*/
