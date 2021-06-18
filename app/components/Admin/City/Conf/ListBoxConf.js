import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-bottom: 7px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  margin-left: -5px;
`;

const TableTR = styled.tr`
  width: 100%;
  border-bottom: 1px solid #f3f3f4;
  height: 30px;
`;

const TableTDLeft = styled.td`
  float: left;
  color: #42b549;
`;

const TableTDRight = styled.td`
  float: right;
`;

const ListBoxConf = props => (
  <Container>
    <Table>
      <tbody>
        <TableTR>
          <TableTDLeft>
            {props.data.countryRegion
              .split(', ')
              .reverse()
              .join(' ')}{' '}
            {props.toggleProvinceState(
              props.data.provinceState,
              props.data.countryRegion,
            )}
          </TableTDLeft>
          <TableTDRight>
            <NumberFormat
              thousandSeparator
              displayType="text"
              value={props.data.confirmed}
            />
          </TableTDRight>
        </TableTR>
      </tbody>
    </Table>
  </Container>
);

ListBoxConf.propTypes = {
  data: PropTypes.object,
  toggleProvinceState: PropTypes.func,
};

export default ListBoxConf;
