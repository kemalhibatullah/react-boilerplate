import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-bottom: 7px;
  width: 100%;
`;

const Sparator = styled.div`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  margin-left: -5px;
`;

const TableTR = styled.tr`
  width: 100%;
`;

const TableTDLeft = styled.td`
  float: left;
`;

const TableTDRight = styled.td`
  float: right;
`;

const ListBox = props => (
  <Container>
    <Table>
      <tbody>
        <TableTR>
          <TableTDLeft>
            {props.showOrder(props.data.countryRegion, props.index)}.&nbsp;
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
    {props.index + 1 === 7 ? <Sparator>. . .</Sparator> : ''}
  </Container>
);

ListBox.propTypes = {
  showOrder: PropTypes.func,
  data: PropTypes.object,
  index: PropTypes.number,
  toggleProvinceState: PropTypes.func,
};

export default ListBox;
