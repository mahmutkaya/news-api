import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './news.css'
import logo from '../images/logo.svg'
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
    const { handleChange}= this.props
    return (
        <Nav className='my-nav' tabs>
          <Row className='nav-row nav-row-1'>
          <NavbarBrand className='logo' href="/">
            <img src={logo} alt='logo'/>
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
              <DropdownItem onClick={() => handleChange('techcrunch')}>
                <Link to="/"><h4>Technology</h4></Link>
                </DropdownItem>
                <DropdownItem onClick={() => handleChange('national-geographic')}>
                <Link to="/"><h4>Science</h4></Link>
                </DropdownItem>
                <DropdownItem onClick={() => handleChange('bbc-news')}>
                <Link to="/"><h4>General</h4></Link>
                </DropdownItem>
                <DropdownItem onClick={() => handleChange('fox-sports')}>
                <Link to="/"><h4>Sport</h4></Link>
                </DropdownItem>
              <DropdownItem onClick={() => handleChange('the-economist')}>
                <Link to="/"><h4>Business</h4></Link>
                </DropdownItem>
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