
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1582014223401";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){

    var slider = $(".bxslider .banner");

    if (slider.length > 0 && slider.length === 1){
        slider({
            controls: false,
            pager: false
        });
    } else {
        slider({
            auto: true,
            pause: 500,
            stopAutoOnClick: true
        });
    }

    $(".bx-next").click(function () {
        
    })



})




/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1582014223401*/
