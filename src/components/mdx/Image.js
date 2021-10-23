import React			from 'react';
import useBaseUrl		from '@docusaurus/useBaseUrl';

export default function Image(props)
{
	const fullWidth = props.fullwidth || props.center;

	const style = {
		border:		(props.border		? "1px solid gray"	: undefined),
		textAlign:	(props.center		? "center"			: undefined),
		display:	(fullWidth			? "block"			: "inline-block"),	
	};

	const imgStyle = props.style || {};
	imgStyle.minWidth	= props.minwidth || undefined;
	imgStyle.width		= props.width || undefined;
	imgStyle.maxWidth	= props.maxwidth || undefined;
	imgStyle.minHeight	= props.minheight || undefined;
	imgStyle.height		= props.height || undefined;
	imgStyle.maxHeight	= props.maxheight || undefined;

	const processedProps = {...props};

	if (typeof props.src === "string")
		processedProps.src = props.src.startsWith("/img/") ? useBaseUrl(props.src) : props.img;


	delete processedProps.border;
	delete processedProps.center;
	delete processedProps.fullwidth;
	delete processedProps.style;

	delete processedProps.minwidth;
	delete processedProps.width;
	delete processedProps.maxwidth;

	delete processedProps.minheight;
	delete processedProps.height;
	delete processedProps.maxheight;

	return (
		<div style={style}>
			<img {...processedProps} style={imgStyle}/>
		</div>
	);
}