import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Board.scss';
import { axiosPostBoard } from './boardSlice';

const BoardPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const boardPostSubmit = (e) => {
    e.preventDefault();

    const newBoard = {
      board_title: title,
      board_content: content,
      board_writer: writer,
      member: 1,
    };
    dispatch(axiosPostBoard(newBoard));

    setTitle('');
    setWriter('');
    setContent('');
  };

  return (
    <form className="board-post-form" onSubmit={boardPostSubmit}>
      <h3>글 쓰기</h3>
      <div>
        <label htmlFor="title">제목</label>
        <input
          if="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="writer">작성자</label>
        <input
          id="writer"
          type="text"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button>작성</button>
    </form>
  );
};

export default BoardPost;
