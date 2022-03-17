import React from 'react';


const addCardField = props => {
  return (
    <form onSubmit={createUpdateCard}>
      <input // input is inline
        className="flashcardForm"
        value={newFrontText}
        onChange={e => newFrontTextAC(e.target.value)}
      />
      <input
        className="flashcardForm"
        value={newBackText}
        onChange={e => newBackTextAC(e.target.value)}
      />
      <button className="submitButton" type="submit">'Submit'</button>
    </form>
  )
}


export default addCardField;
