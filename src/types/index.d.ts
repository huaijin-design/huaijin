declare module 'markdown-to-jsx';

declare module 'react-refractor';

declare module 'refractor';

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
