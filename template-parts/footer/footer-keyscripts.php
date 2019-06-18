<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<!-- //TODO move scripts to our host, check wp jquery -->
<script
	src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
	crossorigin="anonymous"></script>
<!--<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>-->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
	integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
	integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
	crossorigin="anonymous"></script>
<script src="<?php echo get_theme_file_uri('/assets/js/scrollfix.js'); ?>"></script>

<!-- Icons -->
<script
	src="https://unpkg.com/feather-icons@4.21.0/dist/feather.min.js"
	integrity="sha384-aUKwiEAd8i33TPrUwwKvHRU38NRESwfUpWhB9olA3nOTjcUR47QMCBxZdhuAiV/T"
	crossorigin="anonymous"></script>
<script>
	feather.replace()
</script>
<script>
	if (navigator.onLine === false) {
		document.getElementById("offlineIndicator").classList.remove('d-none');
	} else if ('serviceWorker' in navigator) {
	  window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.js').then(function(registration) {
		  // Registration was successful
		  console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function(err) {
		  // registration failed
		  console.log('ServiceWorker registration failed: ', err);
		});
	  });
	}
</script>
