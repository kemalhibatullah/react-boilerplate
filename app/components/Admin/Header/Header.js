import React from 'react';
import { FaBell, FaChevronDown, FaAlignJustify } from 'react-icons/fa';
import Container from './Container';
import Logo from './Logo';
import LogoImg from '../../../images/codemi.png';
import Navbar from './Navbar';
import ProfileImg from '../../../images/profile.jpg';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import Profile from './Profile';

function Header() {
  return (
    <Container>
      <Navbar>
        <LeftMenu>
          <FaAlignJustify size={18} />
          <Logo src={LogoImg} />
        </LeftMenu>
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
