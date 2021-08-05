import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <div className="header-container">
           <div className="title">
               <h2>KEYWORDS</h2>
           </div>
           <div className="search-user">
               <div className="search-box">
                    <form action="">
                        <input type="text" />
                        <button type="submit">Submit -) </button>
                    </form>
               </div>
               <div className="user-round">
                    <p>A</p>
               </div>
           </div>
       </div>
    );
};

export default Header;