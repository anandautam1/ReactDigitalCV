/**
*
* TableSeries
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

//import { Table } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TableSeries extends React.Component { 
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    const headings = ['Alias', 'Subject Name', 'Grade'];
    let tableHead = headings.map(n => {
      return (
        <TableCell>{n}</TableCell> 
      ); }
    );

    tableHead = (
    <tr>
        {tableHead}
    </tr>);

    var tableData = this.props.data;
    var tableBody = tableData.map(n => {
      return (
        <TableRow key={n.alias}>
          <TableCell numeric> {n.alias} </TableCell>
          <TableCell> {n.name} </TableCell>
          <TableCell numeric> {n.result} </TableCell>
        </TableRow>
      ); }
    );

    return (
      <div>
        <Paper> 
          <Table responsive>
              <TableHead>
                <TableRow>
                  <TableCell numeric> Alias</TableCell>
                  <TableCell > Subject Name</TableCell>
                  <TableCell numeric> Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableBody}
              </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

TableSeries.propTypes = {
  title: PropTypes.title,
  data: PropTypes.array,
};

export default TableSeries;
