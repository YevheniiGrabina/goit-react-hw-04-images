function fetchAPI(query, page) {
  const KEY = '26979119-f1478b332cc81f8a5f9b5f4c9';
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По запросу ${query} ничего не найдено`));
  });
}
const api = {
  fetchAPI,
};

export default api;
