import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import markdownPre from './components/markdownPre';
import markdownCode from './components/markdownCode';
import markdownTable from './components/markdownTable';
import markdownBlockquote from './components/markdownBlockquote';
import markdownA from './components/markdownA';

export interface MarkdownProps {
  children: string;
  className?: string;
  overrides: any;
}

const Markdown = ({ className, children, overrides }: MarkdownProps) => {
  const classes = ['hj-markdown', className].filter((v) => v).join(' ');
  return (
    <MarkdownBase
      className={classes}
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
          a: {
            component: markdownA,
          },
          ...overrides,
        },
      }}
      children={children}
    />
  );
};

export default Markdown;
