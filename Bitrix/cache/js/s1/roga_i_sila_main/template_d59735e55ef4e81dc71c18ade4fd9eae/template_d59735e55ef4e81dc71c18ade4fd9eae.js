
; /* Start:"a:4:{s:4:"full";s:73:"/local/templates/roga_i_sila_main/js/jquery.placeholder.js?15807194584515";s:6:"source";s:58:"/local/templates/roga_i_sila_main/js/jquery.placeholder.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input'),
	    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
	    prototype = $.fn,
	    valHooks = $.valHooks,
	    hooks,
	    placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);
				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != document.activeElement) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		isInputSupported || (valHooks.input = hooks);
		isTextareaSupported || (valHooks.textarea = hooks);

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {},
		    rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this,
		    $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == document.activeElement && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement,
		    input = this,
		    $input = $(input),
		    $origInput = $input,
		    id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': true,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

}(this, document, jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/local/templates/roga_i_sila_main/js/bxslider/jquery.bxslider.min.js?158071945819327";s:6:"source";s:64:"/local/templates/roga_i_sila_main/js/bxslider/jquery.bxslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * BxSlider v4.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var o={},r=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){o.settings=e.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return o.cssPrefix=t[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=e('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:u()}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(p()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=e('<div class="bx-controls" />'),o.settings.captions&&E(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var t="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,t).clone().addClass("bx-clone"),n=o.children.slice(-t).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==f()-1,o.settings.video&&r.fitVids();var s=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(s=r.children()),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&T(),o.settings.auto&&o.settings.autoControls&&C(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),s.imagesLoaded(g)},g=function(){o.loader.remove(),m(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(h()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,e(window).bind("resize",Y),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&W(),o.settings.pager&&M(o.settings.startSlide),o.settings.controls&&D(),o.settings.touchEnabled&&!o.settings.ticker&&O()},h=function(){var t=0,n=e();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),o.settings.slideMargin>0&&(t+=o.settings.slideMargin*(o.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},u=function(){var e="100%";return o.settings.slideWidth>0&&(e="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),e},p=function(){var e=o.settings.slideWidth,t=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>t&&!o.carousel||"vertical"==o.settings.mode?e=t:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(t>o.maxThreshold||o.minThreshold>t&&(e=(t-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)e=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)e=o.settings.maxSlides;else{var t=o.children.first().width();e=Math.floor(o.viewport.width()/t)}else"vertical"==o.settings.mode&&(e=o.settings.minSlides);return e},f=function(){var e=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)e=o.children.length/x();else for(var t=0,i=0;o.children.length>t;)++e,t=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else e=Math.ceil(o.children.length/v());return e},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},m=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var e=o.children.last(),t=e.position();S(-(t.left-(o.viewport.width()-e.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,t=o.children.eq(i).position();S(-t.top,"reset",0)}}else{var t=o.children.eq(o.active.index*x()).position();o.active.index==f()-1&&(o.active.last=!0),void 0!=t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}},S=function(e,t,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()})):"reset"==t?r.css(o.animProp,s):"ticker"==t&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),H()}))}else{var a={};a[o.animProp]=e,"slide"==t?r.animate(a,i,o.settings.easing,function(){I()}):"reset"==t?r.css(o.animProp,e):"ticker"==t&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),H()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var s="";o.settings.buildPager&&e.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(t)},w=function(){o.settings.pagerCustom?o.pagerEl=e(o.settings.pagerCustom):(o.pagerEl=e('<div class="bx-pager" />'),o.settings.pagerSelector?e(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),b()),o.pagerEl.delegate("a","click",z)},T=function(){o.controls.next=e('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=e('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",A),o.controls.prev.bind("click",P),o.settings.nextSelector&&e(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&e(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=e('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},C=function(){o.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=e('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",y),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?e(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),q(o.settings.autoStart?"stop":"start")},E=function(){o.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},A=function(e){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),e.preventDefault()},P=function(e){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),e.preventDefault()},k=function(e){r.startAuto(),e.preventDefault()},y=function(e){r.stopAuto(),e.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),t.preventDefault()},M=function(t){return"short"==o.settings.pagerType?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},I=function(){if(o.settings.infiniteLoop){var e="";0==o.active.index?e=o.children.eq(0).position():o.active.index==f()-1&&o.carousel?e=o.children.eq((f()-1)*x()).position():o.active.index==o.children.length-1&&(e=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},q=function(e){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[e]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},D=function(){1==f()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==f()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},W=function(){var t=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();t="horizontal"==o.settings.mode?-i.left:-i.top}S(t,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var t=0;o.children.each(function(){t+="horizontal"==o.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=o.settings.speed/t,n="horizontal"==o.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(r.css(n))));H(s)}),H()},H=function(e){speed=e?e:o.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?t=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-t.left:-t.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",N)},N=function(e){if(o.working)e.preventDefault();else{o.touch.originalPos=r.position();var t=e.originalEvent;o.touch.start.x=t.changedTouches[0].pageX,o.touch.start.y=t.changedTouches[0].pageY,o.viewport.bind("touchmove",B),o.viewport.bind("touchend",X)}},B=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=t.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},X=function(e){o.viewport.unbind("touchmove",B);var t=e.originalEvent,i=0;if(o.touch.end.x=t.changedTouches[0].pageX,o.touch.end.y=t.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",X)},Y=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,r.redrawSlider())};return r.goToSlide=function(t,i){if(!o.working&&o.active.index!=t)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>t?f()-1:t>=f()?0:t,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=f()-1,o.settings.pager&&M(o.active.index),o.settings.controls&&D(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){e(this).css("zIndex",50),I()});else{o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-x():(f()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find(".bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(t>=0){var c=t*x();s=o.children.eq(c).position()}if(s!==void 0){var g="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var e=parseInt(o.active.index)+1;r.goToSlide(e,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var e=parseInt(o.active.index)-1;r.goToSlide(e,"prev")}},r.startAuto=function(e){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=e&&q("stop"))},r.stopAuto=function(e){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=e&&q("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(p()),o.viewport.css("height",h()),o.settings.ticker||m(),o.active.last&&(o.active.index=f()-1),o.active.index>=f()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(b(),M(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,e(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),e(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),e(window).unbind("resize",Y))},r.reloadSlider=function(e){void 0!=e&&(s=e),r.destroySlider(),d()},d(),this}})(jQuery),function(e,t){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(n){function s(){var t=e(g),i=e(h);a&&(h.length?a.reject(d,t,i):a.resolve(d)),e.isFunction(n)&&n.call(r,d,t,i)}function o(t,n){t.src===i||-1!==e.inArray(t,c)||(c.push(t),n?h.push(t):g.push(t),e.data(t,"imagesLoaded",{isBroken:n,src:t.src}),l&&a.notifyWith(e(t),[n,d,e(g),e(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=e.isFunction(e.Deferred)?e.Deferred():0,l=e.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return e.isPlainObject(n)&&e.each(n,function(e,t){"callback"===e?n=t:a&&a[e](t)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(e){o(e.target,"error"===e.type)}).each(function(n,s){var r=s.src,a=e.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==t?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/roga_i_sila_main/js/default_script.js?15807194583141";s:6:"source";s:54:"/local/templates/roga_i_sila_main/js/default_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(window).load(function(){
  /*footer_bottom*/
    var f_height = $(".footer").outerHeight();
    var f_inner_height = $(".footer_inner").outerHeight();
    $(".footer").css("margin-top", (-1)*f_height);
    $(".d_footer").css("height", f_height);
    $(".base_layer").css("bottom", f_inner_height);
  /*x_footer_bottom*/
});

