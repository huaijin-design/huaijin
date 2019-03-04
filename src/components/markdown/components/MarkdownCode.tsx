import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownCode = ({ children }: any) => {
  const CodeStyled: any = styled.code`
    background-color: #f8f8f8;
    border-radius: 3px;
    font-size: .85em;
    margin: 0;
    padding: .2em .4em;
  `;
  return (
    <CodeStyled
      className="hj-markdown-code"
      children={children}
    />
  );
};

export default MarkdownCode;
