import React, { Component } from 'react';
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import NewsDetails from '../News/NewsDetails';

class DetailPage extends Component {
  render() {
    const {
      news,
      handleChange,
      handleRandomItem,
      item,
      setSelectedItem,
    } = this.props
    return (
      <>
        <Navigation
          handleChange={handleChange}
          news={news}
          handleRandomItem={handleRandomItem}
          item={item} />
        <NewsDetails
          news={news}
          item={item}
          setSelectedItem={setSelectedItem}
          handleRandomItem={handleRandomItem} />
        <Footer
          news={news}
          handleChange={handleChange}
          handleRandomItem={handleRandomItem} />
      </>
    );
  }
}

export default DetailPage;
