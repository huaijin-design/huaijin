import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import MarkdownTable from './components/markdownTable';
import MarkdownPre from './components/markdownPre';
import MarkdownCode from './components/markdownCode';
import MarkdownBlockquote from './components/markdownBlockquote';
import MarkdownA from './components/markdownA';

export interface MarkdownProps {
  children: string;
  className?: string;
  overrides?: object;
}

const Markdown: React.FunctionComponent<MarkdownProps> = ({ className, children, overrides }: MarkdownProps): React.ReactElement => {
  const classes = ['hj-markdown', className].filter((v) => v).join(' ');
  return (
    <article className={classes}>
      <MarkdownBase
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
      >
        {children}
      </MarkdownBase>
    </article>
  );
};

export default Markdown;
