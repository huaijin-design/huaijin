import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import MarkdownPre from './components/markdownPre';
import MarkdownCode from './components/markdownCode';
import MarkdownTable from './components/markdownTable';
import MarkdownBlockquote from './components/markdownBlockquote';
import MarkdownA from './components/markdownA';

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
            component: MarkdownTable,
          },
          pre: {
            component: MarkdownPre,
          },
          code: {
            component: MarkdownCode,
          },
          blockquote: {
            component: MarkdownBlockquote,
          },
          a: {
            component: MarkdownA,
          },
          ...overrides,
        },
      }}
      children={children}
    />
  );
};

export default Markdown;
