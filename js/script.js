thumb_bar = false;

$(document).ready(function() {
	/*RunScripts
	============*/						   
	$('ul.menu').superfish();						   
	/*MainMenu SetUp
	================*/
	$('.menu').find('li:has(ul)').addClass('has-menu');
	$('.menu').find('li').each(function(){
		cur_link = $(this).children("a");
		if (!$(this).parent('ul').hasClass('sub-menu')) {
			$('#mobile_select').append('<option value='+cur_link.attr("href")+'>'+cur_link.text()+'</option>');
		}
		else if (!$(this).parent('ul').hasClass('level1')) {
			$('#mobile_select').append('<option value='+cur_link.attr("href") +'> -- '+cur_link.text()+'</option>');
		}
		else {
			$('#mobile_select').append('<option value='+cur_link.attr("href") +'> - '+cur_link.text()+'</option>');
		}
	});
	//$('.sub-menu').animate({'opacity' : '0'},1);
	
	$('#mobile_select').change(function(){
		//window.location.hash = $(this).find									
		select_val = $(this).val();
		if (select_val.substr(0,1) == '#') {
		window.location.hash = select_val;
		}		
	});
	/*MainMenu Hover FX
	===================*/
	/*SubMenu Hover*/
	$('.sub-menu').find('li').hover(function(){
		if(!$(this).children('a').hasClass('current-menu')) {
			$(this).children('a').stop().animate({'background-color' : '#797979'},300);
		}
	}, function(){
		if(!$(this).children('a').hasClass('current-menu')) {
			$(this).children('a').stop().animate({'background-color' : '#000000'},150);
		}
	});

	/*Menu Click
	=============*/
	$('.menu a').click(function(){
		$('.menu a').removeClass('current-menu');
		$('.sub-menu a').css({'background-color' : '#000000'});
		$(this).addClass('current-menu');
		if ($(this).parents('ul').hasClass('sub-menu')) {
			$(this).parents('li.has-menu').children('a').addClass('current-menu');			
		}
	});
	
	/*Logo Animation
	=================*/	
	if (location.hash && location.hash.substr(1) != 'home') {	
		if ($(window).width() < 760) {
			setTimeout("$('.logo').stop().animate({'top' : '-50px'}, 800, 'easeOutBack')",300);
		}
		else {
			setTimeout("$('.logo').stop().animate({'top' : '-70px'}, 800, 'easeOutBack')",300);
		}
	}
	else {
			setTimeout("$('.logo').stop().animate({'top' : '0px'}, 800, 'easeOutBounce')",300);
	}
	$('.logo').hover(function(){
		if($('.main_container').css('display') == 'block') {
			$(this).queue("fx", []).animate({'top' : '0px'},600, 'easeOutBounce');
		}
	}, function(){
		if($('.main_container').css('display') == 'block') {
			if ($(window).width() < 760) {
				setTimeout("$('.logo').stop().animate({'top' : '-50px'}, 800, 'easeOutBack')",300);
			}
			else {
				$(this).queue("fx", []).animate({'top' : '-70px'},600, 'easeOutBack');		
			}
		}
	});	
	
	/*SideBares
	============*/
	$('.left_bar').find('a').click(function(){
		$(this).parent('div').toggleClass('act');
		if ($(this).parent('div').hasClass('act')) {
			$('#thumbs-scroller').queue("fx", []).animate({'left' : '38px'}, 800, 'easeOutBack');
			$(this).attr('original-title', 'hide thumbs');
		}
		else {
			$('#thumbs-scroller').queue("fx", []).animate({'left' : '-100px'}, 800, 'easeInBack');
			$(this).attr('original-title', 'show thumbs');
		}
	}).tipsy({gravity: 'w', fade: true});
	$('.right_bar').find('a').click(function(){
		$(this).parent('div').toggleClass('act');
		if ($(this).parent('div').hasClass('act')) {
			$('#slidecaption').queue("fx", []).animate({'opacity' : '1'}, 800);
			$(this).attr('original-title', 'hide description');
		}
		else {
			$('#slidecaption').queue("fx", []).animate({'opacity' : '0'}, 500);
			$(this).attr('original-title', 'show description');
		}
	}).tipsy({gravity: 'e', fade: true});
	
	/*Audio Buttons
	================*/
	setTimeout("$('.btn_audio').stop().animate({'bottom' : '0px'}, 500)",600);
	$('.btn_audio').click(function(){
		$(this).stop().animate({'bottom' : '-34px'}, 500);
		$('.copyright').stop().animate({'left' : '-114px'}, 500);
		$('.socials').stop().animate({'right' : '-114px'}, 500, function(){
			$('.jp-audio').stop().animate({'bottom' : '0'}, 600);
		});
	});
	$('.btn_playlist').click(function(){
		$(this).toggleClass('act');
		$('#jp_playlist_2').slideToggle(400);
	});
	$('.btn_hide').click(function(){
		$('#jp_playlist_2').hide();
		$('.jp-audio').stop().animate({'bottom' : '-60'}, 600, function(){
			$('.btn_audio').stop().animate({'bottom' : '0px'}, 500);
			$('.copyright').stop().animate({'left' : '-35px'}, 500);
			$('.socials').stop().animate({'right' : '-35px'}, 500);			
		});
	});
	$('.btn_playlist_close').click(function(){
		$('.btn_playlist').toggleClass('act');
		$('#jp_playlist_2').slideToggle(400);
	});
	
	/*GalleryButton
	================*/
	$('#gallery_overlay').hover(function(){
		$('#gallery_buttons').stop().animate({'opacity' : '1'},300);
	}, function(){
		$('#gallery_buttons').stop().animate({'opacity' : '0'},300);
	});
	
	/*Content SetUp
	================*/
	content_setup();
	$('.btn_close').click(function(){
		$('.main_container').stop().slideUp(400, function(){
		});
		if (!$('.right_bar').hasClass('act')) {
			$('.right_bar').find('a').click();
		}
		$('.menu a').removeClass('current-menu');
		$('.logo').stop().animate({'top' : '0px'}, 800, 'easeOutBounce');
	});
	
	$('.blog_like').live('click',function(){
		$(this).toggleClass	('liked');
	});
	
});

