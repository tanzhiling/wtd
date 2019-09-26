import React from 'react';
import classnames from 'classnames';
import './index.less';

const Button = ({
	children, shape, size, type, disabled, ...props
}) => {
	const ButtonClass = classnames(
		'wt-button',
		type ? `wt-button-${type}` : '',
		size ? `wt-button-${size}` : '',
		{
			'wt-button-round': shape === 'round',
			'wt-button-disabled': disabled,
		},
	);
	return (
		<a className={ButtonClass} {...props}>
			<span>{children}</span>
		</a>
	);
};

export default Button;
