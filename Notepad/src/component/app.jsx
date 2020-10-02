import React from "react";
import Heading from "./heading";
import Note from "./note";
import notes from "../notes";

export default function App() {
  return (
    <div>
      <Heading />
      {notes.map((diffNotes) => (
        <Note title={diffNotes.title} content={diffNotes.content} />
      ))}
    </div>
  );
}
