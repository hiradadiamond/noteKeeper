import React from "react";

export const ContentPiller = ({ notes }) => {
  return (
    <div>
      <div className='counterDiv'>{notes.length}</div>
    </div>
  );
};
