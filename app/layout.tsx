import './global.css';

import { Header } from 'components/layout';
import { Poppins } from 'next/font/google';

import type { ReactNode } from 'react';

const PoppinsFont = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400'],
	variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${PoppinsFont.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
