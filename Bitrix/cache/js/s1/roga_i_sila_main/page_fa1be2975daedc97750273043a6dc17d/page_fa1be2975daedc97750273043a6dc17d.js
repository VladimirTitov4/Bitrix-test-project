
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582011554386";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){


    console.log($(".bxslider .banner").length);

    if ( $(".bxslider .banner").length > 0 && $(".bxslider .banner").length === 1){
        $(".bxslider").bxSlider({
            controls: false
        });
    } else {
        $(".bxslider").bxSlider({
            auto: true,
            pause: 3000,
            controls: true
        });
    }
})




/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582011554386*/
