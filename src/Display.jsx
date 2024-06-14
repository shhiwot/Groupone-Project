import React, { Component } from 'react';
import DispalyCard from './DispalyCard';
class Display extends Component {
  render() {
    return (
      <div>
        <DispalyCard
          silver
          fullname={"Adane Dane"}
          state="california"
          country="USA"
          district="5th"
        />
        <DispalyCard
          tomato
          fullname=" Mignot x"
          state="california"
          country="USA"
          district="11th"
        />
        <DispalyCard
          silver
          fullname="Usman Mohamed"
          state="california"
          country="USA"
          district="8th"
        />
        <DispalyCard
          tomato
          fullname="Hiwot s"
          state="california"
          country="USA"
          district="8th"
        />
        <DispalyCard
          silver
          fullname="Tesfaye Lule"
          state="california"
          country="USA"
          district="11th"
        />
      </div>
    );
  }
}

export default Display;
