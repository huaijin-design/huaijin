import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownA = ({ children, ...rest }: any) => {
  const AStyled: any = styled.a`
    color: #42b983;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <AStyled
      className="hj-markdown-a"
      children={children}
      {...rest}
    />
  );
};

export default MarkdownA;
