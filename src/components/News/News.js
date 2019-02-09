import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import './news.css'
import Error from '../../utilities/Error'
import SingleNews from './SingleNews';

class News extends Component {

  state = {
    dropdownOpen: false,
    sortBy: true,
    categoryName: '',
  }

  componentDidMount()  {
      this.setState({categoryName: this.props.categoryName})
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
      <h1 className='category-name'>{this.state.categoryName}</h1>
        <Row>
          <ButtonDropdown
            className='sortBy col-1'
            hidden={!this.state.sortBy}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}>
            <DropdownToggle id='sortByToggle' caret color="">
              sort by: {this.props.selected}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.sortByDate}>
                Publish date (default)
              </DropdownItem>
              <DropdownItem onClick={this.props.sortByTitle}>
                Title 
              </DropdownItem>
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
