/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import type { TemplateArray } from '@wordpress/blocks';

/**
 * Internal dependencies
 */

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps();

	const defaultTemplate = ( [
		[ 'woocommerce/mini-cart-products-table-block', {} ],
	].filter( Boolean ) as unknown ) as TemplateArray;

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ defaultTemplate }
				renderAppender={ InnerBlocks.ButtonBlockAppender }
				templateLock={ false }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};
