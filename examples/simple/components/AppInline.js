import React from 'react';
import { add } from 'react-style-testing';
import times from 'lodash/utility/times';

const NB_ROWS = 1000;

const style = {
  fontFamily: 'Consolas',
  padding: 10,
  color: "#444",
  border: "3px solid orange",
  position: "relative",
  width: "15%",
  height: "25px",
  letterSpacing: 0,
  overflow: "hidden",
  fontSize: 10,
  fontVariant: "small-caps"
};

const TABLE_STYLE = {
  borderCollapse: 'collapse'
};

const odd = {
  background: "linear-gradient(to top, #ccc, #eee)"
};
const even = {
  background: "linear-gradient(to top, #eee, #ccc)"
};

const createOneInlineStyleRow = (i) => {
  return (<tr style={i % 2 === 0 ? even : odd}>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
      <td style={style}>my.email@example.com</td>
    </tr>);
};

export default class AppInline extends React.Component {
  componentDidMount() {
    console.timeEnd('didMount');
  }
  render() {
    console.time('render');
    console.time('didMount');
    requestAnimationFrame(function() {
      console.timeEnd('render');
    });
    const rows = times(NB_ROWS, createOneInlineStyleRow);   
    return (
      <table style={TABLE_STYLE}>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
