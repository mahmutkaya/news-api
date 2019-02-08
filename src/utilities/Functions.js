
export const getNews = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(error => error)
  }