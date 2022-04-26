import React from 'react'
import {FaSlidersH} from 'react-icons/fa'
function Header({navActive, clickedNav, menuClicked}) {
  
  return (
    <div className="main__header">
      <FaSlidersH className='menu-icon' onClick={menuClicked}/>
      <ul>
        <li onClick={() => clickedNav("overview")} className={`header-link ${navActive === 'overview' ? 'link-active' : ''}`}>Overview
        <div> </div>
        </li>
        <li onClick={() => clickedNav("policy")} className={`header-link ${navActive === 'policy' ? 'link-active' : ''}`}>Policy
        <div> </div>
        </li>
        <li onClick={() => clickedNav("reports")} className={`header-link ${navActive === 'reports' ? 'link-active' : ''}`}>
          Reports
          <div> </div>
        </li>
      </ul>
    </div>
  )
}

export default Header