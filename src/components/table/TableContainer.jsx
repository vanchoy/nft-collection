import styled from 'styled-components';
import '../../styles/table.scss';

const TableContainerStyle = styled.div`
  --table-container-width: ${(props) => props.tableWidth};
  --table-container-max_height: ${(props) => props.tableMaxHeight};
  --table-container-border: 2px solid ${(props) => props.tableHeaderColor};
  --table-container-border_radius: 3px;

  --table-box-width: 100%;
  --table-box-margin: 0 auto;

  --table-header-bg_color: ${(props) => props.tableHeaderColor};
  --table-header-text-color: ${(props) => props.tableHeaderTextColor};

  /* For more table settings go to ["styles/table.scss"] */
`;

const TableContainer = (props) => {

  return (
    <TableContainerStyle 
      className="table-container"
      tableWidth={props.tableWidth}
      tableMaxHeight={props.tableMaxHeight}
      tableHeaderColor={props.tableHeaderColor}
      tableHeaderTextColor={props.tableHeaderTextColor}
    >
      <table>
        <thead>
          <tr className="header-row">
            {props.tableHeaders}
          </tr>
        </thead>
        <tbody>
          {props.tableInfo}
        </tbody>
      </table>
    </TableContainerStyle> 
  );
};

export default TableContainer;