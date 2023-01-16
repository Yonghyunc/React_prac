import { handleActions } from 'redux-actions';
import * as ArticleAPI from '../api/article';

const GET_ARTICLES = 'article/GET_ARTICLE';
const GET_ARTICLES_SUCCESS = 'article/GET_ARTICLE_SUCCESS';
const GET_ARTICLES_FAILURE = 'article/GET_ARTICLE_FAILURE';

export const getArticles = () => async (dispatch) => {
  dispatch({ type: GET_ARTICLES });
  try {
    const articles = await ArticleAPI.getArticlesAxios();
    console.log('try', articles);
    dispatch({ type: GET_ARTICLES_SUCCESS, articles});
  } catch (e) {
    dispatch({ type: GET_ARTICLES_FAILURE, error: e });
  }
};

const initialState = {
  articles: [],
};

const article = handleActions(
  {
    [GET_ARTICLES_SUCCESS]: (state, action) => ({
      ...state,
      articles: action.articles,
    }),
  },
  initialState,
);

export default article;