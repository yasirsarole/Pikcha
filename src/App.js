import React, { useState } from 'react';

// import components
import CountrySelector from './components/countrySelect';
import TaxNumber from './components/taxNumber';
import InputText from './components/childComponents/inputText';

// import css
import './App.css'

const App = () => {
  const [address1, changeAddressValue] = useState("");
  const [city, changeCityValue] = useState("");
  const [country, changeCountryValue] = useState({ label: "", value: "" });
  const [line2, changeLine2Value] = useState("");
  const [postcode, changePostcodeValue] = useState("");
  // setting state variable as residentialState as it conflicts with the keyname "state"
  const [residentialState, changeStateValue] = useState("");
  const [taxCategory, changeTaxCatValue] = useState("");
  const [taxNumber, changeTaxNumberValue] = useState("");
  const [taxNumberCheck, taxNumberCheckHandler] = useState(false);

  // Reset tax values when the country is not australia, this depends on the requirement of the client
  // We can also reset categories on tax number check, this also depends on the requirement
  const resetTaxValues = () => {
    changeTaxCatValue("");
    changeTaxNumberValue("");
    taxNumberCheckHandler(false);
  };

  const formElementsArray = [
    {
      label: "Residential Address",
      value: address1,
      changeHandler: changeAddressValue,
    },
    {
      label: "Line 2 (Optional)",
      value: line2,
      changeHandler: changeLine2Value,
    },
    { label: "City or Town", value: city, changeHandler: changeCityValue },
    {
      label: "ZIP or post code",
      value: postcode,
      changeHandler: changePostcodeValue,
    },
    {
      label: "State or province",
      value: residentialState,
      changeHandler: changeStateValue,
    },
  ];

  // log value everytime the form value changes
  // residential address is the sum of address1 and line2
  console.log("Fetch Data", {
    address1,
    city,
    country: country.label,
    line2,
    postcode,
    residentialAddress: `${address1} ${line2}`,
    residentialState,
    taxCategory,
    taxNumber,
  });

  return (
    <div className="contantForm">
      <form>
        {formElementsArray.map(({ label, value, changeHandler }) => {
          return (
            <InputText
            key={label}
              label={label}
              value={value}
              changeHandler={changeHandler}
            />
          );
        })}
        <div className="formElement">
          <label>
            Country
            <CountrySelector
              value={country}
              changeHandler={changeCountryValue}
              resetTaxValues={resetTaxValues}
            />
          </label>
        </div>
        {country.label === "Australia" && (
          <div className="formElement">
            <TaxNumber
              value={taxNumberCheck}
              changeHandler={taxNumberCheckHandler}
              myTaxNumber={taxNumber}
              changeTaxNumberValue={changeTaxNumberValue}
              changeTaxCatValue={changeTaxCatValue}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
