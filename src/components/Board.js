import React, { Component } from 'react';
import Cell from './Cell'
import '../board.css'

const genres = ["Short story", "Realistic fiction", "Mystery", "Fantasy", "Essay", "Western", "Metafiction", "Fable", "Fanfiction", "Mythopoeia", "Horror", "Science fiction", "Tall tale", "Narrative nonfiction", "Classic", "Humor", "Speech", "Fairy tale", "Crime/Detective", "Historical fiction", "Fiction in verse", "Legend", "Mythology", "Folklore", "Textbook"]

class Board extends Component {
  constructor() {
    super();
    // this.createCell = this.createCell.bind(this);
  }

  createCell(genre) {
    return <Cell genre={genre} />
  }

  render() {
    return (
      <div className="Board">
        {genres.map((genre) => this.createCell(genre))}
      </div>
    );
  }
}

export default Board;
