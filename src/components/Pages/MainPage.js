import React, { Component } from 'react';
import { Col, CardGroup } from 'reactstrap';
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import News from '../News/News'

class MainPage extends Component {
  state = {
    error: false,
  }
  
  render() {
    const {error} = this.state;
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
      // history,
      // location
    } = this.props
    
    return (
      <>
        <Navigation
          handleChange={handleChange}
          news={news}
          handleRandomItem={handleRandomItem} />
        <Col>
          <CardGroup>
            <News
              renderDetails={renderDetails}
              newsCategory={newsCategory}
              categoryName={categoryName}
              error={error}
              news={news}
              // history={history}
              // location={location}
              sortByDate={sortByDate}
              sortByTitle={sortByTitle}
              setSelectedItem={setSelectedItem}
              dateChecked={dateChecked}
              titleChecked={titleChecked}
            />
          </CardGroup>
        </Col>
        <Footer handleChange={handleChange} />
      </>
    );
  }
}

export default MainPage;