$(document).ready(function(){
	if ( $(".bxslider").length>0){
		$(".bxslider").bxSlider({
			auto:true
		});
	}

	$("select:visible").selectmenu({handleWidth: 26});
  $('input[placeholder], textarea[placeholder]').placeholder();


  /*fixed_block*/
  	var fixed_block = $(".fixed_block");
      var fixed_block_height = $(".fixed_block").outerHeight();
   	var fixed_block_top = $(fixed_block).offset().top;
  	 window.onscroll = function() {
  	 	var pageY = window.pageYOffset || document.documentElement.scrollTop;
  	 	 if (pageY >= fixed_block_top) {
       		 $(fixed_block).addClass("fixed");
               $(".header").css("margin-bottom", fixed_block_height);
     		 } else {
       		 $(fixed_block, ".header").removeClass("fixed");
                $(".header").css("margin-bottom", '0');
     		 }
  	 }
  /*x_fixed_block*/

  /*catalog*/
      $(".product_item_pict img").hover(
          function(){
              $(this).parents(".product_item").find("h3 a").addClass("active");
          },
          function(){
              $(this).parents(".product_item").find("h3 a").removeClass("active");
          }
      );
  /*x_catalog*/

  $('.content_area table').each(function(){
      if (!$(this).hasClass('without_color')) {
          $("tbody tr:odd").css('background-color', '#f8f8f8');
      }
  })

  /*dynamic_pie*/
    function setPie(selectors){
        jQuery(selectors).css("behavior", "url(../PIE.htc)");
      };
      function unsetPie(selectors){
        jQuery(selectors).css("behavior", "none")
      };
      function resetPie(selectors){
          unsetPie(selectors);
          setPie(selectors);
      };

      /*ie7_or_ie8*/
      var old_ie = false, htmlclass_str;
      htmlclass_str = $("html").attr("class");
      if (typeof(htmlclass_str) != "undefined"){
        if ( (htmlclass_str.indexOf("ie8") + 1) || (htmlclass_str.indexOf("ie7") + 1) ) { old_ie = true; };
      }
     /*x_ie7_or_ie8*/

  $(".main_menu li.submenu").hover(
    function () {
      var submenu = $(this).find('ul');
      submenu.css("display","block");
      if (old_ie){
        $(this).find(".submenu_border").css("width", $(this).outerWidth()-2);
        resetPie(this);
        resetPie(submenu);
      }
  },
    function(){
      var submenu = $(this).find('ul');
      submenu.css("display","none");
    }
  );
  /*x_dynamic_pie*/

  var $t = $('.b-trans-type');
  while($t.children('.b-trans-type__wrapper:not(.wrap)').length)
  $t.children('.b-trans-type__wrapper:not(.wrap):lt(2)').wrapAll('<div class="wrap">');
  
  var $c = $('.b-color');
  while($c.children('.b-color__wrapper:not(.wrap)').length)
  $c.children('.b-color__wrapper:not(.wrap):lt(2)').wrapAll('<div class="wrap">');
})
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.core.js?15807194588865";s:6:"source";s:75:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.core.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery UI @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function( $, undefined ) {

// prevent duplicate loading
// this is only a problem because we proxy existing functions
// and we don't want to double proxy them
$.ui = $.ui || {};
if ( $.ui.version ) {
	return;
}

