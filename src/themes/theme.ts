import styled, { CreateStyled } from '@emotion/styled';
import { em as emBase } from 'polished';
import { fonts, colors } from './variable';

export const defaultTheme = {
  fontSize: {
    small: fonts.size.small,
    default: fonts.size.default,
    large: fonts.size.large,
  },
  fontFamily: fonts.family.body,
  color: {
    white: colors.white,
    grey: colors.grey,
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    dark: colors.dark,
  },
};

export interface Theme {
  fontSize: {
    small: string;
    default: string;
    large: string;
  };
  fontFamily: string;
  color: {
    white: string;
    grey: string;
    primary: string;
    success: string;
    warning: string;
    danger: string;
    dark: string;
  };
}

export const em = (pxval: string | number): string =>
  emBase(pxval, defaultTheme.fontSize.default);

export default styled as CreateStyled<Theme>;
