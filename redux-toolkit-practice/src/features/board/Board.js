import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardPost from './BoardPost';
import { axiosGetBoards } from './boardSlice';
import './Board.scss';

const Board = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(axiosGetBoards());
  }, [dispatch]);

  console.log(boards);

  return (
    <div>
      <h2>게시판</h2>
      <BoardPost />
      <div className="boardlist-div">
        {boards.map((board) => (
          <div key={board.board_id}>
            <h3>{board.board_title}</h3>
            <p>{board.board_content}</p>
            <p className='writer'>{board.board_writer}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Board;