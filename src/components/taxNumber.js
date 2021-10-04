import RadioBox from './childComponents/radioBox';

const  TaxNumber = props => {
  const {
    value,
    changeHandler,
    myTaxNumber,
    changeTaxNumberValue,
    changeTaxCatValue,
  } = props;

  const categoriesArray = [
    { value: "category1", name: "category", label: "Category 1" },
    { value: "category2", name: "category", label: "Category 2" },
    { value: "category3", name: "category", label: "Category 3" },
    { value: "category4", name: "category", label: "Category 4" },
  ];

  return (
    <div className="taxNumberContainer">
      <div className="formElement">
        <label>
          <input
            type="checkbox"
            checked={value}
            onChange={() => {
              changeHandler(!value);
            }}
          />
          Do you have a tax number?
        </label>
      </div>
      {value && (
        <div className="myTaxNumber">
          <span>My Tax Number:</span>
          <input
            type="text"
            value={myTaxNumber}
            onChange={(e) => changeTaxNumberValue(e.target.value)}
          />
        </div>
      )}
      {!value && (
        <div className="exemptionCategories">
          <span>Exemption Categories</span>
          <div onChange={(e) => changeTaxCatValue(e.target.value)}>
            {categoriesArray.map(({ value, name, label }) => {
              return (
                <RadioBox key={value} name={name} value={value} label={label} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaxNumber;