/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";
import {VscFileSymlinkDirectory} from 'react-icons/vsc'
import {HiUserGroup} from 'react-icons/hi'
import { Link } from "react-router-dom";
export default function Sidebar() {

  return (
    <>
      <div class="shadow sidebar-scroll sticky-top zindex99 mt-3" style={{ overflow: 'auto',width:'220px',zIndex:99999,position:"fixed",left:0,top:60 }}>
        <ul class="sidebar-list-items" id="menu">
          <li class="sidebar-list-item pt-4 cursor-pointer">
            <Link to="/" class="nav-link align-middle px-2 nav-item">
              <HiUserGroup size={20} style={{marginBottom:'5px'}}/>
              <span class="ms-1 d-none d-sm-inline link-text text-black px-1">kProcess</span>
            </Link>
          </li>
          <li class="sidebar-list-item pt-4 cursor-pointer">
            <Link to="/sustainability" class="nav-link align-middle px-2 nav-item">
             <VscFileSymlinkDirectory size={20}/>
              <span class="ms-1 d-none d-sm-inline link-text px-1">Sustainability</span>
            </Link>
          </li>
          {/* <li class="sidebar-list-item pt-4 cursor-pointer">
            <Link to="/resilience" class="nav-link align-middle px-2 nav-item">
             <FaFileContract size={20}/>
              <span class="ms-1 d-none d-sm-inline link-text px-1">Resilience</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
