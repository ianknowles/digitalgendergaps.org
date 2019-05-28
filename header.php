<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<meta name="author" content="<?php the_author_meta( 'display_name', get_post_field( 'post_author', get_queried_object_id() ) ); ?>">
	<meta name="generator" content="WordPress">
	<meta name="keywords" content="gender inequality, development indicators, internet access, data science, sociology, research, facebook data, global gender gap report">
	<meta property="og:title" content="<?php echo get_post_field( 'post_title', get_post() ); ?>" />
	<meta property="og:description" content="<?php bloginfo('description'); ?>" />
	<meta property="og:site_name" content="<?php echo get_bloginfo('name', 'display'); ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo get_permalink()?>" />
	<meta property="og:image" content="https://www.digitalgendergaps.org/wp-content/uploads/2018/10/report_screenshot.png" />
	<link rel="icon" type="image/gif" href="<?php echo get_stylesheet_directory_uri(); ?>/Icons-mini-icon_world.gif">
	<!-- TODO deprecated -->
	<title><?php wp_title(' | ', true, 'right'); ?><?php echo get_bloginfo('name', 'display'); ?></title>

	<!-- Bootstrap core CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<!-- Custom styles for this template -->
	<link href="<?php echo plugins_url('digitalgendergaps/dashboard.css', ''); ?>" rel="stylesheet">
	<link href="<?php echo get_stylesheet_uri(); ?>" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body>
<!--<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">-->
<nav id="nav-header" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow align-items-end"><!-- flex-md-nowrap -->
	<!-- col-sm-3 col-md-2--><a class="navbar-brand col-12 col-md-6 mr-0 mr-md-3" href="<?php echo get_bloginfo('url', 'display'); ?>">
	<h1 class="my-0 d-none d-md-block"><?php echo get_bloginfo('name', 'display'); ?></h1>
	<h1 class="my-0 h2 d-block d-md-none"><?php echo get_bloginfo('name', 'display'); ?></h1>
	<p class="text-truncate my-0"><?php bloginfo('description'); ?></p>
	</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarsExampleDefault">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item<?php if ( is_front_page() ) : echo ' active'; endif; ?>">
				<a class="nav-link pl-1" href="<?php echo get_bloginfo('wpurl', 'display'); ?>"><span data-feather="home"></span><span class="ml-1">Home</span></a>
			</li>
			<li class="nav-item<?php if (get_post_field( 'post_name', get_post() ) == 'data'): echo ' active'; endif; ?>">
				<a class="nav-link pl-1" href="<?php echo get_permalink(get_page_by_path('data', OBJECT, 'page')); ?>"><span data-feather="database"></span><span class="ml-1">Data</span><span class="sr-only"><?php if (get_post_field( 'post_name', get_post() ) == 'data'): echo '(current)'; endif; ?></span></a>
			</li>
			<li class="nav-item dropdown<?php $page = get_post_field( 'post_name', get_post() ); if (($page == 'project') || ($page == 'indicators') || ($page == 'team') || ($page == 'privacy-policy')): echo ' active'; endif; ?>">
				<a class="nav-link  pl-1 dropdown-toggle" href="." id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span data-feather="info"></span><span class="ml-1">About</span></a>
				<div class="dropdown-menu" aria-labelledby="dropdown01">
					<a class="dropdown-item <?php if (get_post_field( 'post_name', get_post() ) == 'project'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('project', OBJECT, 'page')); ?>"><span data-feather="book-open"></span> Project</a>
					<a class="dropdown-item <?php if (get_post_field( 'post_name', get_post() ) == 'indicators'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('indicators', OBJECT, 'page')); ?>"><span data-feather="bar-chart-2"></span> Indicators</a>
					<a class="dropdown-item <?php if (get_post_field( 'post_name', get_post() ) == 'team'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('team', OBJECT, 'page')); ?>"><span data-feather="users"></span> Team</a>
					<a class="dropdown-item" href="mailto:digitalgendergaps@gmail.com?Subject=Digital%20Gender%20Gaps%20Project" target="_blank"><span data-feather="mail"></span> Contact Us</a>
					<a class="dropdown-item <?php if (get_post_field( 'post_name', get_post() ) == 'privacy-policy'): echo 'active'; endif; ?>" href="<?php echo get_permalink(get_page_by_path('privacy-policy', OBJECT, 'page')); ?>"><span data-feather="briefcase"></span> Privacy Policy</a>
				</div>
			</li>
		</ul>
	</div>
</nav>
