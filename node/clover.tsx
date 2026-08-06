interface CloverSvgProps {
	children: React.ReactNode;
}

export const CloverSvg = ({ children }: CloverSvgProps) => {
	return (
		<svg
			width="250"
			height="250"
			viewBox="0 0 143 143"
			fill="808080"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M127.415 71.499C137.14 89.625 129.792 106.035 111.038 111.036C106.035 129.792 89.6251 137.138 71.4991 127.415C53.3731 137.14 36.9634 129.792 31.9619 111.038C13.208 106.035 5.86036 89.625 15.5854 71.499C5.86036 53.3731 13.208 36.9634 31.9619 31.9619C36.9634 13.2079 53.3731 5.86031 71.4991 15.5853C89.6251 5.86031 106.035 13.2079 111.036 31.9619C129.792 36.9634 137.138 53.3731 127.415 71.499Z"
				fill="#808080"
			/>
			<foreignObject x="36" y="36" width="250" height="250">
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
                        overflow: "hidden",
					}}
				>
					{children}
				</div>
			</foreignObject>
		</svg>
	);
};
