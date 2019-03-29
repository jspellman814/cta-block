/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a CallToAction wrapper Component
 */
export default class CallToAction extends Component {

    constructor( props ) {
        super( ...arguments );
    }

    render() {
        // Setup the attributes
        const {
            attributes: {
                ctaTitle,
                ctaText,
                buttonText,
                buttonUrl,
            }
        } = this.props;

        const className = classnames( [
            this.props.className,
            'blue-cta',
        ] );

        return (
            <section
                className={ className ? className : undefined }
            >{ this.props.children }</section>
        );
    }
}
