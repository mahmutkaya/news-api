import React, { Component } from 'react';
import Navigation from '../News/Navigation'
import Footer from '../News/Footer'
import NewsDetails from '../News/NewsDetails';

class DetailPage extends Component {
  render() {
    return (
      <>
        <Navigation
          handleChange={this.props.handleChange}
          news={this.props.news}
          handleRandomItem={this.props.handleRandomItem}
          item={this.props.item} />
        
        <NewsDetails
          news={this.props.news}
          item={this.props.item}
          setSelectedItem={this.props.setSelectedItem} handleRandomItem={this.props.handleRandomItem} />
        
        <Footer handleChange={this.props.handleChange}/>
      </>
    );
  }
}

export default DetailPage;
