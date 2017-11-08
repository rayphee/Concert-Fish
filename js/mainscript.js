$(window).load(function(){
    $(window).stellar();
    $.gsap.enabled(true);
    var content=$(".content");
    var ring=$(".ring");
    var knob=$(".knob");
    var results=$(".results-container");
    var open=$("#open");
    var animationtime;

    $('.registration-form').submit(function () {
     sendContactForm();
     return false;
    });
    open.click(function(){
		animationtime = 0.5;
		if (content.hasClass("resultsshown") ){
            content.removeClass("resultsshown");
            TweenLite.to(ring, animationtime, {width:"45vw", ease: Power4.easeOut,});
            TweenLite.to(knob, animationtime, {width:"40vw", ease: Power4.easeOut,});
            TweenLite.to(results, animationtime, {width:"0vw",display:"none", ease: Power4.easeOut,});
		}
		else {
            content.addClass("resultsshown");
            TweenLite.to(ring, animationtime, {width:"90vw", ease: Power4.easeOut,});
            TweenLite.to(knob, animationtime, {width:"80vw", ease: Power4.easeOut,});
            TweenLite.to(results, animationtime, {width:"40vw", display:"inline-block", ease: Power4.easeOut,});
		}
  	});

});
