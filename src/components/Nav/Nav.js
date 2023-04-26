import React, { memo } from 'react';
import { NavContainer, Logo } from './NavStyles';
import Sword from './sword.png'

function Nav({ children }) {
  return (
    <NavContainer>
        <Logo src={Sword}></Logo>
        {children}
    </NavContainer>
  )
}

export default memo(Nav);
