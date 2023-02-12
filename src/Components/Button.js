function Button(props) {
  return (
    <button className={`btn ${props.variant}`}>
      {" "}
      {props.iconStart} {props.text} {props.iconEnd}
    </button>
  );
}

export default Button;
