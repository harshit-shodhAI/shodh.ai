import type { FC, ReactNode } from 'react';

type ButtonProps = {
	icon?: ReactNode;
	twStyles?: string;
	rounded?: boolean;
	iconPosition?: 'before' | 'after';
	children: ReactNode;
};

const Button: FC<ButtonProps> = ({
	icon,
	children,
	rounded = false,
	iconPosition = 'after',
	twStyles,
	...rest
}) => {
	return (
		<div className="relative inline-block overflow-hidden">
			<button
				type="button"
				className={`${rounded ? 'pill-border' : 'gradient-border'} z-10 flex items-center justify-between gap-3 bg-white/[0.04] px-6 py-3 ${twStyles}`}
				{...rest}
			>
				{iconPosition === 'before' && icon}
				{children}
				{iconPosition === 'after' && icon}
			</button>

			<div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full translate-x-[-50%] bg-blue blur-[108px]" />
		</div>
	);
};

export default Button;
