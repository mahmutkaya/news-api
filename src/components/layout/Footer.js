import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { newsSources, categories } from '../../logic/config'
import '../News/news.css'
import {
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

class Footer extends Component {

  //get a random news
  setRandomItem = () => {
    const { news, handleRandomItem } = this.props
    const item = news[Math.floor(Math.random() * news.length)];
    handleRandomItem(item);
  }

  render() {
    const { handleChange } = this.props
    return (
      <Nav id='footer-nav' tabs>
        <NavItem>
          <NavLink href="/">
            <span>Home</span>
          </NavLink>
        </NavItem>
        <NavItem id='footer-category'>
          <span>Categories</span>
          {newsSources.map((source, index) =>
            <Button
              color=''
              key={index}
              onClick={() => handleChange(source, categories[index])}>
              <Link to="/">
                <h5>{categories[index]}</h5>
              </Link>
          </Button>
          )}
        </NavItem>
        <NavItem>
          <Link to='/news/random'>
            <Button color="" onClick={this.setRandomItem}>
              <span>Random</span>
            </Button>
          </Link>
        </NavItem>
      </Nav>
    )
  }
}


export default Footer
