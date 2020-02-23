
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582014823373";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    if ($(".bxslider").length > 0) {
        slider = $(".bxslider").bxSlider({
            auto: true,
            isAutoplay: true,
            autoplaySpeed: 500,
            autoplay: true,
            pauseOnHover: false,
        });
        $('.bx-prev, .bx-next').click(function(){
            slider.startAuto();
        });
    }
});

/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582014823373*/
