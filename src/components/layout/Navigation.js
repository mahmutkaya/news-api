import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { newsSources, categories } from '../../utilities/config'
import '../News/news.css'
import logo from '../../images/logo.svg'
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Row,
  Button
} from 'reactstrap';

class Navigation extends Component {

  state = {
    isOpen: false,
    category: ""
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setRandomItem = () => {
    const { news, handleRandomItem } = this.props
    const item = news[Math.floor(Math.random() * news.length)];
    handleRandomItem(item);
  }

  render() {
    const { handleChange } = this.props
    return (
      <Nav className='my-nav' tabs>
        <Row className='nav-row nav-row-1'>
          <NavbarBrand className='logo' href="/">
            <img src={logo} alt='logo' />
          </NavbarBrand>
        </Row>
        <Row className='nav-row nav-row-2'>
          <NavItem>
            <NavLink href="/">
              <span>Home</span>
            </NavLink>
          </NavItem>
          <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            <DropdownToggle nav>
              <span>Categories</span>
            </DropdownToggle>
            <DropdownMenu>
              {newsSources.map((source, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleChange(source, categories[index])}>
                  <Link to="/">
                    <h4>{categories[index]}</h4>
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <Link to='/news/random'>
              <Button color="" onClick={this.setRandomItem}>
                <span>Random</span>
              </Button>
            </Link>
          </NavItem>
        </Row>
      </Nav>
    )
  }
}


export default Navigation