<?php get_header(); ?>
<div class="container-fluid position-absolute top-0 h-100">
	<div class="row h-100">
		<main role="main" class="col-12 col-md-12 ml-sm-auto px-0">
			<div class="d-flex flex-column justify-content-between h-100 px-0">
				<div class="px-4">
					<?php
						if ( have_posts() ):
							while ( have_posts() ):
								the_post();
								the_content();
							endwhile;
						else:
					?>
							<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
					<?php
						endif;
					?>
				</div>
				<div class="mt-4">
					<?php get_footer(); ?>
				</div>
			</div>
		</main>
	</div>
</div>
