import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownA: React.FunctionComponent = (props): React.ReactElement => {
  const AStyled = styled.a`
    color: #42b983;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <AStyled
      className="hj-markdown-a"
      {...props}
    />
  );
};

export default MarkdownA;
