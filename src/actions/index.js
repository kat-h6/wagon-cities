import cities from '../cities';

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

export function selectCity() {
  return {
    type: "SELECT_CITY",
    payload: city
  };
}
