import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { AiFillHome, AiFillPlusSquare } from 'react-icons/ai';
import { VscChromeClose} from 'react-icons/vsc';

function Navigation({logout, name}) {
  return (
    <nav>
      <Link to="/">
        <AiFillHome />
      </Link>
      <Link to="/notes/add">
        <AiFillPlusSquare />
      </Link>
      <button onClick={logout}>{name}
       <VscChromeClose />
       </button>
    </nav>
  );
}

Navigation.propTypes ={
  logout: Proptypes.func.isRequired,
  name: Proptypes.string.isRequired,
}

export default Navigation;
