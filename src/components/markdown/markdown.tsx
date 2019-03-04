import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import markdownPre from './components/markdownPre';
import markdownCode from './components/markdownCode';
import markdownTable from './components/markdownTable';
import markdownBlockquote from './components/markdownBlockquote';

export interface MarkdownProps {
  children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <MarkdownBase
      className="hj-markdown"
      options={{
        overrides: {
          table: {
            component: markdownTable,
          },
          pre: {
            component: markdownPre,
          },
          code: {
            component: markdownCode,
          },
          blockquote: {
            component: markdownBlockquote,
          },
        },
      }}
      children={children}
    />
  );
};

export default Markdown;
