import './Button.style.scss';

const Button = ({ btnStyle, text, onClickEvent }) => {
  return (
    <button className={btnStyle} text={text} onClick={() => onClickEvent()}>
      {text}
    </button>
  );
};

export default Button;
