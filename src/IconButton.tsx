import React from 'react';
import classNames from 'classnames';
import styles from './IconButton.less';

interface IconButtonProps {
	icon: React.ReactElement,
	size?: number | string,
	disabled?: boolean,
	onlyIcon?: boolean,
	onClick?: () => void,
}

export const IconButton = ({
	icon,
	onClick = () => undefined,
	size = 14,
	disabled = false,
	onlyIcon = false,
}: IconButtonProps): JSX.Element => {
	let roundedButtonStyles = {};
	const onClickCb = disabled ? undefined : onClick;

	if (size && !onlyIcon) {
		const pxSize = `${parseInt(String(size), 10)}px`;
		roundedButtonStyles = {
			width: pxSize,
			height: pxSize,
		};
	}

	return (
		<button
			type="button"
			className={classNames(styles.root, {
				[styles.disabled]: disabled,
				[styles.onlyIcon]: onlyIcon,
			})}
			style={roundedButtonStyles}
			disabled={disabled}
			onClick={onClickCb}
		>
			{icon}
		</button>
	);
};
