import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import './news.css'
import Error from '../../logic/Error'
import SingleNews from './SingleNews';

class News extends Component {

  state = {
    dropdownOpen: false,
    sortBy: true,
    categoryName: '',
  }

  //lifecycle method
  componentDidMount()  {
      this.setState({categoryName: this.props.categoryName})
  }

  //stay open the dropdown menu while toggle is clicked
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  //hide sort button while single news render
  hideSortBy = () => {
    this.setState({ sortBy: false });
  }

  renderItems = () =>
    !this.props.error ? (
      this.props.news
        .filter(item => item.urlToImage) //get articles which has an img
        .slice(0, 10) //take first 10 articles
        .map(item =>
          <SingleNews
            hideSortBy={this.hideSortBy}
            key={item.url}
            item={item}
            setSelectedItem={this.props.setSelectedItem}
          />)
      ) : <Error errorMsg='there is no news!!' />

  render() {
    
    //highlight sorting menu with 'checked' icon
    const check = (
      <span role='img' aria-label='checked'>✔️</span>
    )

    //highlight 'publish date' button
    const date = this.props.dateChecked ? check : ''
    //highlight 'title' button
    const title = this.props.titleChecked ? check : ''

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
              sort by:
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem  onClick={this.props.sortByDate}>
                <span >Publish date {date} </span>
              </DropdownItem>
              <DropdownItem  onClick={this.props.sortByTitle}>
                <span> Title {title} </span>
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
