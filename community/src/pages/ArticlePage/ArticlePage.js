import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../modules/article';

import ArticleCreate from "./ArticeCreate";
import ArticleList from "./ArticleList";

const ArticlePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      <ArticleList articles={articles}/>
      <hr />
      <ArticleCreate /> 
    </div>
  );
};

export default ArticlePage;