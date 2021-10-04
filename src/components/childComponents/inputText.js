const InputText = props => {
  const {label, value, changeHandler} = props;

  return (
    <div className="formElement">
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </label>
  </div>
  )
}

export default InputText;