
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header';
import Reports from './components/tabs/Reports';
import './App.css';
import { useState } from 'react';

function App() {
  const [navActive, setNavActive] = useState('reports')
  const [menu, setMenu] = useState(false)

  const clickedNav = (nav)=>{
    setNavActive(nav)
  }
  const toggleMenu = ()=>{
    setMenu(!menu)
  }

  const RenderTab = ()=>{
    if(navActive === "overview"){
      return <div>OVERVIEW COMPONENT</div>
    }
    if(navActive === "policy"){
      return <div>POLICY COMPONENT</div>
    }
    if(navActive === "reports"){
      return <Reports/>
    }
    if(navActive === "company"){
      return <div>COMPANY COMPONENT</div>
    }
    if(navActive === "userAccount"){
      return <div>USER ACCOUNTS COMPONENT</div>
    }
    if(navActive === "history"){
      return <div>HISTORY COMPONENT</div>
    }


  }

  return (
    <div className="App">
      <div className="app-con">
        
        <div className="dashboard">
          <Sidebar menu={menu} navActive={navActive} clickedNav={clickedNav} />
          <div className="main">
           <Header navActive={navActive} menuClicked={toggleMenu} clickedNav={clickedNav}/>
           <div className="dashboard__content">
             
             {RenderTab()}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
