import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import MarkdownPre from './components/MarkdownPre';
import MarkdownCode from './components/MarkdownCode';
import markdownTable from './components/markdownTable';

export interface MarkdownProps {
  children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <MarkdownBase
      className="hj-markdown"
      options={{
        overrides: {
          pre: {
            component: MarkdownPre,
          },
          table: {
            component: markdownTable,
          },
          code: {
            component: MarkdownCode,
          },
        },
      }}
      children={children}
    />
  );
};

export default Markdown;
