import React from 'react';

class Nav extends React.Component {
 render() {

    const {toggleNote, showNote} = this.props;

   return (
      <div className="nav-container">
        <div className = "nav-logo">
          Note
        </div>
        <div calssName = "nav-button" onClick = {() => toggleNote()} >
          {showNote? 'cancel' : '+Note'}
        </div>
      </div>
    );
  }
}

export default Nav;