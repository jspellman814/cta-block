import CallToAction from './components/cta';
import classnames from 'classnames';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
    RichText,
    URLInput,
} = wp.editor;

// Register components
const {
    IconButton,
    Dashicon,
} = wp.components;

const blockAttributes = {
    ctaTitle: {
        default: null,
        type: 'array',
        selector: '.blue-cta__title',
        source: 'children',
    },
    ctaText: {
        default: '',
        type: 'array',
        selector: '.blue-cta__text',
        source: 'children',
    },
    buttonText: {
        default: '',
        type: 'string',
    },
    buttonUrl: {
        default: '',
        type: 'string',
        source: 'attribute',
        selector: 'a',
        attribute: 'href',
    },
};

class CMPBLOCK extends Component {
  render () {
      // Setup the attributes
      const {
          attributes: {
              ctaTitle,
              ctaText,
              buttonText,
              buttonUrl,
          },
          isSelected,
          setAttributes
      } = this.props;

      return [
          // Show the button markup in the editor
        <CallToAction { ...this.props }>

          <section className="blue-cta__content">
            <RichText
                tagName="h2"
                placeholder={ __( 'Call to action headline...' ) }
                keepPlaceholderOnFocus
                value={ ctaTitle }
                className={ classnames(
                    'blue-cta__title'
                ) }
                onChange={ (value) => setAttributes( { ctaTitle: value } ) }
            />
            <RichText
                tagName="div"
                multiline="p"
                placeholder={ __( 'Call to action text...' ) }
                keepPlaceholderOnFocus
                value={ ctaText }
                className={ classnames(
                    'blue-cta__text'
                ) }
                onChange={ ( value ) => setAttributes( { ctaText: value } ) }
            />

          <RichText
              tagName="span"
              placeholder={ __( 'Button text...' ) }
              value={ buttonText }
              className={ classnames(
                  'blue-cta__button-text'
              ) }
              onChange={ (value) => setAttributes( { buttonText: value } ) }
          />
          { isSelected && (
              <form
                  key="form-link"
                  className={ `blocks-button__inline-link` }
                  onSubmit={ event => event.preventDefault() }
              >
                  <Dashicon icon={ 'admin-links' } />
                  <URLInput
                      className="button-url"
                      value={ buttonUrl }
                      onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
                  />
                  <IconButton
                      icon="editor-break"
                      label={ __( 'Apply' ) }
                      type="submit"
                  />
              </form>
          ) }
          </section>
        </CallToAction>
      ];
  }
}

// Register the block
registerBlockType( 'custom-block/cta-rich', {
    title: __( 'Call To Action' ),
    description: __( 'Add a call to action section with a title, text, and a button.' ),
    icon: 'megaphone',
    category: 'common',
    keywords: [
        __( 'call to action' ),
        __( 'cta' ),
    ],

    attributes: blockAttributes,
    getEditWrapperProps( attributes ) {
        return { 'data-align': 'wide' };
    },

    // Render the block components
    edit: CMPBLOCK,

    // Save the attributes and markup
    save: function( props ) {

        // Setup the attributes
        const {
            ctaTitle,
            ctaText,
            buttonText,
            buttonUrl,
        } = props.attributes;

        // Save the block markup for the front end
        return (
            <CallToAction { ...props }>

              <div className="blue-cta__content">
                  { ctaTitle && (
                      <RichText.Content
                          tagName="h2"
                          className={ classnames(
                              'blue-cta__title'
                          ) }
                          value={ ctaTitle }
                      />
                  ) }

                  { ctaText && (
                      <RichText.Content
                          tagName="div"
                          className={ classnames(
                              'blue-cta__text'
                          ) }
                          value={ ctaText }
                      />
                  ) }

                  { buttonText && (
                      <div className="blue-cta__button">
                          <a
                              href={ buttonUrl }
                              rel="noopener noreferrer"
                              className={ classnames(
                                  'blue-cta__button-link'
                              ) }
                          >
                              <RichText.Content
                                  value={ buttonText }
                              />
                          </a>
                      </div>
                  ) }
              </div>

            </CallToAction>
        );
    },

} );
