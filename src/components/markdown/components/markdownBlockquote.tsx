import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownBlockquote = ({ children }: any) => {
  const BlockquoteStyled: any = styled.blockquote`
    padding: 1px 1.5em;
    margin: 1em 0;
    border-left: .4em solid #42b983;
  `;
  return (
    <BlockquoteStyled
      className="hj-markdown-blockquote"
      children={children}
    />
  );
};

export default MarkdownBlockquote;
