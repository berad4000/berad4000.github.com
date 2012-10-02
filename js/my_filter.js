$(function(){
/*Setup
========*/
	$('#list').find('li').each(function(){
		$(this).attr('data-width', $(this).width());
		$(this).attr('data-height', $(this).height());
		$(this).css({'width' : $(this).width()+'px', 'height' : $(this).height()+'px'});
	});
	mar_right = $('#list').find('li:first').css('margin-right');
	mar_bot = $('#list').find('li:first').css('margin-bottom');
	
	$('.filter_ul a').click(function(e){
		e.preventDefault();
		$('.filter_ul li').removeClass('selected');
		$(this).parent('li').addClass('selected');
		filter = $(this).attr('rel');
		dm_filter('#list', 'li', filter, 800);
	});
	
	$('.image-grid .portfolio_wrapper').live('mouseover', function(){
		if ($.browser.msie && $.browser.version < 9) { 
			$(this).find('.portfolio_overlay').show();
		}
		else {
			$(this).find('.portfolio_overlay').stop().animate({'opacity' : 1},300);
		}
	});
	$('.image-grid .portfolio_wrapper').live('mouseout', function(){
		if ($.browser.msie && $.browser.version < 9) { 
			$(this).find('.portfolio_overlay').hide();
		}
		else {
			$(this).find('.portfolio_overlay').stop().animate({'opacity' : 0},300);
		}
	});		
});

function dm_filter($obj, $elem_type, $filter, $timer) {
	$half = $timer;
	if ($.browser.msie && $.browser.version < 9) { 
		if($filter != "all") {  
			$($obj).find($elem_type+'[data-id='+$filter+']').each(function(){
				$(this).stop().slideDown($timer);
			});
			$($obj).find($elem_type+'[data-id!='+$filter+']').each(function(){
				$(this).stop().slideUp($timer);
			});
		} else { 
			$($obj).find($elem_type).each(function(){
				$(this).stop().slideDown($timer);
			});
		}		
	}
	else {
		if($filter != "all") {  
			hide_elements($obj, $elem_type, $filter, $timer);
		} else { 
			$($obj).find($elem_type).each(function(){
				$(this).show();
				$(this).stop().animate({'width' : $(this).attr('data-width')+'px', 'height' : $(this).attr('data-height')+'px', 'margin-bottom' : mar_bot, 'margin-right' : mar_right},$half, function(){
					$(this).stop().animate({ opacity : 1}, $timer);
				});			
			});
		}
	}
}

function hide_elements($obj, $elem_type, $filter, $timer) {
	$half = $timer/2;
	$($obj).find($elem_type+'[data-id!='+$filter+']').each(function(){
		$(this).stop().animate({ opacity : 0}, $timer, function(){
			$(this).animate({'width' : '0px', 'height' : '0px', 'margin-bottom' : '0px', 'margin-right' : '0px'}, $half, function(){
				$(this).hide();
				show_elements($obj, $elem_type, $filter, $timer);
			});
		});
	});
}

function show_elements($obj, $elem_type, $filter, $timer) {
	$half = $timer/5;
	$($obj).find($elem_type+'[data-id='+$filter+']').each(function(){
		$(this).show();																   
		$(this).stop().animate({'width' : $(this).attr('data-width')+'px', 'height' : $(this).attr('data-height')+'px', 'margin-bottom' : mar_bot, 'margin-right' : mar_right},10, function(){
			$(this).stop().animate({ opacity : 1}, $timer);
		});			
	});
}