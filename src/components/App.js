import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import { getNews, sortByDate, sortByTitle } from '../logic/NewsService'
import './News/news.css'

class App extends Component {

  state = {
    selectedItem: [],
    randomItem: [],
    newsCategory: [],
    news: [],
    categoryName: '',
    dateChecked: false, 
    titleChecked: false,
  }

  //lifecycle method
  componentDidMount() {
    this.getNews()
  }

  getNews = () => (
    getNews(this.state.newsCategory)
      .then(news => {
        this.setState({ news })
      })
  )

  //select a news
  setSelectedItem = (item) => {
    this.setState({ selectedItem: item })
  }

  //change news source and category title
  handleChange = (value, categoryName) => {
    this.setState({
      newsCategory: value,
      categoryName: categoryName
    },
      () => this.getNews()
    )
  }

  sortByDate = () => {
    this.setState({
      news: sortByDate(this.state.news),
      dateChecked: true, //highlight 'publish date' button if this function called
      titleChecked: false, //clear highlight on 'title' button if this function called
    })
  }

  sortByTitle = () => {
    this.setState({
      news: sortByTitle(this.state.news),
      titleChecked: true, //highlight 'title' button if this function called
      dateChecked: false, //clear highlight on 'publish date' button if this function called
    })
  }

  handleRandomItem = (item) => {
    this.setState({ selectedItem: item });
  }


  render() {
    const { selectedItem, newsCategory, news, categoryName, dateChecked, titleChecked } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            name="Home"
            component={
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
                dateChecked={dateChecked}
                titleChecked={titleChecked}

              />}
          />
          <Route
            path={`/detail/${(selectedItem.title)}`}
            name="News Details"
            component={() =>
              <DetailPage
                setSelectedItem={this.setSelectedItem}
                item={selectedItem}
                handleChange={this.handleChange}
                news={news}
                handleRandomItem={this.handleRandomItem}
              />}
          />
          <Route
            path='/news/random/'
            name="News Details"
            component={() =>
              <DetailPage
                setSelectedItem={this.setSelectedItem} item={selectedItem}
                news={news}
                handleChange={this.handleChange}
                handleRandomItem={this.handleRandomItem}
              />}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;
