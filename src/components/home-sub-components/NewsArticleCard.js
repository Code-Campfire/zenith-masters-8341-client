import '../../styles/home-sub-components/newsArticleCard.css'

export const NewsArticleCard = ({ article }) => {
	return (
		<div className="news-article-container">
			<div className="news-heading-container">
				<div className="picture-name-timestamp-container">
					<picture className="article-icon">
						<img
							alt="PH"
							src="https://static.vecteezy.com/system/resources/previews/027/989/305/non_2x/placeholder-icon-in-trendy-flat-style-isolated-on-white-background-placeholder-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg"
							style={{ height: '40px' }}
						/>
					</picture>
					<div className="name-timestamp-container">
						<div className="article-username">{article.name}</div>
						<div className="article-timestamp">{article.timestamp}</div>
					</div>
				</div>
				<div className="news-article-title">{article.title}--------------------------</div>
			</div>
			<div className="news-article-body">{article.body}</div>
			<div className="news-article-footer">
				<div className="footer-top">
					<div>Likes: 21</div>
					<div>13 comments</div>
				</div>
				<div className="footer-bottom">
					<div>{article.like}</div>
					<div>{article.comment}</div>
					<div>{article.share}</div>
				</div>
			</div>
		</div>
	)
}
