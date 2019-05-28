<nav class="col-md-2 d-none d-md-block bg-light sidebar">
	<div class="sidebar-sticky">
		<ul class="nav flex-column">
			<li class="nav-item">
				<a class="nav-link <?php if (get_post_field( 'post_name', get_post() ) == 'data'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('data', OBJECT, 'page')); ?>">
					<span data-feather="map"></span>
					<span>Reports</span>
					<span class="sr-only"><?php if (get_post_field( 'post_name', get_post() ) == 'data'): echo '(current)'; endif; ?></span>
				</a>
			</li>
			<li class="nav-item"><hr /></li>
			<li class="nav-item d-flex justify-content-between align-items-center flex-no-wrap flex-row">
				<a class="nav-link <?php if (get_post_field( 'post_name', get_post() ) == 'updates'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('updates', OBJECT, 'page')); ?>">
					<!--<span data-feather="calendar"></span>-->
					<span>Updates</span>
					<span class="sr-only"><?php if (get_post_field( 'post_name', get_post() ) == 'updates'): echo '(current)'; endif; ?></span>
				</a>
				<div class="nav-link">
					<span class="badge badge-primary badge-pill ">
						<?php
							echo get_category(2)->category_count;
						?>
					</span>
				</div>
			</li>
			<!--<li class="nav-item">
				<a class="nav-link <?php if (get_post_field( 'post_name', get_post() ) == 'data-comparison'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('data-comparison', OBJECT, 'page')); ?>">
					<span data-feather="layers"></span><span data-feather="shuffle"></span>
					<span>Comparison</span>
					<span class="sr-only"><?php if (get_post_field( 'post_name', get_post() ) == 'data-comparison'): echo '(current)'; endif; ?></span>
				</a>
			</li>-->
			<!--<li class="nav-item">
			  <a class="nav-link" href="#">
				<span data-feather="trending-up"></span>
				Products
			  </a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="#">
				<span data-feather="users"></span>
				Customers
			  </a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="#">
				<span data-feather="bar-chart-2"></span>
				Reports
			  </a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="#">
				<span data-feather="layers"></span>
				Integrations
			  </a>
			</li>-->
		</ul>

		<!--<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
		  <span>Saved reports</span>
		  <a class="d-flex align-items-center text-muted" href="#">
			<span data-feather="plus-circle"></span>
		  </a>
		</h6>
		<ul class="nav flex-column mb-2">
		  <li class="nav-item">
			<a class="nav-link" href="#">
			  <span data-feather="file-text"></span>
			  Current month
			</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">
			  <span data-feather="file-text"></span>
			  Last quarter
			</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">
			  <span data-feather="file-text"></span>
			  Social engagement
			</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">
			  <span data-feather="file-text"></span>
			  Year-end sale
			</a>
		  </li>
		</ul>-->
	</div>
</nav>
