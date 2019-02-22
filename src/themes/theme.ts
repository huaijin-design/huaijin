import { fonts, colors } from './variable';

export const buttonDefaultTheme = {
  color: {
    button: {
      default: colors.dark,
      primary: colors.white,
    },
  },
  background: {
    button: {
      default: colors.default,
      primary: colors.primary,
    },
  },
  fontSize: {
    button: fonts.size,
  },
  shadow: {
    button: {
      default: colors.shadow,
      primary: colors.primary,
    },
  },
};

export interface Theme {
  color: any;
  background: any;
  fontSize: any;
  shadow: any;
}

export const defaultTheme: Theme = {
  ...buttonDefaultTheme,
};
