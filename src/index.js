( ( wp ) => {
  /**
   * Registers a new block provided a unique name and an object defining its behavior.
   * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
   */
  const registerBlockType = wp.blocks.registerBlockType;
  const RichText = wp.editor.RichText;

  /**
   * Returns a new element of given type. Element is an abstraction layer atop React.
   * @see https://github.com/WordPress/gutenberg/tree/master/element#element
   */
  const el = wp.element.createElement;
  /**
   * Retrieves the translation of text.
   * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
   */
  const __ = wp.i18n.__;

  /**
   * Every block starts by registering a new block type definition.
   * @see https://wordpress.org/gutenberg/handbook/block-api/
   */
  registerBlockType( 'custom-blocks/cta', {
    /**
     * This is the display title for your block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
    title: __( 'Call to Action' ),

    /**
     * Blocks are grouped into categories to help users browse and discover them.
     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
     */
    category: 'widgets',

    /**
     * Optional block extended support features.
     */
    supports: {
      // Removes support for an HTML mode.
      html: false
    },

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    edit: ( props ) => {
      /**
       * Function to update "content" attribute.
       */
      const onChangeContent = ( newContent ) => {
        props.setAttributes( { content: newContent } );
      };

      /**
       * Render our block for the editor using our content attribute in
       * a RichText component.
       */
      return el(
        RichText,
        {
          tagName: 'p',
          className: props.className,
          onChange: onChangeContent,
          value: props.attributes.content
        }
      );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into `post_content`.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    save: ( props ) => {
      /**
       * Render the markup to save in the database using the
       * RichText.Content component.  This handles of logic of things
       * like including <br> between each element in the
       * props.attributes.content array.
       *
       * Note: Our className is automatically added to our element.
       */
      return el( RichText.Content, {
        tagName: 'p',
        value: props.attributes.content
      } );
    }
  } );
} )(
  window.wp
);
