import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {newsSources, categories} from '../../utilities/config'
import '../News/news.css'
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
          {newsSources.map((source, index) =>
            <Button
              color=''
              key={index}
              onClick={() => handleChange(source)}>
              <Link to="/">
                <h5>{categories[index]}</h5>
              </Link>
          </Button>
          )}
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
