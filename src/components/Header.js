import React from 'react';

const Header = (props) => { 
  // console.log(props) This was too see a property of the Header
  return  (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Tasks: { props.totalTask }</span>
    </header>

  );
}


export default Header;