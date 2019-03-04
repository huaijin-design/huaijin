import { css } from '@emotion/core';

const markdownCodeStyle = css`
code[class*="language-"] {
  color: #525252;
  background: none;
  font-family: Operator Mono Lig;
  font-size: 16px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 8;
  hyphens: none;
}

/* Code blocks */
pre[class*="hj-markdown"] {
  /* background-color: #f6f8fa; */
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
  word-wrap: normal;
  word-break: normal;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}
/* comment */
.token.comment,
.token.blockquote {
  color: #b3b3b3;
}

.token.cdata {
  color: #183691;
}
/* punctuation */
.token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property {
  color: #525252;
}
/* keyword */
.token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin {
  color: #e96900;
}
/* string */
.token.string,
.token.url,
.token.regex,
.token.attr-value {
  color: #42b983;
}
/* number boolean */
.token.property,
.token.number,
.token.boolean,
.token.entity,
.token.atrule,
.token.constant,
.token.symbol,
.token.command,
.token.code {
  color: #ae81ff;
}
/* tag */
.token.tag,
.token.selector,
.token.prolog {
  color: #f44336;
}
/* function */
.token.function,
.token.namespace,
.token.pseudo-element,
.token.class,
.token.class-name,
.token.pseudo-class,
.token.id,
.token.url-reference .token.variable,
.token.attr-name {
  color: #0092db;
}

.token.entity {
  cursor: help;
}

.token.title,
.token.title .token.punctuation {
  font-weight: bold;
  color: #1d3e81;
}

.token.list {
  color: #ed6a43;
}

.token.inserted {
  background-color: #eaffea;
  color: #55a532;
}

.token.deleted {
  background-color: #ffecec;
  color: #bd2c00;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}


/* JSON */
.language-json .token.property {
  color: #183691;
}

.language-markup .token.tag .token.punctuation {
  color: #525252;
}

/* CSS */
code.language-css,
.language-css .token.function {
  color: #0086b3;
}

/* YAML */
.language-yaml .token.atrule {
  color: #63a35c;
}

code.language-yaml {
  color: #183691;
}

/* Ruby */
.language-ruby .token.function {
  color: #525252;
}

/* Markdown */
.language-markdown .token.url {
  color: #795da3;
}

/* Makefile */
.language-makefile .token.symbol {
  color: #795da3;
}

.language-makefile .token.variable {
  color: #183691;
}

.language-makefile .token.builtin {
  color: #0086b3;
}

/* Bash */
.language-bash .token.keyword {
  color: #0086b3;
}
`;

export default markdownCodeStyle;
