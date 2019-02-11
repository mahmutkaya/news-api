import { API_URL, API_KEY } from '../logic/config'

//make http request with fetch method
const getNews = async category => {
  const source = category.length === 0
    ? 'bbc-news'
    : category;
  const url = `${API_URL}${source}&apiKey=${API_KEY}`;

  return await fetch(url)
    .then(res => res.json())
    .then(({articles}) => articles)
    .catch(error => error)
}

//sort news by published date --> new to old
const sortByDate = news => news.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

//sort news by title --> alphabetically
const sortByTitle = news => news.sort((a, b) => a.title.localeCompare(b.title))

export { getNews, sortByDate, sortByTitle }
