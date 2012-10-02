jQuery(document).ready(function($) {
	// Establish Variables
	var History = window.History, // Note: Using a capital H instead of a lower h
	State = History.getState(),
	$log = $('#log');
	// If the link goes to somewhere else within the same domain, trigger the pushstate
	$('.menu a').live('click', function(e) {
		e.preventDefault();
		var path = $(this).attr('href');
		var title = $(this).text();
		//console.log($(this).hasClass('current_page_item'));
		if (!($(this).parent().hasClass('current_page_item'))){
			if (!($(this).parent().hasClass('current-menu-item'))){
				$('#content').animate({ opacity : '0' }, 1000, function(){$('#preloader').show(); History.pushState('ajax',title,path);});				
			}
		}
	});
	// Bind to state change
	// When the statechange happens, load the appropriate url via ajax
	History.Adapter.bind(window,'statechange',function() { // Note: Using statechange instead of popstate
		load_site_ajax();
	});
	// Load Ajax
});

function load_site_ajax() {
	State = History.getState(); // Note: Using History.getState() instead of event.state
	//History.log('statechange:', State.data, State.title, State.url);
	//console.log(event);
	$("#content").find('.jspPane').load(State.url, function() {
												
		/* After the content loads you can make additional callbacks*/
			$('#preloader').css('display', 'none');
			$('#content').animate({ opacity: '1' }, 1000);
	});
}
