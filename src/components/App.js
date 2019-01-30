import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import './News/news.css'

class App extends React.Component {

  state = {
    selectedItem: [],
    randomItem: [],
    newsCategory: [],
    news: []
  }

  componentDidMount() {
    this.getNews();
  }

  setSelectedItem = (item) => {
    this.setState({ selectedItem: item })
  }

  handleChange = (value) => {
    this.setState({ newsCategory: value },
      () => this.getNews());
  }

  getNews = () => {
    const source = this.state.newsCategory.length === 0 ? 'bbc-news' : this.state.newsCategory;
    const url = `https://newsapi.org/v2/everything?sources=${source}&apiKey=9e6522776c1d4066abf46b18976eb182`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(error => this.setState({
        error: true
      }))
  }

  sortByTitle = () => {
    this.state.news.map(item => this.setState({
      news: this.state.news.sort((a, b) => a.title.localeCompare(b.title))
    }))
  }

  sortByDate = () => {
    this.state.news.map(item => this.setState({
      news: this.state.news.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    }))
  }

  handleRandomItem = (item) => {
    this.setState({ selectedItem: item });
  }
  render() {
    const { selectedItem, newsCategory, news } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home" component={
            () => <MainPage
              setSelectedItem={this.setSelectedItem}
              newsCategory={newsCategory}
              handleChange={this.handleChange}
              getNews={this.getNews}
              news={news}
              sortByDate={this.sortByDate}
              sortByTitle={this.sortByTitle}
              handleRandomItem={this.handleRandomItem}
              item={selectedItem}
            />}
          />
          <Route path={`/detail/${selectedItem.title}`} name="News Details" component={
            () => <DetailPage
              setSelectedItem={this.setSelectedItem} item={selectedItem}
              handleChange={this.handleChange}
              news={news}
              handleRandomItem={this.handleRandomItem}
            />} />
          <Route path='/news/random' name="News Details" component={
            () => <DetailPage
              setSelectedItem={this.setSelectedItem} item={selectedItem}
              news={news}
              handleChange={this.handleChange}
              handleRandomItem={this.handleRandomItem}
            />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
