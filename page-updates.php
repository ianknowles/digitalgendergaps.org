<?php get_header(); ?>
<div class="container-fluid position-absolute top-0">
	<div class="row">
		<?php get_sidebar(); ?>
		<main role="main" class="col-12 col-md-10 ml-sm-auto px-4">
			<?php $catquery = new WP_Query( 'cat=2&posts_per_page=5' ); ?>
			<?php while($catquery->have_posts()) : $catquery->the_post(); ?>
			<div class="card">
				<div class="card-header"><h4><?php echo get_the_date(); ?></h4></div><div class="card-body"><h3 class="card-title"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h3>
				<p class="card-text"><?php the_content(); ?></p></div>
			</div>
			<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
		</main>
	</div>
	<div class="row">
		<div class="col-12 col-md-10 ml-sm-auto px-0"><?php get_footer(); ?></div>
	</div>
</div>
