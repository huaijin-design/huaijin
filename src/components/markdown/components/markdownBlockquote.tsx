import * as React from 'react';
import styled from '@emotion/styled';

const MarkdownBlockquote: React.FunctionComponent = ({ children }: any): React.ReactElement => {
  const BlockquoteStyled = styled.blockquote`
    padding: 1px 1.5em;
    margin: 1em 0;
    border-left: .4em solid #42b983;
  `;
  return (
    <BlockquoteStyled className="hj-markdown-blockquote">
      {children}
    </BlockquoteStyled>
  );
};

export default MarkdownBlockquote;
