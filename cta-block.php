<?php
/**
 * Plugin Name: Call to Action Block
 * Description: Custom Gutenberg block.
 * Version: 1.0.0
 */


/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package cta-block
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function cta_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'dist/index.js';
	wp_register_script(
		'cta-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor'
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'dist/editor.css';
	wp_register_style(
		'cta-block-editor-styles',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'dist/style.css';
	wp_register_style(
		'cta-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'custom-block/cta-rich', array(
		'editor_script' => 'cta-block-editor',
		'editor_style'  => 'cta-block-editor-styles',
		'style'         => 'cta-block',
	) );
}
add_action( 'init', 'cta_block_init' );
