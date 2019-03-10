import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownCode: React.FunctionComponent = ({ children }: any): React.ReactElement => {
  const CodeStyled: any = styled.code`
    background-color: #f8f8f8;
    border-radius: 3px;
    font-size: .85em;
    margin: 0;
    padding: .2em .4em;
  `;
  return (
    <CodeStyled className="hj-markdown-code">
      {children}
    </CodeStyled>
  );
};

export default MarkdownCode;
