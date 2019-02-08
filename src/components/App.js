import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import { API_URL, API_KEY } from '../utilities/config'
// import {getNews} from '../utilities/Functions'
import './News/news.css'

class App extends Component {

  state = {
    selectedItem: [],
    randomItem: [],
    newsCategory: [],
    news: [],
    categoryName: '',
    error: false
  }

  componentDidMount() {
    this.getNews();
  }

  setSelectedItem = (item) => {
    this.setState({ selectedItem: item })
  }

  handleChange = (value, categoryName) => {
    this.setState({
      newsCategory: value,
      categoryName: categoryName
    },
      () => this.getNews());

  }
  
  getNews = () => {
    const source = this.state.newsCategory.length === 0 ? 'bbc-news' : this.state.newsCategory;
    const url = `${API_URL}${source}&apiKey=${API_KEY}`;

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
    
    const { selectedItem, newsCategory, news, categoryName } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" name="Home" component={
            () => <MainPage
              setSelectedItem={this.setSelectedItem}
              newsCategory={newsCategory}
              categoryName={categoryName}
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
      </Router>
    )
  }
}

export default App;
