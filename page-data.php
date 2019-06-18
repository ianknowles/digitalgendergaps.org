<?php
	get_header();
	get_template_part('template-parts/navigation/navigation', 'top');
?>
<div class="container-fluid position-absolute top-0 h-100">
	<div class="row h-100">
		<?php get_sidebar(); ?>
		<main role="main" class="col-12 col-md-10 ml-sm-auto px-0">
			<div class="d-flex flex-column justify-content-between h-100 px-0">
				<div class="p-4">
					<?php
						set_query_var('map-template-id', 'map');
						get_template_part('template-parts/graph/graph', 'choropleth-controls');
						get_template_part('template-parts/graph/graph', 'choropleth');
						get_template_part('template-parts/graph/graph', 'table');
					?>
				</div>
				<div class="mt-2">
					<?php get_template_part('template-parts/footer/footer', 'authorship'); ?>
				</div>
			</div>
		</main>
	</div>
</div>
<script type="application/json" id="chart-setup">
{
	"report": "<?php echo filter_input(INPUT_GET, 'report'); ?>"
}
</script>
<?php
	get_template_part('template-parts/footer/footer', 'keyscripts');
	get_template_part('template-parts/footer/footer', 'graphscripts');
	get_footer();
?>
