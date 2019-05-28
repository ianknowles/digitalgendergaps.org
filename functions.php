<?php

function generator_content() {
	return 'WordPress';
}
add_filter('the_generator', 'generator_content');
remove_action('wp_head', 'wp_generator');

function conditionally_remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
	  show_admin_bar(false);
	}
}

add_action('after_setup_theme', 'conditionally_remove_admin_bar');

