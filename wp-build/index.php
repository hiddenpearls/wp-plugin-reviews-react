<?php
/*
Plugin Name: WP Plugin Reviews React
Plugin URI: http://github.com/hiddenpearls/wp-plugin-reviews-react
Description: A react app which shows a list of plugin reviews from wordpress.org
Version: 1.0.0
Author: Muhammad Adnan
Author URI: http://adnan.pk/
*/

define( 'WP_PLUGIN_REVIEWS_REACT_VERSION' , '1.0.0' );

add_action( 'wp_enqueue_scripts', 'wpprr_enqueue_scripts' );

function wpprr_enqueue_scripts() {
	wp_enqueue_script( 'wp-plugin-reviews-react-js', plugins_url( 'assets/js/index_bundle.js', __FILE__ ),
										array(), WP_PLUGIN_REVIEWS_REACT_VERSION, true );
}


add_shortcode( 'wp-plugin-reviews-react', 'wp_plugin_reviews_react_shortcode' );

function wp_plugin_reviews_react_shortcode( $atts ) {

	$atts = shortcode_atts( array(
		'slug' => 'wp-analytify',
	), $atts );

	return '<div class="app"  data-slug="' . $atts['slug'] . '" ></div>';
}
