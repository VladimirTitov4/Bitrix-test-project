
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582012109370";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){

    if ( $(".bxslider .banner").length > 0 && $(".bxslider .banner").length === 1){
        $(".bxslider").bxSlider({
            controls: false,
            pager: false
        });
    } else {
        $(".bxslider").bxSlider({

            pause: 500,
            stopAutoOnClick: true,
            auto: true,
        });
    }
})




/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582012109370*/
