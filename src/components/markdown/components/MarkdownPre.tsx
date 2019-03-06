import * as React from 'react';
import styled from '@emotion/styled';
import Refractor from 'react-refractor';
import 'refractor';

const MarkdownPre = ({ children }: any): React.ReactElement => {
  const { props: { className, children: value } } = children;
  const language = className ? className.split('-')[1] : '';
  const RefractorStyled: any = styled(Refractor)`
    position: relative;
    &::before {
      content: "${language}";
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      position: absolute;
      top: 0;
      right: 0;
      color: #ccc;
      text-align: right;
      font-size: 0.8em;
      padding: 5px 10px 0;
      line-height: 16px;
      height: 16px;
    }
  `;
  return (
    <RefractorStyled
      className="hj-markdown-pre"
      language={language || 'js'}
      value={value}
    />
  );
};

export default MarkdownPre;
