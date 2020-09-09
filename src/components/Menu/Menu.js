import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {Link} from 'react-router-dom'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  
  let logout = () => {localStorage.clear();}



  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      

      {/* <a href="/movie" tabIndex={tabIndex}> */}
      <Link to="/movie" tabIndex={tabIndex}> 
        <span aria-hidden="true"></span>
        Find a Movie
        </Link>
      
      
      <Link to="/movielist" tabIndex={tabIndex}> 
        <span aria-hidden="true"></span>
        My List of Movie
        </Link>
        <Link to="/sharelist" tabIndex={tabIndex}> 
        <span aria-hidden="true"></span>
        Share List
        </Link>
        <Link to="/friends" tabIndex={tabIndex}> 
        <span aria-hidden="true"></span>
        Friends
        </Link>
        <Link to="/welcome" tabIndex={tabIndex}> 
        <span aria-hidden="true"></span>
        Chat -coming soon 
        </Link>
      <a href="/" onClick={logout} tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Logout
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;