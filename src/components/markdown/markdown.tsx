import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import Refractor from 'react-refractor';
import jsx from 'refractor/lang/jsx';

const MarkdownCode = ({ children }: any) => {
  Refractor.registerLanguage(jsx);
  return (
    <Refractor
      className="hj-markdown"
      language="jsx"
      value={children.props.children}
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
