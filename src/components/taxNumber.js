import React from 'react'

const  TaxNumber = props => {
  const {
    value,
    changeHandler,
    myTaxNumber,
    changeTaxNumberValue,
    changeTaxCatValue,
  } = props;

  return (
    <div className="taxNumberContainer">
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={() => changeHandler(!value)}
        />
        Do you have a tax number?
      </label>
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
            <input type="radio" value="category1" name="category" /> Category 1
            <input type="radio" value="category2" name="category" /> Category 2
            <input type="radio" value="category3" name="category" /> Category 3
            <input type="radio" value="category4" name="category" /> Category 4
          </div>
        </div>
      )}
    </div>
  );
}

export default TaxNumber;