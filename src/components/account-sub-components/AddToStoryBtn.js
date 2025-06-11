export default function AddToStoryBtn() {
	return (
		<>
			<button className="action-btn" style={{ color: 'white', backgroundColor: 'var(--fb-primary-button-color)' }}>
				<picture>
					<source srcSet="/plus-sign.svg" style={{ width: '5px', height: '5px' }} />
					<img src="/plus-sign.svg" alt="plus" style={{ width: '17px', height: '17px', marginRight: '10px' }} />
				</picture>
				Add to Story
			</button>
		</>
	)
}
