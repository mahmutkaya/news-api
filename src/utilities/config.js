import fetch from "cross-fetch";

const API_URL = 'https://newsapi.org/v2/everything?sources='

const API_KEY = 'e9f7948b60c64ff8a9689eb44157e17b'

const newsSources = ["techcrunch", "national-geographic", "bbc-news", "fox-sports", "the-economist"]

const categories = ["Technology", "Science", "General", "Sport", "Business"]


const getNews2 = async newsCategory => {
  const source = newsCategory.length === 0 ? 'bbc-news' : newsCategory;
  const url = `${API_URL}${source}&apiKey=${API_KEY}`;

  let news = await fetch(url);

  return news.json();
}

export { API_URL, API_KEY, newsSources, categories, getNews2 }

