interface Theme {
  buttonDefaultFontSize: string;
  buttonDefaultColor: string;
  buttonDefaultBackground: string;

  buttonPrimaryFontSize: string;
  buttonPrimaryColor: string;
  buttonPrimaryBackground: string;
}

declare interface themeProps {
  theme: Theme;
}
