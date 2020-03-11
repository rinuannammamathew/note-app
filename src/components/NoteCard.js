import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    const { note } = this.props;

    return (
      <div className="note-card-container">
        <div className="note-card-title">
         {note.title}
        </div>
        <div className="note-card-content">
          {note.content} 
        </div>
        <span className="note-card-delete">
          <i className="material-icons">Close</i>
        </span>
        <span className="note-card-edit">
          <i className="maretial-icons">mode-edit</i>
        </span>
      </div>
    );
  }
}

export default NoteCard;