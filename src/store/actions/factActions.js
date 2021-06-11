const site = 'https://uselessfacts.jsph.pl/random.json';

export const fetchFact = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(site);
      let result = await response.json();
      console.log(result);
      dispatch({
        type: 'DISPLAYAFACT',
        payload: result.text,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const clearFact = () => {
  return {
    type: 'CLEARFACT',
  };
};
