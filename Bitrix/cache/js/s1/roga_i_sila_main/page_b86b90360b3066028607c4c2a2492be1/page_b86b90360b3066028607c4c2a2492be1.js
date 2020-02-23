
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582010765348";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    if ( $(".bxslider").length === 1){
        $(".bxslider").bxSlider({
            pause: 3000,
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

console.log($(".banner").length);


/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582010765348*/
