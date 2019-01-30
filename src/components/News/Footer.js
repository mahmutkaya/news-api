import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './news.css'
import {
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

class Footer extends Component {

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
          <Button color='' onClick={() => handleChange('techcrunch')}>
            <Link to="/"><h4>Technology</h4></Link>
                </Button>
          <Button color='' onClick={() => handleChange('national-geographic')}>
            <Link to="/"><h4>Science</h4></Link>
                </Button>
          <Button color='' onClick={() => handleChange('bbc-news')}>
            <Link to="/"><h4>General</h4></Link>
                </Button>
          <Button color='' onClick={() => handleChange('fox-sports')}>
            <Link to="/"><h4>Sport</h4></Link>
                </Button>
          <Button color='' onClick={() => handleChange('the-economist')}>
            <Link to="/"><h4>Business</h4></Link>
          </Button>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <span>Random</span>
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}


export default Footer
