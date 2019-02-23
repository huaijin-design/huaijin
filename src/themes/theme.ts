import { fonts, colors } from './variable';

export const buttonDefaultTheme = {
  color: {
    button: {
      default: colors.dark,
      primary: colors.white,
      success: colors.white,
      warning: colors.white,
      danger: colors.white,
    },
  },
  background: {
    button: {
      default: colors.default,
      primary: colors.primary,
      success: colors.success,
      warning: colors.warning,
      danger: colors.danger,
    },
  },
  fontSize: {
    button: fonts.size,
  },
  shadow: {
    button: {
      default: colors.shadow,
      primary: colors.primary,
      success: colors.success,
      warning: colors.warning,
      danger: colors.danger,
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
