import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search_by_date?page={page}';

export function loadData(page = 0) {
  return function action(dispatch) {
    dispatch({ type: 'LOAD_DATA' });
    const loadPath = API.replace('{page}', page);
    return axios.get(loadPath).then((res) => {
      dispatch({ type: 'LOAD_DATA', data: res.data.hits });
    }).catch((err) => {
      dispatch({ type: 'LOAD_DATA', data: [] });
    });
  }
}