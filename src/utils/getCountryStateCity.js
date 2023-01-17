import { Country, State, City } from 'country-state-city';

const GetAllCountry = () => {
  const resultCountry = Country.getAllCountries();
  const result = resultCountry?.map((item) => {
    return {
      name: item?.name,
      countryCode: item?.isoCode
    };
  });
  return result;
};
const GetAllState = (countryCode) => {
  const resultState = State.getStatesOfCountry(countryCode);
  const result = resultState?.map((item) => {
    return {
      name: item?.name,
      stateCode: item?.isoCode
    };
  });
  return result;
};
const GetAllCity = (countryCode, stateCode) => {
  const resultCity = City.getCitiesOfState(countryCode, stateCode);
  const result = resultCity?.map((item) => {
    return item?.name;
  });
  return result;
};

export { GetAllCountry, GetAllState, GetAllCity };
