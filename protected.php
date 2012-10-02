<?php 
	if ($_POST['pass_field'] == 'test_password') {
?>
	<script type="text/javascript">
			$('#error').text('Entering gallery');
			load_gallery = 'gallery_beauty'	//Name of gallery file without .html
			window.location.hash = '#'+load_gallery;
	</script>

<?php 
	}
	else {
?>
	<script type="text/javascript">
		$(function(){
			$('#error').text('Incorrect Password');
		});
	</script>
	 
<?php	
	}
?>