import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import Container from './Container';
import Logo from './Logo';
import LogoImg from '../../../images/codemi.png';
import Navbar from './Navbar';
import ProfileImg from '../../../images/profile.jpg';
import RightMenu from './RightMenu';
import Profile from './Profile';

function Header() {
  return (
    <Container>
      <Navbar>
        <Logo src={LogoImg} />
        <RightMenu>
          <FaBell style={{ margin: '20px', cursor: 'pointer' }} />
          <Profile src={ProfileImg} />
          <FaChevronDown
            style={{ margin: '5px', cursor: 'pointer' }}
            size={12}
          />
        </RightMenu>
      </Navbar>
    </Container>
  );
}

export default Header;
