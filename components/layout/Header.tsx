import Link from "next/link";

export default () => {
	return (
		<>
			<div className="container flex h-16 items-center justify-between">
				<p> Logo </p>

				<nav className="flex gap-12">
					<Link href="/">Home</Link>
					<Link href="/products">Products</Link>
					<Link href="/about">About</Link>
					<Link href="/process">Process</Link>
					<Link href="/faq">FAQ</Link>
				</nav>

				<button type="button">Explore Models</button>
			</div>

			<div
				className="h-line w-full"
				style={{
					background:
						"linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.5%, rgba(255, 255, 255, 0) 100%)",
				}}
			/>
		</>
	);
};
