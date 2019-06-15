<?php
	get_header();
	get_template_part('template-parts/navigation/navigation', 'top');
?>
<div class="container-fluid position-absolute top-0 h-100">
	<div class="row h-100" >
		<main role="main" class="h-100 col-12 ml-sm-auto px-0">
			<div class="d-flex flex-column justify-content-between h-100">
				<div class="jumbotron front-page-jumbo">
					<div class="container">
						<h1 class="display-4 d-none d-md-block">
							Using big data to measure global gender gaps in internet and mobile access
						</h1>
						<h1 class="h4 d-block d-md-none">
							Using big data to measure global gender gaps in internet and mobile access
						</h1>
						<p>Tracking progress on gender inequalities in internet and mobile access and use is more
							important than ever to ensure that women benefit from the digital revolution. Data on gender
							gaps in internet and mobile phone use and access are significantly lacking geographical
							coverage, comparability, and are slow to be updated.</p>
						<p>We show how big data can help close this gender data gap and measure progress towards this
							important development goal in real-time.</p>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-4 py-2 py-md-0">
							<div class="row"><div class="col">
								<h2 class="d-none d-md-block">Latest indicators</h2>
								<h2 class="h5 d-block d-md-none">Latest indicators</h2>
								<p>Check out the latest internet and mobile gender gap indicators.</p>
							</div></div>
							<div class="row d-flex d-md-none"><div class="col">
								<a class="btn btn-secondary" href="data" role="button">Reports &raquo;</a>
							</div></div>
						</div>
						<div class="col-md-4 py-2 py-md-0">
							<div class="row"><div class="col">
								<h2 class="d-none d-md-block">Project details</h2>
								<h2 class="h5 d-block d-md-none">Project details</h2>
								<p>See the background of the project, and an overview of how the data is collected and
									processed.</p>
							</div></div>
							<div class="row d-flex d-md-none"><div class="col">
								<a class="btn btn-secondary" href="project" role="button">Project &raquo;</a>
							</div></div>
						</div>
						<div class="col-md-4 py-2 py-md-0">
							<div class="row"><div class="col">
								<h2 class="d-none d-md-block">Team</h2>
								<h2 class="h5 d-block d-md-none">Team</h2>
								<p>Meet the project members.</p>
							</div></div>
							<div class="row d-flex d-md-none"><div class="col">
								<a class="btn btn-secondary" href="team" role="button">Team &raquo;</a>
							</div></div>
						</div>
					</div>
					<div class="row d-none d-md-flex">
						<div class="col-md-4">
							<a class="btn btn-secondary" href="data" role="button">Reports &raquo;</a>
						</div>
						<div class="col-md-4">
							<a class="btn btn-secondary" href="project" role="button">Project &raquo;</a>
						</div>
						<div class="col-md-4">
							<a class="btn btn-secondary" href="team" role="button">Team &raquo;</a>
						</div>
					</div>
				</div>
				<div class="mt-4">
					<?php get_template_part('template-parts/footer/footer', 'authorship'); ?>
				</div>
			</div>
		</main>
	</div>
</div>
<?php
	get_template_part('template-parts/footer/footer', 'keyscripts');
	get_footer();
?>
