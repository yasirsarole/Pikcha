const RadioBox = props => {
  const { value, name, label } = props;
  return (
    <label>
      <input type="radio" value={value} name={name} />
      {label}
    </label>
  );
}

export default RadioBox;