$(document).ready(function(){

    if ($(".bxslider .banner").length > 0 && $(".bxslider .banner").length > 1) {

        let slider = $(".bxslider").bxSlider({
            auto: true,
            pause: 3000,
            onSlideAfter: function(){
                slider.startAuto();
            }

        });
    }
})



