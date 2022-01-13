import React from 'react';

function Header(props){
    return(
        <header>
          <h1>{this.props.title}</h1>
          <h3>{this.props.desc}</h3>
        </header>
      );
  }
  export default Header;