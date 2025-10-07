export default function NameTitle({ fname, lname }) {
	return (
		<>
			{fname?.length <= 8 && lname?.length <= 8 ? (
				<>
					<div className="title-container-shortChar">
						<h1>
							{fname} {lname}
						</h1>
					</div>
				</>
			) : (
				<div className="title-container-longChar">
					<h1>
						{fname} {lname}
					</h1>
				</div>
			)}
		</>
	)
}
