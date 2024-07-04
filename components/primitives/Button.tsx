import type { FC, ReactNode } from 'react';

type ButtonProps = {
	icon?: ReactNode;
	twStyles?: string;
	iconPosition?: 'before' | 'after';
	children: ReactNode;
};

const Button: FC<ButtonProps> = ({
	icon,
	children,
	iconPosition = 'after',
	twStyles,
}) => {
	return (
		<div className="relative">
			<button
				type="button"
				className={`gradient-border z-10 flex items-center justify-between gap-3 bg-white/[0.04] px-6 py-3 ${twStyles}`}
			>
				{iconPosition === 'before' && icon}
				{children}
				{iconPosition === 'after' && icon}
			</button>

			<div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-[150%] translate-x-[-50%] bg-blue blur-[108px]" />
		</div>
	);
};

export default Button;
