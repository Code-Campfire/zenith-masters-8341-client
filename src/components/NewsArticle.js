import '../styles/NewsArticle.css'

export const NewsArticle = ({ article }) => {
	return (
		<div className="news-article-container">
			<div>{article.title}</div>
			<div>{article.body}</div>
			<div>{article.bottom}</div>
		</div>
	)
}
