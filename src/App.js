import React, { useState } from 'react';

// import components
import CountrySelector from './components/countrySelect';
import TaxNumber from './components/taxNumber';

const App = () => {
  const [address1, changeAddressValue] = useState("");
  const [city, changeCityValue] = useState("");
  const [country, changeCountryValue] = useState({label: "", value: ""});
  const [line2, changeLine2Value] = useState("");
  const [postcode, changePostcodeValue] = useState("");
  // setting state variable as residentialState as it conflicts with the keyname "state"
  const [residentialState, changeStateValue] = useState("");
  const [taxCategory, changeTaxCatValue] = useState("");
  const [taxNumber, changeTaxNumberValue] = useState("");
  const [taxNumberCheck, taxNumberCheckHandler] = useState(false);

  // log value everytime the form value changes
  console.log('Fetch Data', {address1, city, country: country.label, line2, postcode, residentialAddress: `${address1} ${line2}`, residentialState, taxCategory, taxNumber});

  // Reset tax values when the country is not australia, this depends on the requirement of the client
  const resetTaxValues = () => {
    changeTaxCatValue('');
    changeTaxNumberValue('');
    taxNumberCheckHandler(false);
  }

  return (
    <div className="contantForm">
      <form>
        <div className="formElement">
          <label>
            Residential Address
            <input
              type="text"
              value={address1}
              onChange={(e) => changeAddressValue(e.target.value)}
            />
          </label>
        </div>
        <div className="formElement">
          <label>
            Line 2 (Optional)
            <input
              type="text"
              value={line2}
              onChange={(e) => changeLine2Value(e.target.value)}
            />
          </label>
        </div>
        <div className="formElement">
          <label>
            City or Town
            <input
              type="text"
              value={city}
              onChange={(e) => changeCityValue(e.target.value)}
            />
          </label>
        </div>
        <div className="formElement">
          <label>
            ZIP or post code
            <input
              type="text"
              value={postcode}
              onChange={(e) => changePostcodeValue(e.target.value)}
            />
          </label>
        </div>
        <div className="formElement">
          <label>
            State or province
            <input
              type="text"
              value={residentialState}
              onChange={(e) => changeStateValue(e.target.value)}
            />
          </label>
        </div>
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
