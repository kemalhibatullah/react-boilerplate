import React from 'react';
import {
  FaUsb,
  FaSketch,
  FaUserAlt,
  FaRegSun,
  FaChartArea,
  FaChartLine,
  FaBullhorn,
  FaInfoCircle,
  FaRegEnvelope,
  FaStarHalfAlt,
} from 'react-icons/fa';
import Container from './Container';
import Menu from './Menu';
import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

function SideMenu() {
  return (
    <Container>
      <Menu>
        <MenuTitle style={{ color: '#42b549' }}>HOME</MenuTitle>
      </Menu>
      <Menu>
        <MenuTitle>LEARNING</MenuTitle>
        <MenuItem>
          <FaSketch size={20} style={{ margin: '0px 10px 0px 0' }} /> Courses
        </MenuItem>
        <MenuItem>
          <FaUsb size={20} style={{ margin: '0px 10px 0px 0' }} /> Learning
          plans
        </MenuItem>
      </Menu>
      <Menu>
        <MenuTitle>MANAGE</MenuTitle>
        <MenuItem>
          <FaUserAlt size={20} style={{ margin: '0px 10px 0px 0' }} /> User
        </MenuItem>
        <MenuItem>
          <FaRegSun size={20} style={{ margin: '0px 10px 0px 0' }} /> Skills
        </MenuItem>
        <MenuItem>
          <FaChartArea size={20} style={{ margin: '0px 10px 0px 0' }} /> Reports
        </MenuItem>
        <MenuItem>
          <FaChartLine size={20} style={{ margin: '0px 10px 0px 0' }} />{' '}
          Analitycs
        </MenuItem>
        <MenuItem>
          <FaBullhorn size={20} style={{ margin: '0px 10px 0px 0' }} />{' '}
          Announcements
        </MenuItem>
      </Menu>
      <Menu>
        <MenuTitle>CONFIGURE</MenuTitle>
        <MenuItem>
          <FaStarHalfAlt size={20} style={{ margin: '0px 10px 0px 0' }} />{' '}
          Points
        </MenuItem>
        <MenuItem>
          <FaRegSun size={20} style={{ margin: '0px 10px 0px 0' }} /> Rewards
        </MenuItem>
        <MenuItem>
          <FaRegEnvelope size={20} style={{ margin: '0px 10px 0px 0' }} /> Email
          templates
        </MenuItem>
        <MenuItem>
          <FaInfoCircle size={20} style={{ margin: '0px 10px 0px 0' }} />{' '}
          Company info
        </MenuItem>
        <MenuItem>
          <FaUserAlt size={20} style={{ margin: '0px 10px 0px 0' }} /> Billing
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default SideMenu;
