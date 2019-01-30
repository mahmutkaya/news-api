import React, { Component } from 'react';
import { Col, CardGroup } from 'reactstrap';
import Navigation from '../News/Navigation'
import Footer from '../News/Footer'
import News from '../News/News'

class MainPage extends Component {
  state = {
      error: false,
  }

  render() {
    const {
      error,
    } = this.state;

    return (
      <>
        <Navigation
          handleChange={this.props.handleChange}
          news={this.props.news}
          handleRandomItem={this.props.handleRandomItem}/>
        <Col>
          <CardGroup>
            <News
              renderDetails={this.props.renderDetails}
              newsCategory={this.props.newsCategory}
              error={error} news={this.props.news}
              history={this.props.history}
              sortByDate={this.props.sortByDate}
              sortByTitle={this.props.sortByTitle}
              setSelectedItem={this.props.setSelectedItem}
            />
          </CardGroup>
        </Col>
        <Footer handleChange={this.props.handleChange}/>
      </>
    );
  }
}

export default MainPage;