$(window).load(function(){
	//$("#playlist_slider").jScrollPane({showArrows: false; });	
	setTimeout("$('#jp_playlist_2').css({display : 'none', bottom : '1px'})",500);
	$("#content").jScrollPane({showArrows: true, autoReinitialise: true});	
	if (location.hash) {	
		if (location.hash.substr(1) != 'home') {
			if (location.hash.substring(1, location.hash.indexOf('_')) == 'gallery') {
				$('.main_container').slideUp(400);	
				$('#supersized').animate({opacity : '0'}, 1000, function(){
					clearInterval(vars.slideshow_interval);																				 
					$('#supersized').empty();
					$('.supersized').empty();
					$('#gallery_buttons').empty();
					$('.supersized').append('<div id="progress-back" class="load-item"><div id="progress-bar"></div></div><div id="thumb-tray" class="load-item"></div><div id="slidecaption"></div>');
					$('#gallery_buttons').append('<a id="prevslide" class="load-item"></a><a id="nextslide" class="load-item"></a><a id="pauseplay" href="javascript:void(0)"></a>');
					load_site();
				});
			}
			else {$('.main_container').slideDown(400);
				$('#content').animate({ opacity : '0' }, 1000, function(){
					$('#preloader').show(); 
					load_site();
				});	
			}
		}
	}
	shortcodes();
});


$(window).resize(function(){
	content_setup();
	masonry_response();
});

function content_setup(){
	if ($(window).width() < 760) {
		$('.main_container').css({'height' : $(window).height()-60+'px'});
		$('#content').css('height' , $('.main_container').height()-21+'px');
	}
	else {
		$('.main_container').css({'height' : $(window).height()-90+'px'});
		$('#content').css('height' , $('.main_container').height()-21+'px');
	}
}


function shortcodes()  {
	$('img.w_caption').each(function(){
		$(this).wrap('<div class="img_caption_box '+$(this).attr('align')+'"></div>');		
		$(this).after('<span>'+$(this).attr('alt')+'</span>');
		$(this).attr('align', '');
	});	
	/*Tabs
	=======*/
	// tab setup
	$('.tab-content').addClass('clearfix').not(':first').hide();
	$('ul.tabs').each(function(){
		var current = $(this).find('li.current');
		if(current.length < 1) { $(this).find('li:first').addClass('current'); }
		current = $(this).find('li.current a').attr('href');
		$(current).show();
	});
	
	// tab click
	$('ul.tabs a[href^="#"]').live('click', function(e){
		e.preventDefault();
		var tabs = $(this).parents('ul.tabs').find('li');
		var tab_next = $(this).attr('href');
		var tab_current = tabs.filter('.current').find('a').attr('href');
		$(tab_current).hide();
		tabs.removeClass('current');
		$(this).parent().addClass('current');
		$(tab_next).show();
		return false;
	});	
}