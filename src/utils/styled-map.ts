import styledMap from 'styled-map';

const dotProp = (str: string, obj: any) => str
  .split('.')
  .reduce((acc, key) => acc[key], obj);

export const mapTheme = (keyOrProp: string, key?: string, callback?: any) => (props: any) => {
  if (keyOrProp.includes('.')) {
    const dot = dotProp(keyOrProp, props.theme);
    if (typeof dot === 'string') {
      return dotProp(keyOrProp, props.theme);
    }
    return styledMap(dot);
  } else if (key) {
    const dot = dotProp(key, props.theme);
    if (callback) {
      console.log(dot[props[keyOrProp]]);
      return callback(dot[props[keyOrProp]]);
    }
    return styledMap(keyOrProp, dot);
  }
};

export default styledMap;
