<?php
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
			'wp-editor',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'dist/editor.css';
	wp_register_style(
		'cta-block-editor',
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

	/**
	 * Attributes are the editable variables in our block.
	 * Here we create one attribute called "content" (we could use any name here).
	 *
	 * When the editor is loaded, the attributes are populated by parsing the
	 * block as it is stored in the database and extracting the values.
	 * The "selector" indicates what element in our block contains the value.
	 * The "source" indicates what part of the selected element to extract,
	 * the most common is text (the content of the tag), however other parts of
	 * the tag can be used (e.g. id, class, rel, href, src, alt).
	 */
	$attributes = array(
		/**
		 * This attribute will be an array, where each element in the
		 * array represents a line in the <p> element.
		 * Since we're using a RichText element it will insert <br>
		 * between each element by default.
		 */
		'content' => array(
			'type'     => 'array',
			'source'   => 'children',
			'selector' => 'p',
		),
	);

	register_block_type( 'custom-blocks/cta-block', array(
		'editor_script' => 'cta-block-editor',
		'editor_style'  => 'cta-block-editor',
		'style'         => 'cta-block',
		'attributes'    => $attributes,
	) );
}
add_action( 'init', 'cta_block_init' );
