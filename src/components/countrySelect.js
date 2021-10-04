import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const  CountryOptions = props => {
  const options = useMemo(() => countryList().getData(), []);
  const { changeHandler, resetTaxValues } = props;

  return (
    <Select
      options={options}
      value={props.value}
      onChange={(value) => {changeHandler(value); if (value !== 'Australia') {
        resetTaxValues();
      }}}
    />
  );
}

export default CountryOptions;