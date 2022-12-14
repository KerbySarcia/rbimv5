import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/MobileNavbar.css";
import { Link } from "react-router-dom";
import Modal from './SettingsModal'
import Logout from './Logout'

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logOut, setlogOut] = useState(false);

  const [accounts, setAccounts] = useState(false);
  const [isAdmin, setIsAdmin] = useState();

  const isLoggedIn = useSelector((state) => state.sessionRecord.login);

  useEffect(() => {
    if(isLoggedIn){
      const items = JSON.parse(sessionStorage.getItem('dataKey'))
      setIsAdmin(items.access_lvl)
    } 
  }, [isLoggedIn])


  return (
    <div className="MobileNavbar">
      <div className="" onClick={() => setIsClicked((prevValue) => !prevValue)}>
        <MenuIcon className="MobileNavbar__icon" />
      </div>
      <h3 className="MobileNavbar__title">RBIM</h3>
      <div
        // TODO: when overlay clicked close sidemenu
        className={`SlideMenu ${isClicked ? "SlideMenu-show" : ""} `}>
        <div className="SlideMenu__links">
          <div className="SlideMenu__links__link">
            <Link to="/" onClick={() => setIsClicked((prevValue) => !prevValue)}>
              <h3 className="SlideMenu__link">Home</h3>
            </Link>
            <Link to="/individual-records" onClick={() => setIsClicked((prevValue) => !prevValue)}>
              <h3 className="SlideMenu__link">Individual Record</h3>
            </Link>
            <Link to="/household-record" onClick={() => setIsClicked((prevValue) => !prevValue)}>
              <h3 className="SlideMenu__link">Household Record</h3>
            </Link>
            <Link to="/reports" onClick={() => setIsClicked((prevValue) => !prevValue)}>
              <h3 className="SlideMenu__link">Reports</h3>
            </Link>
          </div>

          <div className="SlideMenu__links__link-bottom">
            <h3 className="SlideMenu__link">Account</h3>
            <button
              className="SlideMenu__btn"
              onClick={()=> {
                setlogOut(true)
              }}>
              <h3 className="SlideMenu__link">Logout</h3>
            </button>
            <button 
              className="SlideMenu__btn" 
              onClick={() => {
                setIsOpen(true)
                setIsClicked(false)
              }}>
              <h3 className="SlideMenu__link">Settings</h3>
            </button>
            <Modal open={isOpen} onClose={() => {
              setIsOpen(false)
              setIsClicked(false)
            }} />
            <Logout open={logOut} onClose={() => setlogOut(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
