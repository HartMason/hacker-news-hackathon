import React from 'react';
import magnifyingGlass from '../magnifyingGlass.svg';
import cog from '../settings-cog.svg';

let HackerLogo = "https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png";

const headerStyles = {
  color: "black",
  backgroundColor: "#FF742B",
  display: "flex",
  // width: "85%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "57px",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Verdana, Geneva, sans-serif",
  fontSize: "14pt",
}

const searchInputStyles = {
  height: "42px",
  width: "44rem",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  zIndex: "0",
}

const searchDivStyles = {
  height: "42px",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}

const textStyles = {
  width: "6.5rem",
  color:"black", 
  marginTop:"0px",
  marginBottom:"2px",
  paddingBottom:"1px", 
  paddingTop:"0px",
  paddingRight:"0px",
  marginLeft:"0px",
  textAlign:"left"
}

const HeaderSearch = () => (
  <header style={headerStyles}>
    <div style={headerStyles}>
      <a href="https://news.ycombinator.com/">
        <img src={HackerLogo} style={{height:"48px"}} alt="hacker logo" />
      </a>
      <a href="https://hn.algolia.com/" style={{textDecorationLine: "none", marginRight: "5px", display:"flex", flexWrap:"wrap"}}>
        <p style={textStyles}>Search</p> <p style={textStyles}>Hacker News</p>
      </a>
      <div className='headerSearchContainer' style={searchInputStyles}>
        <span style={{position:"relative", top: "2px", left: "26px", zIndex: "1"}}>
          <img src={magnifyingGlass} style={{color:"#ff742b", width:"24px", height:"24px", overflow:"none"}} alt="magnifying glass" />
        </span>
        <input type="search" placeholder='Search stories by title, url or author' className="searchInput" style={searchInputStyles} />
      </div>
      <div style={{width:"10px"}}>
        <span style={{width:"7rem", display: "flex", justifyContent:"center", alignItems:"center", position:"relative", right:"150px", fontSize:"14px"}}>Search By
        <a href="https://www.algolia.com" target="blank">
          <img src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg" alt="algolia" style={{height: "14px", paddingLeft:"3px"}}/>
        </a>
        </span>
      </div>
      <div style={searchDivStyles}>
        <span style={{display:"flex", flexWrap:"nowrap", alignItems:"center", paddingRight:"5px"}}>
          <img src={cog} style={{height:"24px", padding:"2px"}}alt="settings cog" />
          Settings
        </span>
      </div>
    </div>
  </header>

)

export default HeaderSearch;