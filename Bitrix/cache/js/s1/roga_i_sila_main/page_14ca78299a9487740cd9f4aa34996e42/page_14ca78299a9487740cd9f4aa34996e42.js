
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582011364332";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){


    console.log($(".bxslider").length);

    if ( $(".bxslider").length > 0){
        $(".bxslider").bxSlider({
            controls: true

        });
    } else {
        $(".bxslider").bxSlider({
            auto: true,
            pause: 3000,
            controls: false
        });
    }
})




/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582011364332*/
