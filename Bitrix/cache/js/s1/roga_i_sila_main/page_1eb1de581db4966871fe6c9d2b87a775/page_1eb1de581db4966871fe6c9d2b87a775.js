
; /* Start:"a:4:{s:4:"full";s:78:"/local/components/qsoft/main.banner/templates/.default/script.js?1581952551414";s:6:"source";s:64:"/local/components/qsoft/main.banner/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    if ( $(".bxslider").length>0){
        $(".bxslider").bxSlider({
            auto: true,
            speed: 3000,
            startSlide: 0,
            hideControlOnEnd: true,
            onSlideAfter: function($slideElement, oldIndex, newIndex){
                console.log('old: ' + oldIndex);
                console.log('new: ' + newIndex);
            }
        });
    }
})
/* End */
;; /* /local/components/qsoft/main.banner/templates/.default/script.js?1581952551414*/