$.extend( $.ui, {
	version: "@VERSION",

	keyCode: {
		ALT: 18,
		BACKSPACE: 8,
		CAPS_LOCK: 20,
		COMMA: 188,
		COMMAND: 91,
		COMMAND_LEFT: 91, // COMMAND
		COMMAND_RIGHT: 93,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		MENU: 93, // COMMAND_RIGHT
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38,
		WINDOWS: 91 // COMMAND
	}
});

// plugins
$.fn.extend({
	propAttr: $.fn.prop || $.fn.attr,

	_focus: $.fn.focus,
	focus: function( delay, fn ) {
		return typeof delay === "number" ?
			this.each(function() {
				var elem = this;
				setTimeout(function() {
					$( elem ).focus();
					if ( fn ) {
						fn.call( elem );
					}
				}, delay );
			}) :
			this._focus.apply( this, arguments );
	},

	scrollParent: function() {
		var scrollParent;
		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.curCSS( elem, "padding" + this, true) ) || 0;
				if ( border ) {
					size -= parseFloat( $.curCSS( elem, "border" + this + "Width", true) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.curCSS( elem, "margin" + this, true) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		var map = element.parentNode,
			mapName = map.name,
			img;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName )
		? !element.disabled
		: "a" == nodeName
			? element.href || isTabIndexNotNaN
			: isTabIndexNotNaN)
		// the element and all of its ancestors must be visible
		&& visible( element );
}

function visible( element ) {
	return !$( element ).parents().andSelf().filter(function() {
		return $.curCSS( this, "visibility" ) === "hidden" ||
			$.expr.filters.hidden( this );
	}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support
$(function() {
	var body = document.body,
		div = body.appendChild( div = document.createElement( "div" ) );

	// access offsetHeight before setting the style to prevent a layout bug
	// in IE 9 which causes the elemnt to continue to take up space even
	// after it is removed from the DOM (#8026)
	div.offsetHeight;

	$.extend( div.style, {
		minHeight: "100px",
		height: "auto",
		padding: 0,
		borderWidth: 0
	});

	$.support.minHeight = div.offsetHeight === 100;
	$.support.selectstart = "onselectstart" in div;

	// set display to none to avoid a layout bug in IE
	// http://dev.jquery.com/ticket/4014
	body.removeChild( div ).style.display = "none";
});

// jQuery <1.4.3 uses curCSS, in 1.4.3 - 1.7.2 curCSS = css, 1.8+ only has css
if ( !$.curCSS ) {
	$.curCSS = $.css;
}





// deprecated
$.extend( $.ui, {
	// $.ui.plugin is deprecated.  Use the proxy pattern instead.
	plugin: {
		add: function( module, option, set ) {
			var proto = $.ui[ module ].prototype;
			for ( var i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode ) {
				return;
			}
	
			for ( var i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},
	
	// will be deprecated when we switch to jQuery 1.4 - use jQuery.contains()
	contains: function( a, b ) {
		return document.compareDocumentPosition ?
			a.compareDocumentPosition( b ) & 16 :
			a !== b && a.contains( b );
	},
	
	// only used by resizable
	hasScroll: function( el, a ) {
	
		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}
	
		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;
	
		if ( el[ scroll ] > 0 ) {
			return true;
		}
	
		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},
	
	// these are odd functions, fix the API or move into individual plugins
	isOverAxis: function( x, reference, size ) {
		//Determines when x coordinate is over "b" element axis
		return ( x > reference ) && ( x < ( reference + size ) );
	},
	isOver: function( y, x, top, left, height, width ) {
		//Determines when x, y coordinates is over "b" element
		return $.ui.isOverAxis( y, top, height ) && $.ui.isOverAxis( x, left, width );
	}
});

})( jQuery );

/* End */
;
; /* Start:"a:4:{s:4:"full";s:92:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.widget.js?15807194587005";s:6:"source";s:77:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.widget.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery UI Widget @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						try {
							$( this ).triggerHandler( "remove" );
						// http://bugs.jquery.com/ticket/8235
						} catch( e ) {}
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				// TODO: add this back in 1.9 and use $.error() (see #5972)
//				if ( !instance ) {
//					throw "cannot call methods on " + name + " prior to initialization; " +
//						"attempted to call method '" + options + "'";
//				}
//				if ( !$.isFunction( instance[options] ) ) {
//					throw "no such method '" + options + "' for " + name + " widget instance";
//				}
//				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );

/* End */
;
; /* Start:"a:4:{s:4:"full";s:94:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.position.js?15807194589017";s:6:"source";s:79:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.position.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery UI Position @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function( $, undefined ) {

$.ui = $.ui || {};

var horizontalPositions = /left|center|right/,
	verticalPositions = /top|center|bottom/,
	center = "center",
	support = {},
	_position = $.fn.position,
	_offset = $.fn.offset;

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var target = $( options.of ),
		targetElem = target[0],
		collision = ( options.collision || "flip" ).split( " " ),
		offset = options.offset ? options.offset.split( " " ) : [ 0, 0 ],
		targetWidth,
		targetHeight,
		basePosition;

	if ( targetElem.nodeType === 9 ) {
		targetWidth = target.width();
		targetHeight = target.height();
		basePosition = { top: 0, left: 0 };
	// TODO: use $.isWindow() in 1.9
	} else if ( targetElem.setTimeout ) {
		targetWidth = target.width();
		targetHeight = target.height();
		basePosition = { top: target.scrollTop(), left: target.scrollLeft() };
	} else if ( targetElem.preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
		targetWidth = targetHeight = 0;
		basePosition = { top: options.of.pageY, left: options.of.pageX };
	} else {
		targetWidth = target.outerWidth();
		targetHeight = target.outerHeight();
		basePosition = target.offset();
	}

	// force my and at to have valid horizontal and veritcal positions
	// if a value is missing or invalid, it will be converted to center 
	$.each( [ "my", "at" ], function() {
		var pos = ( options[this] || "" ).split( " " );
		if ( pos.length === 1) {
			pos = horizontalPositions.test( pos[0] ) ?
				pos.concat( [center] ) :
				verticalPositions.test( pos[0] ) ?
					[ center ].concat( pos ) :
					[ center, center ];
		}
		pos[ 0 ] = horizontalPositions.test( pos[0] ) ? pos[ 0 ] : center;
		pos[ 1 ] = verticalPositions.test( pos[1] ) ? pos[ 1 ] : center;
		options[ this ] = pos;
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	// normalize offset option
	offset[ 0 ] = parseInt( offset[0], 10 ) || 0;
	if ( offset.length === 1 ) {
		offset[ 1 ] = offset[ 0 ];
	}
	offset[ 1 ] = parseInt( offset[1], 10 ) || 0;

	if ( options.at[0] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[0] === center ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[1] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[1] === center ) {
		basePosition.top += targetHeight / 2;
	}

	basePosition.left += offset[ 0 ];
	basePosition.top += offset[ 1 ];

	return this.each(function() {
		var elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseInt( $.curCSS( this, "marginLeft", true ) ) || 0,
			marginTop = parseInt( $.curCSS( this, "marginTop", true ) ) || 0,
			collisionWidth = elemWidth + marginLeft +
				( parseInt( $.curCSS( this, "marginRight", true ) ) || 0 ),
			collisionHeight = elemHeight + marginTop +
				( parseInt( $.curCSS( this, "marginBottom", true ) ) || 0 ),
			position = $.extend( {}, basePosition ),
			collisionPosition;

		if ( options.my[0] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[0] === center ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[1] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[1] === center ) {
			position.top -= elemHeight / 2;
		}

		// prevent fractions if jQuery version doesn't support them (see #5280)
		if ( !support.fractions ) {
			position.left = Math.round( position.left );
			position.top = Math.round( position.top );
		}

		collisionPosition = {
			left: position.left - marginLeft,
			top: position.top - marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[i] ] ) {
				$.ui.position[ collision[i] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: offset,
					my: options.my,
					at: options.at
				});
			}
		});

		if ( $.fn.bgiframe ) {
			elem.bgiframe();
		}
		elem.offset( $.extend( position, { using: options.using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var win = $( window ),
				over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft();
			position.left = over > 0 ? position.left - over : Math.max( position.left - data.collisionPosition.left, position.left );
		},
		top: function( position, data ) {
			var win = $( window ),
				over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop();
			position.top = over > 0 ? position.top - over : Math.max( position.top - data.collisionPosition.top, position.top );
		}
	},

	flip: {
		left: function( position, data ) {
			if ( data.at[0] === center ) {
				return;
			}
			var win = $( window ),
				over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft(),
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					-data.targetWidth,
				offset = -2 * data.offset[ 0 ];
			position.left += data.collisionPosition.left < 0 ?
				myOffset + atOffset + offset :
				over > 0 ?
					myOffset + atOffset + offset :
					0;
		},
		top: function( position, data ) {
			if ( data.at[1] === center ) {
				return;
			}
			var win = $( window ),
				over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop(),
				myOffset = data.my[ 1 ] === "top" ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					-data.targetHeight,
				offset = -2 * data.offset[ 1 ];
			position.top += data.collisionPosition.top < 0 ?
				myOffset + atOffset + offset :
				over > 0 ?
					myOffset + atOffset + offset :
					0;
		}
	}
};

// offset setter from jQuery 1.4
if ( !$.offset.setOffset ) {
	$.offset.setOffset = function( elem, options ) {
		// set position first, in-case top/left are set even on static elem
		if ( /static/.test( $.curCSS( elem, "position" ) ) ) {
			elem.style.position = "relative";
		}
		var curElem   = $( elem ),
			curOffset = curElem.offset(),
			curTop    = parseInt( $.curCSS( elem, "top",  true ), 10 ) || 0,
			curLeft   = parseInt( $.curCSS( elem, "left", true ), 10)  || 0,
			props     = {
				top:  (options.top  - curOffset.top)  + curTop,
				left: (options.left - curOffset.left) + curLeft
			};
		
		if ( 'using' in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	};

	$.fn.offset = function( options ) {
		var elem = this[ 0 ];
		if ( !elem || !elem.ownerDocument ) { return null; }
		if ( options ) {
			if ( $.isFunction( options ) ) {
				return this.each(function( i ) {
					$( this ).offset( options.call( this, i, $( this ).offset() ) );
				});
			}
			return this.each(function() {
				$.offset.setOffset( this, options );
			});
		}
		return _offset.call( this );
	};
}

// jQuery <1.4.3 uses curCSS, in 1.4.3 - 1.7.2 curCSS = css, 1.8+ only has css
if ( !$.curCSS ) {
	$.curCSS = $.css;
}

// fraction support test (older versions of jQuery don't support fractions)
(function () {
	var body = document.getElementsByTagName( "body" )[ 0 ], 
		div = document.createElement( "div" ),
		testElement, testElementParent, testElementStyle, offset, offsetTotal;

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( var i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";

	offset = $( div ).offset( function( _, offset ) {
		return offset;
	}).offset();

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );

	offsetTotal = offset.top + offset.left + ( body ? 2000 : 0 );
	support.fractions = offsetTotal > 21 && offsetTotal < 22;
})();

}( jQuery ));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:97:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.selectmenu.js?158071945826504";s:6:"source";s:81:"/local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.selectmenu.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
 /*
 * jQuery UI Selectmenu version 1.3.0
 *
 * Copyright (c) 2009-2010 filament group, http://filamentgroup.com
 * Copyright (c) 2010-2012 Felix Nagel, http://www.felixnagel.com
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */

(function($) {

$.widget("ui.selectmenu", {
	options: {
		appendTo: "body",
		typeAhead: 1000,
		style: 'dropdown',
		positionOptions: {
			my: "left top",
			at: "left bottom",
			offset: null
		},
		width: null,
		menuWidth: null,
		handleWidth: 26,
		maxHeight: null,
		icons: null,
		format: null,
		escapeHtml: false,
		bgImage: function() {}
	},

	_create: function() {
		var self = this, o = this.options;

		// set a default id value, generate a new random one if not set by developer
		var selectmenuId = (this.element.attr( 'id' ) || 'ui-selectmenu-' + Math.random().toString( 16 ).slice( 2, 10 )).replace(/(:|\.)/g,'')

		// quick array of button and menu id's
		this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];

		// define safe mouseup for future toggling
		this._safemouseup = true;
		this.isOpen = false;

		// create menu button wrapper
		this.newelement = $( '<a />', {
			'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
			'id' : this.ids[ 1 ],
			'role': 'button',
			'href': '#nogo',
			'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
			'aria-haspopup': true,
			'aria-owns': this.ids[ 2 ]
		});
		this.newelementWrap = $( "<span />" )
			.append( this.newelement )
			.insertAfter( this.element );

		// transfer tabindex
		var tabindex = this.element.attr( 'tabindex' );
		if ( tabindex ) {
			this.newelement.attr( 'tabindex', tabindex );
		}

		// save reference to select in data for ease in calling methods
		this.newelement.data( 'selectelement', this.element );

		// menu icon
		this.selectmenuIcon = $( '<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>' )
			.prependTo( this.newelement );

		// append status span to button
		this.newelement.prepend( '<span class="' + self.widgetBaseClass + '-status" />' );

		// make associated form label trigger focus
		this.element.bind({
			'click.selectmenu':  function( event ) {
				self.newelement.focus();
				event.preventDefault();
			}
		});

		// click toggle for menu visibility
		this.newelement
			.bind('mousedown.selectmenu', function(event) {
				self._toggle(event, true);
				// make sure a click won't open/close instantly
				if (o.style == "popup") {
					self._safemouseup = false;
					setTimeout(function() { self._safemouseup = true; }, 300);
				}
				return false;
			})
			.bind('click.selectmenu', function() {
				return false;
			})
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.ENTER:
						ret = true;
						break;
					case $.ui.keyCode.SPACE:
						self._toggle(event);
						break;
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveSelection(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveSelection(1);
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						break;
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.HOME:
						self.index(0);
						break;
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.END:
						self.index(self._optionLis.length);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'mouseup');
				}
				return true;
			})
			.bind('mouseover.selectmenu', function() {
				if (!o.disabled) $(this).addClass('ui-state-hover');
			})
			.bind('mouseout.selectmenu', function() {
				if (!o.disabled) $(this).removeClass('ui-state-hover');
			})
			.bind('focus.selectmenu', function() {
				if (!o.disabled) $(this).addClass('ui-state-focus');
			})
			.bind('blur.selectmenu', function() {
				if (!o.disabled) $(this).removeClass('ui-state-focus');
			});

		// document click closes menu
		$(document).bind("mousedown.selectmenu-" + this.ids[0], function(event) {
			if ( self.isOpen ) {
				self.close( event );
			}
		});

		// change event on original selectmenu
		this.element
			.bind("click.selectmenu", function() {
				self._refreshValue();
			})
			// FIXME: newelement can be null under unclear circumstances in IE8
			// TODO not sure if this is still a problem (fnagel 20.03.11)
			.bind("focus.selectmenu", function() {
				if (self.newelement) {
					self.newelement[0].focus();
				}
			});

		// set width when not set via options
		if (!o.width) {
			o.width = this.element.outerWidth();
		}
		// set menu button width
		this.newelement.width(o.width);

		// hide original selectmenu element
		this.element.hide();

		// create menu portion, append to body
		this.list = $( '<ul />', {
			'class': 'ui-widget ui-widget-content',
			'aria-hidden': true,
			'role': 'listbox',
			'aria-labelledby': this.ids[1],
			'id': this.ids[2]
		});
		this.listWrap = $( "<div />", {
			'class': self.widgetBaseClass + '-menu'
		}).append( this.list ).appendTo( o.appendTo );

		// transfer menu click to menu button
		this.list
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveFocus(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveFocus(1);
						break;
					case $.ui.keyCode.HOME:
						self._moveFocus(':first');
						break;
					case $.ui.keyCode.PAGE_UP:
						self._scrollPage('up');
						break;
					case $.ui.keyCode.PAGE_DOWN:
						self._scrollPage('down');
						break;
					case $.ui.keyCode.END:
						self._moveFocus(':last');
						break;
					case $.ui.keyCode.ENTER:
					case $.ui.keyCode.SPACE:
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.ESCAPE:
						self.close(event, true);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'focus');
				}
				return true;
			})
			// this allows for using the scrollbar in an overflowed list
			.bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });

		// needed when window is resized
		$(window).bind( "resize.selectmenu-" + this.ids[0], $.proxy( self.close, this ) );
	},

	_init: function() {
		var self = this, o = this.options;

		// serialize selectmenu element options
		var selectOptionData = [];
		this.element.find('option').each(function() {
			var opt = $(this);
			selectOptionData.push({
				value: opt.attr('value'),
				text: self._formatText(opt.text(), opt),
				selected: opt.attr('selected'),
				disabled: opt.attr('disabled'),
				classes: opt.attr('class'),
				typeahead: opt.attr('typeahead'),
				parentOptGroup: opt.parent('optgroup'),
				bgImage: o.bgImage.call(opt)
			});
		});

		// active state class is only used in popup style
		var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";

		// empty list so we can refresh the selectmenu via selectmenu()
		this.list.html("");

		// write li's
		if (selectOptionData.length) {
			for (var i = 0; i < selectOptionData.length; i++) {
				var thisLiAttr = { role : 'presentation' };
				if ( selectOptionData[ i ].disabled ) {
					thisLiAttr[ 'class' ] = this.namespace + '-state-disabled';
				}
				var thisAAttr = {
					html: selectOptionData[i].text || '&nbsp;',
					href : '#nogo',
					tabindex : -1,
					role : 'option',
					'aria-selected' : false
				};
				if ( selectOptionData[ i ].disabled ) {
					thisAAttr[ 'aria-disabled' ] = selectOptionData[ i ].disabled;
				}
				if ( selectOptionData[ i ].typeahead ) {
					thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
				}
				var thisA = $('<a/>', thisAAttr)
					.bind('focus.selectmenu', function() {
						$(this).parent().mouseover();
					})
					.bind('blur.selectmenu', function() {
						$(this).parent().mouseout();
					});
				var thisLi = $('<li/>', thisLiAttr)
					.append(thisA)
					.data('index', i)
					.addClass(selectOptionData[i].classes)
					.data('optionClasses', selectOptionData[i].classes || '')
					.bind("mouseup.selectmenu", function(event) {
						if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($( event.currentTarget ).parents( "ul>li." + self.widgetBaseClass + "-group " )) ) {
							self.index($(this).data('index'));
							self.select(event);
							self.close(event, true);
						}
						return false;
					})
					.bind("click.selectmenu", function() {
						return false;
					})
					.bind('mouseover.selectmenu', function() {
						// no hover if diabled
						if (!$(this).hasClass(self.namespace + '-state-disabled') && !$(this).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
							self._selectedOptionLi().addClass(activeClass);
							self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
							$(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
						}
					})
					.bind('mouseout.selectmenu', function() {
						if ($(this).is(self._selectedOptionLi())) {
							$(this).addClass(activeClass);
						}
						$(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
					});

				// optgroup or not...
				if ( selectOptionData[i].parentOptGroup.length ) {
					var optGroupName = self.widgetBaseClass + '-group-' + this.element.find( 'optgroup' ).index( selectOptionData[i].parentOptGroup );
					if (this.list.find( 'li.' + optGroupName ).length ) {
						this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
					} else {
						$(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"' ) + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ')
							.appendTo( this.list )
							.find( 'ul' )
							.append( thisLi );
					}
				} else {
					thisLi.appendTo(this.list);
				}

				// append icon if option is specified
				if (o.icons) {
					for (var j in o.icons) {
						if (thisLi.is(o.icons[j].find)) {
							thisLi
								.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon')
								.addClass(self.widgetBaseClass + '-hasIcon');
							var iconClass = o.icons[j].icon || "";
							thisLi
								.find('a:eq(0)')
								.prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
							if (selectOptionData[i].bgImage) {
								thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
							}
						}
					}
				}
			}
		} else {
			$('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
		}
		// we need to set and unset the CSS classes for dropdown and popup style
		var isDropDown = ( o.style == 'dropdown' );
		this.newelement
			.toggleClass( self.widgetBaseClass + '-dropdown', isDropDown )
			.toggleClass( self.widgetBaseClass + '-popup', !isDropDown );
		this.list
			.toggleClass( self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown )
			.toggleClass( self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown )
			// add corners to top and bottom menu items
			.find( 'li:first' )
			.toggleClass( 'ui-corner-top', !isDropDown )
			.end().find( 'li:last' )
			.addClass( 'ui-corner-bottom' );
		this.selectmenuIcon
			.toggleClass( 'ui-icon-triangle-1-s', isDropDown )
			.toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );

		// set menu width to either menuWidth option value, width option value, or select width
		if ( o.style == 'dropdown' ) {
			this.list.width( o.menuWidth ? o.menuWidth : o.width );
		} else {
			this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
		}

		// reset height to auto
		this.list.css( 'height', 'auto' );
		var listH = this.listWrap.height();
		var winH = $( window ).height();
		// calculate default max height
		var maxH = o.maxHeight ? Math.min( o.maxHeight, winH ) : winH / 3;
		if ( listH > maxH ) this.list.height( maxH );

		// save reference to actionable li's (not group label li's)
		this._optionLis = this.list.find( 'li:not(.' + self.widgetBaseClass + '-group)' );

		// transfer disabled state
		if ( this.element.attr( 'disabled' ) ) {
			this.disable();
		} else {
			this.enable();
		}

		// update value
		this._refreshValue();

		// set selected item so movefocus has intial state
		this._selectedOptionLi().addClass(this.widgetBaseClass + '-item-focus');

		// needed when selectmenu is placed at the very bottom / top of the page
		clearTimeout(this.refreshTimeout);
		this.refreshTimeout = window.setTimeout(function () {
			self._refreshPosition();
		}, 200);
	},

	destroy: function() {
		this.element.removeData( this.widgetName )
			.removeClass( this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled' )
			.removeAttr( 'aria-disabled' )
			.unbind( ".selectmenu" );

		$( window ).unbind( ".selectmenu-" + this.ids[0] );
		$( document ).unbind( ".selectmenu-" + this.ids[0] );

		this.newelementWrap.remove();
		this.listWrap.remove();

		// unbind click event and show original select
		this.element
			.unbind(".selectmenu")
			.show();

		// call widget destroy function
		$.Widget.prototype.destroy.apply(this, arguments);
	},

	_typeAhead: function( code, eventType ) {
		var self = this,
			c = String.fromCharCode(code).toLowerCase(),
			matchee = null,
			nextIndex = null;

		// Clear any previous timer if present
		if ( self._typeAhead_timer ) {
			window.clearTimeout( self._typeAhead_timer );
			self._typeAhead_timer = undefined;
		}

		// Store the character typed
		self._typeAhead_chars = (self._typeAhead_chars === undefined ? "" : self._typeAhead_chars).concat(c);

		// Detect if we are in cyciling mode or direct selection mode
		if ( self._typeAhead_chars.length < 2 ||
		     (self._typeAhead_chars.substr(-2, 1) === c && self._typeAhead_cycling) ) {
			self._typeAhead_cycling = true;

			// Match only the first character and loop
			matchee = c;
		}
		else {
			// We won't be cycling anymore until the timer expires
			self._typeAhead_cycling = false;

			// Match all the characters typed
			matchee = self._typeAhead_chars;
		}

		// We need to determine the currently active index, but it depends on
		// the used context: if it's in the element, we want the actual
		// selected index, if it's in the menu, just the focused one
		// I copied this code from _moveSelection() and _moveFocus()
		// respectively --thg2k
		var selectedIndex = (eventType !== 'focus' ?
			this._selectedOptionLi().data('index') :
			this._focusedOptionLi().data('index')) || 0;

		for (var i = 0; i < this._optionLis.length; i++) {
			var thisText = this._optionLis.eq(i).text().substr(0, matchee.length).toLowerCase();

			if ( thisText === matchee ) {
				if ( self._typeAhead_cycling ) {
					if ( nextIndex === null )
						nextIndex = i;

					if ( i > selectedIndex ) {
						nextIndex = i;
						break;
					}
				} else {
					nextIndex = i;
				}
			}
		}

		if ( nextIndex !== null ) {
			// Why using trigger() instead of a direct method to select the
			// index? Because we don't what is the exact action to do, it
			// depends if the user is typing on the element or on the popped
			// up menu
			this._optionLis.eq(nextIndex).find("a").trigger( eventType );
		}

		self._typeAhead_timer = window.setTimeout(function() {
			self._typeAhead_timer = undefined;
			self._typeAhead_chars = undefined;
			self._typeAhead_cycling = undefined;
		}, self.options.typeAhead);
	},

	// returns some usefull information, called by callbacks only
	_uiHash: function() {
		var index = this.index();
		return {
			index: index,
			option: $("option", this.element).get(index),
			value: this.element[0].value
		};
	},

	open: function(event) {
		var self = this, o = this.options;
		if ( self.newelement.attr("aria-disabled") != 'true' ) {
			self._closeOthers(event);
			self.newelement.addClass('ui-state-active');

			self.list.attr('aria-hidden', false);
			self.listWrap.addClass( self.widgetBaseClass + '-open' );

			var selected = this._selectedOptionLi();
			if ( o.style == "dropdown" ) {
				self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
			} else {
				// center overflow and avoid flickering
				this.list
					.css("left", -5000)
					.scrollTop( this.list.scrollTop() + selected.position().top - this.list.outerHeight()/2 + selected.outerHeight()/2 )
					.css("left","auto");
			}

			self._refreshPosition();

			var link = selected.find("a");
			if (link.length) link[0].focus();

			self.isOpen = true;
			self._trigger("open", event, self._uiHash());
		}
	},

	close: function(event, retainFocus) {
		if ( this.newelement.is('.ui-state-active') ) {
			this.newelement
				.removeClass('ui-state-active');
			this.listWrap.removeClass(this.widgetBaseClass + '-open');
			this.list.attr('aria-hidden', true);
			if ( this.options.style == "dropdown" ) {
				this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
			}
			if ( retainFocus ) {
				this.newelement.focus();
			}
			this.isOpen = false;
			this._trigger("close", event, this._uiHash());
		}
	},

	change: function(event) {
		this.element.trigger("change");
		this._trigger("change", event, this._uiHash());
	},

	select: function(event) {
		if (this._disabled(event.currentTarget)) { return false; }
		this._trigger("select", event, this._uiHash());
	},

	widget: function() {
		return this.listWrap.add( this.newelementWrap );
	},

	_closeOthers: function(event) {
		$('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function() {
			$(this).data('selectelement').selectmenu('close', event);
		});
		$('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
	},

	_toggle: function(event, retainFocus) {
		if ( this.isOpen ) {
			this.close(event, retainFocus);
		} else {
			this.open(event);
		}
	},

	_formatText: function(text, opt) {
		if (this.options.format) {
			text = this.options.format(text, opt);
		} else if (this.options.escapeHtml) {
			text = $('<div />').text(text).html();
		}
		return text;
	},

	_selectedIndex: function() {
		return this.element[0].selectedIndex;
	},

	_selectedOptionLi: function() {
		return this._optionLis.eq(this._selectedIndex());
	},

	_focusedOptionLi: function() {
		return this.list.find('.' + this.widgetBaseClass + '-item-focus');
	},

	_moveSelection: function(amt, recIndex) {
		// do nothing if disabled
		if (!this.options.disabled) {
			var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
			// do not loop when using up key

			if (newIndex < 0) {
				newIndex = 0;
			}
			if (newIndex > this._optionLis.size() - 1) {
				newIndex = this._optionLis.size() - 1;
			}
			// Occurs when a full loop has been made
			if (newIndex === recIndex) { return false; }

			if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
				// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
				(amt > 0) ? ++amt : --amt;
				this._moveSelection(amt, newIndex);
			} else {
				this._optionLis.eq(newIndex).trigger('mouseover').trigger('mouseup');
			}
		}
	},

	_moveFocus: function(amt, recIndex) {
		if (!isNaN(amt)) {
			var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
		} else {
			var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
		}

		if (newIndex < 0) {
			newIndex = 0;
		}
		if (newIndex > this._optionLis.size() - 1) {
			newIndex = this._optionLis.size() - 1;
		}

		//Occurs when a full loop has been made
		if (newIndex === recIndex) { return false; }

		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);

		this._focusedOptionLi().find('a:eq(0)').attr('id', '');

		if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
			// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
			(amt > 0) ? ++amt : --amt;
			this._moveFocus(amt, newIndex);
		} else {
			this._optionLis.eq(newIndex).find('a:eq(0)').attr('id',activeID).focus();
		}

		this.list.attr('aria-activedescendant', activeID);
	},

	_scrollPage: function(direction) {
		var numPerPage = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
		numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
		this._moveFocus(numPerPage);
	},

	_setOption: function(key, value) {
		this.options[key] = value;
		// set
		if (key == 'disabled') {
			if (value) this.close();
			this.element
				.add(this.newelement)
				.add(this.list)[value ? 'addClass' : 'removeClass'](
					this.widgetBaseClass + '-disabled' + ' ' +
					this.namespace + '-state-disabled')
				.attr("aria-disabled", value);
		}
	},

	disable: function(index, type){
			// if options is not provided, call the parents disable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption( 'disabled', true );
			} else {
				if ( type == "optgroup" ) {
					this._disableOptgroup(index);
				} else {
					this._disableOption(index);
				}
			}
	},

	enable: function(index, type) {
			// if options is not provided, call the parents enable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption('disabled', false);
			} else {
				if ( type == "optgroup" ) {
					this._enableOptgroup(index);
				} else {
					this._enableOption(index);
				}
			}
	},

	_disabled: function(elem) {
			return $(elem).hasClass( this.namespace + '-state-disabled' );
	},

	_disableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.addClass(this.namespace + '-state-disabled')
					.find("a").attr("aria-disabled", true);
				this.element.find("option").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.removeClass( this.namespace + '-state-disabled' )
					.find("a").attr("aria-disabled", false);
				this.element.find("option").eq(index).removeAttr("disabled");
			}
	},

	_disableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.addClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", true);
				this.element.find("optgroup").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.removeClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", false);
				this.element.find("optgroup").eq(index).removeAttr("disabled");
			}
	},

	index: function(newIndex) {
		if (arguments.length) {
			if (!this._disabled($(this._optionLis[newIndex])) && newIndex != this._selectedIndex()) {
				this.element[0].selectedIndex = newIndex;
				this._refreshValue();
				this.change();
			} else {
				return false;
			}
		} else {
			return this._selectedIndex();
		}
	},

	value: function(newValue) {
		if (arguments.length && newValue != this.element[0].value) {
			this.element[0].value = newValue;
			this._refreshValue();
			this.change();
		} else {
			return this.element[0].value;
		}
	},

	_refreshValue: function() {
		var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
		// deselect previous
		this.list
			.find('.' + this.widgetBaseClass + '-item-selected')
			.removeClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'false')
			.attr('id', '');
		// select new
		this._selectedOptionLi()
			.addClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'true')
			.attr('id', activeID);

		// toggle any class brought in from option
		var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
		var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
		this.newelement
			.removeClass(currentOptionClasses)
			.data('optionClasses', newOptionClasses)
			.addClass( newOptionClasses )
			.find('.' + this.widgetBaseClass + '-status')
			.html(
				this._selectedOptionLi()
					.find('a:eq(0)')
					.html()
			);

		this.list.attr('aria-activedescendant', activeID);
	},

	_refreshPosition: function() {
		var o = this.options;

		// if its a pop-up we need to calculate the position of the selected li
		if ( o.style == "popup" && !o.positionOptions.offset ) {
			var selected = this._selectedOptionLi();
			var _offset = "0 " + ( this.list.offset().top  - selected.offset().top - ( this.newelement.outerHeight() + selected.outerHeight() ) / 2);
		}
		this.listWrap
			.removeAttr('style')
			.zIndex( this.element.zIndex() + 1 )
			.position({
				// set options for position plugin
				of: o.positionOptions.of || this.newelement,
				my: o.positionOptions.my,
				at: o.positionOptions.at,
				offset: o.positionOptions.offset || _offset,
				collision: o.positionOptions.collision || (o.style == "popup" ? 'fit' :'flip')
			});
	}
});

})(jQuery);

/* End */
;; /* /local/templates/roga_i_sila_main/js/jquery.placeholder.js?15807194584515*/
; /* /local/templates/roga_i_sila_main/js/bxslider/jquery.bxslider.min.js?158071945819327*/
; /* /local/templates/roga_i_sila_main/js/default_script.js?15807194583141*/
; /* /local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.core.js?15807194588865*/
; /* /local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.widget.js?15807194587005*/
; /* /local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.position.js?15807194589017*/
; /* /local/templates/roga_i_sila_main/js/jquery.ui.selectmenu/jquery.ui.selectmenu.js?158071945826504*/
