jQuery(document).ready(function($) {
$(window).bind('hashchange', function() {
	if (location.hash.substr(1) != 'home') {
		if ($(window).width() < 760) {
			setTimeout("$('.logo').stop().animate({'top' : '-50px'}, 800, 'easeOutBack')",300);
		}
		else {
			$('.logo').queue("fx", []).animate({'top' : '-70px'}, 600, 'easeOutBack');
		}
		if (location.hash.substring(1, location.hash.indexOf('_')) == 'gallery') {
			$('.main_container').stop().slideUp(400, function(){
				if (!$('.right_bar').hasClass('act')) {
					$('.right_bar').find('a').click();
				}
			});
			$('#content').animate({ opacity : '0' }, 1000);
			$('#supersized').animate({opacity : '0'}, 1000, function(){
				if (!$('#pauseplay').hasClass('pause')) {
					$('#pauseplay').click();
				}
				clearInterval(vars.slideshow_interval);																	 
				$('#supersized').empty();
				$('.supersized').empty();
				$('#gallery_buttons').empty();				
				$('.supersized').append('<div id="progress-back" class="load-item"><div id="progress-bar"></div></div><div id="thumb-tray" class="load-item"></div><div id="slidecaption"></div>');
				$('#gallery_buttons').append('<a id="prevslide" class="load-item"></a><a id="nextslide" class="load-item"></a><a id="pauseplay" href="javascript:void(0)"></a>');				
				load_site();
			});
			
		}
		else {		
			$('.main_container').slideDown(400);
			if ($('.right_bar').hasClass('act')) {
				$('.right_bar').find('a').click();
			}		
			$('#content').animate({ opacity : '0' }, 1000, function(){
				$('#preloader').show(); 								
				load_site();
			});		
		}
	}
	else {
		$('.main_container').stop().slideUp(400, function(){
			$('.logo').stop().animate({'top' : '0px'}, 800, 'easeOutBounce');
			if (!$('.right_bar').hasClass('act')) {
				$('.right_bar').find('a').click();
			}
		});
		$('#content').animate({ opacity : '0' }, 1000, function(){load_site()});		
	}
});

});


function load_site() {
	if (location.hash.substring(1, location.hash.indexOf('_')) == 'gallery') {
		$("#content").find('.jspPane').load(location.hash.substr(1)+'.html', function(){
			$('#supersized').animate({opacity : '1'}, 1000);																			  
		});
	}
	else {
		$("#content").find('.jspPane').load(location.hash.substr(1)+'.html', function() {												
				$('#preloader').css('display', 'none');
				$('#content').animate({ opacity: '1' }, 1000, function() {shortcodes()});
		});
	}
}
