import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Road map',
    path: '/roadmap',
    icon: <RiIcons.RiRoadMapFill />,
    cName: 'nav-text'
  },
  {
    title: 'Story',
    path: '/story',
    icon: <FaIcons.FaBookmark />,
    cName: 'nav-text'
  },
  {
    title: 'Admin page',
    path: '/admin',
    icon: <AiIcons.AiFillLock />,
    cName: 'nav-text'
  },
  {
    title: 'Account',
    path: '/account',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text'
  },
  {
    title: 'My course',
    path: '/mycourse',
    icon: <BsIcons.BsBookFill />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoMdLogIn />,
    cName: 'nav-text'
  }
];
