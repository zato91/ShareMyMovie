import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  let logout = () => {localStorage.clear();}



  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Profile
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        List of Movie
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Share List
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Friends
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Chat
        </a>
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