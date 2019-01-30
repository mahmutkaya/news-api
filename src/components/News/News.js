import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import './news.css'
import Error from './Error'
import SingleNews from './SingleNews';

class News extends Component {

  state = {
    dropdownOpen: false,
    sortBy: true
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  hideSortBy = () => {
    this.setState({ sortBy: false });
  }

  renderItems = () =>
    !this.props.error
      ? this.props.news
        .filter(item => item.urlToImage)
        .slice(0, 10)
        .map(item => (
          <SingleNews
            hideSortBy={this.hideSortBy}
            key={item.url}
            item={item}
            setSelectedItem={this.props.setSelectedItem}
          />
        ))
      : <Error />

  render() {
    return (
      <div className='news-body'>
        <Row>
          <ButtonDropdown
            className='sortBy col-1'
            hidden={!this.state.sortBy}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}>
            <DropdownToggle id='sortByToggle' caret color="">
              sort by
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.sortByDate} ><span>Publish date (default)</span></DropdownItem>
              <DropdownItem onClick={this.props.sortByTitle}><span>Title</span></DropdownItem>
              <DropdownItem divider />
              <abbr title='coming soon..'>
                <DropdownItem disabled><span>Review</span></DropdownItem>
              </abbr>
            </DropdownMenu>
          </ButtonDropdown>
        </Row>
        <hr/>
        <Row className='news-cards'>{this.renderItems()}</Row>
      </div>
    )
  }
}

export default News;
