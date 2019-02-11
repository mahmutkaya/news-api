import React, { Component } from 'react';
import { Col, CardGroup } from 'reactstrap';
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import News from '../News/News'

class MainPage extends Component {
  
  render() {
    const {
      news,
      handleChange,
      handleRandomItem,
      renderDetails,
      newsCategory,
      categoryName,
      sortByDate,
      sortByTitle,
      setSelectedItem,
      dateChecked,
      titleChecked,
    } = this.props
    
    return (
      <>
        <Navigation
          news={news}
          handleChange={handleChange}
          handleRandomItem={handleRandomItem} />
        <Col>
          <CardGroup>
            <News
              news={news}
              renderDetails={renderDetails}
              newsCategory={newsCategory}
              categoryName={categoryName}
              sortByDate={sortByDate}
              sortByTitle={sortByTitle}
              setSelectedItem={setSelectedItem}
              dateChecked={dateChecked}
              titleChecked={titleChecked}
            />
          </CardGroup>
        </Col>
        <Footer
          news={news}
          handleChange={handleChange}
          handleRandomItem={handleRandomItem} />
      </>
    );
  }
}

export default MainPage;
