import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownTable: React.FunctionComponent = ({ children }: any): React.ReactElement => {
  const TableStyled = styled.table`
    border-spacing: 0;
    border-collapse: collapse;
    margin: 1.2em auto;
    padding: 0;
    display: block;
    overflow-x: auto;
    td, th {
      line-height: 1.5em;
      padding: 0.4em 0.8em;
      border: 1px solid #ddd;
    }
    th, tr:nth-of-type(2n) {
      background-color: #f8f8f8;
    }
  `;
  return (
    <TableStyled className="hj-markdown-table">
      {children}
    </TableStyled>
  );
};

export default MarkdownTable;
