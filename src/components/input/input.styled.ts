import { transparentize } from 'polished';
import styled from '../../themes/theme';

interface InputFieldProps {
  isFocused: boolean;
  value?: string;
  placeholder?: string;
}

export const InputControl = styled.div`
  label: hj-input-control;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.div<InputFieldProps>`
  label: hj-input-field;
  flex: 1 1 auto;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    border-bottom: 2px solid
      ${({ theme }) => transparentize(0.58, theme.color.dark)};
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: scaleX(${({ isFocused }) => (isFocused ? 1 : 0)});
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

export const InputLabel = styled.label<InputFieldProps>`
  label: hj-input-label;
  max-width: 90%;
  font-size: 16px;
  position: absolute;
  left: 0;
  top: 6px;
  transform-origin: top left;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.color.primary : transparentize(0.58, theme.color.dark)};
  ${({ isFocused, value, placeholder }) =>
    (isFocused || value || placeholder) &&
    'transform: scale(0.75) translate3d(0, -18px, 0);'}
`;

export const InputBase = styled.input`
  label: hj-input-base;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 8px 0 8px;
`;
