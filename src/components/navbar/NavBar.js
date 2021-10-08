import React from "react";
import { ContentPiller } from "./NoteCounter";

export const NavBar = ({ notes }) => {
  return (
    <div className="header">
      <h3>ReactKeep</h3>
      <ContentPiller notes={notes} />
    </div>
  );
};
