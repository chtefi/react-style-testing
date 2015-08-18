import React from 'react';
import { add } from 'react-style-testing';
import times from 'lodash/utility/times';

const NB_ROWS = 1000;

const createOneNoStyleRow = () => {
  return (<tr>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
      <td>my.email@example.com</td>
    </tr>);
};

export default class AppCss extends React.Component {
  componentDidMount() {
    console.timeEnd('didMount');
  }
  render() {
    console.time('render');
    console.time('didMount');
    requestAnimationFrame(function() {
      console.timeEnd('render');
    })
    const noStyleRows = times(NB_ROWS, createOneNoStyleRow);    
    return (
      <table className="tableCss">
        <tbody>
          {noStyleRows}
        </tbody>
      </table>
    );
  }
}
