function Input(props) {
  return (
    <div>
      <h6 className={`top-text ${props.state}`}>{props.topText}</h6>
      <h6 className={`label ${props.variant}`}>{props.label}</h6>
      <div
        className={`input-container ${props.inputContainerWidth} ${
          props.inputContainerIcon && "input-container-icon"
        }`}
      >
        {props.startIcon}
        {props.inputType === "textarea" ? (
          <textarea className={props.className} placeholder="Placeholder" />
        ) : (
          <input
            className={props.className}
            placeholder="Placeholder"
            defaultValue={props.value}
          />
        )}
        {props.endIcon}
      </div>
      <h6 className={`bottom-text ${props.variant}`}>{props.bottomText}</h6>
    </div>
  );
}

export default Input;
