const ArticleList = ({articles}) => {

  return (
    <div>
      <div className="article-div">
        {articles.map((article) => (
          <div key={article.board_id} className="each-article-div">
            <h3>{article.board_title}</h3>
            <p>{article.board_content}</p>
            <p>{article.board_writer}</p>
            <p>{article.member}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ArticleList;