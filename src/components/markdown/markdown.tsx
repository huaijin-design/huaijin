import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import Refractor from 'react-refractor';
import 'refractor';

const MarkdownCode = ({ children: { props: { className, children } } }: any) => {
  const language = className.split('-')[1];
  return (
    <Refractor
      className="hj-markdown"
      language={language}
      value={children}
    />
  );
};

export interface MarkdownProps {
  children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <MarkdownBase
      options={{
        overrides: {
          pre: {
            component: MarkdownCode,
          },
        },
      }}
      children={children}
    />
  );
};

export default Markdown;
