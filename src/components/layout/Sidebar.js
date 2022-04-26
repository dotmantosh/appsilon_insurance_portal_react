import React from 'react'
import logo from '../../assets/imgs/logo.png';
import profileImg from '../../assets/imgs/profileimg.png'
import Overview from '../svgicons/Overview'
import Policy from '../svgicons/Policy'
import Reports from '../svgicons/Reports'
import Company from '../svgicons/Company'
import UserAccount from '../svgicons/UserAccount'
import UserReciet from '../svgicons/UserReciet'
import Logout from '../svgicons/Logout'

function Sidebar({menu, navActive, clickedNav, }) {
  
  return (
    <div className={`sidebar ${menu? 'sidebar-active': ''}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3 className='logo-name'>Insurance Portal</h3>
      </div>

      <div className="profile">
        <div className="profile-img-div">
          <img src={profileImg} alt="profileimg" />
        </div>
        <h3 className='profile__name'>Hello ! Rusalba Ruiz</h3>
        <p className='profile__wlc'>Welcome Back To Your Insurance Portal</p>
        <p className="profile__plan">Your Plan : <span className='free'>Free</span> </p>
        <button className='profile__create--btn'>Create New Plan <span className='creatspan'>+</span></button>
      </div>

      <div className="sidenav">
        <ul>
          <li onClick={() => clickedNav('overview')} className={`sidenav__item ${navActive === 'overview'? 'active': '' }`}>
            <Overview fill={navActive === 'overview'?'#713BDB' : '#A2A4B9'}/>
            <p>Overview</p>
          </li>
          <li onClick={() => clickedNav('policy')} className={`sidenav__item ${navActive === 'policy'? 'active': '' }`}>
            <Policy fill={navActive === 'policy'?'#713BDB' : "#A2A4B9"}/>
            <p>Policy</p>
          </li>
          <li onClick={() => clickedNav('reports')} className={`sidenav__item ${navActive === 'reports'? 'active': '' }`}>
            <Reports fill={navActive === 'reports'?'#713BDB' : '#A2A4B9'}/>
            <p>Reports</p>
          </li>
          <li onClick={() => clickedNav('company')} className={`sidenav__item ${navActive === 'company'? 'active': '' }`}>
            <Company fill={navActive === 'company'?'#713BDB' : '#A2A4B9'}/>
            <p>Company</p>
          </li>
          <li onClick={() => clickedNav('userAccount')} className={`sidenav__item ${navActive === 'userAccount'? 'active': '' }`}>
            <UserAccount fill={navActive === 'userAccount'?'#713BDB' : '#A2A4B9'}/>
            <p>User Account</p>
          </li>
          <li onClick={() => clickedNav('history')} className={`sidenav__item ${navActive === 'history'? 'active': '' }`}>
            <UserReciet fill={navActive === 'history'?'#713BDB' : '#A2A4B9'}/>
            <p>History</p>
          </li>
        </ul>
      </div>
      <div className="logout-div">
        <Logout/>
        <p className='logout'>Log Out</p>
      </div>
    </div>
  )
}

export default Sidebar