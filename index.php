<?php get_header(); ?>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
<div class="pt-3">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php the_content(); ?>
<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
</div>
</main>
<?php get_footer(); ?>
