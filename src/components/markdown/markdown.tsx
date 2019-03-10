import * as React from 'react';
import MarkdownBase from 'markdown-to-jsx';
import { MarkdownPre, MarkdownCode, MarkdownTable, MarkdownBlockquote, MarkdownA } from './components';

export interface MarkdownProps {
  children: string;
  className?: string;
  overrides?: object;
}

const Markdown: React.FunctionComponent<MarkdownProps> = ({ className, children, overrides }: MarkdownProps): React.ReactElement => {
  const classes = ['hj-markdown', className].filter((v) => v).join(' ');
  return (
    <div className={classes}>
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
    </div>
  );
};

export default Markdown;
