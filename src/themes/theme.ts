import { fonts, colors } from './variable';

export const buttonDefaultTheme = {
  buttonDefaultFontSize: fonts.size,
  buttonDefaultColor: colors.dark,
  buttonDefaultBackground: colors.default,
  buttonPrimaryFontSize: fonts.size,
  buttonPrimaryColor: colors.white,
  buttonPrimaryBackground: colors.primary,
};

export interface Theme {
  buttonDefaultFontSize: string;
  buttonDefaultColor: string;
  buttonDefaultBackground: string;

  buttonPrimaryFontSize: string;
  buttonPrimaryColor: string;
  buttonPrimaryBackground: string;
}

export const defaultTheme: Theme = {
  ...buttonDefaultTheme,
};
