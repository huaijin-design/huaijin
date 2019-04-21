import styled, { variable } from '../../themes/theme';

interface InputControlProps {
  fullWidth?: boolean;
}

interface InputFieldProps {
  isFocused: boolean;
  value?: string | number | string[];
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

export const InputControl = styled.div<InputControlProps>`
  label: hj-input-control;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '200px')};
  display: flex;
  flex-direction: column;
  padding-top: 12px;
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
    transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
    border-bottom: 2px solid ${variable('color-dark', true, 0.58)};
    ${({ disabled }) =>
      disabled &&
      `
      ${variable('color-disabled', 'border-bottom-color')}
      border-bottom-style: dotted;
    `}
  }
  &:hover {
    &::before {
      border-color: ${({ disabled }) =>
        !disabled && variable('color-dark', true, 0.28)};
    }
    & > label {
      color: ${({ isFocused, error, disabled }) =>
        !isFocused &&
        !error &&
        !disabled &&
        variable('color-dark', true, 0.28)};
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: scale3d(${({ isFocused }) => (isFocused ? 1 : 0)}, 1, 1);
    border-bottom: 2px solid ${variable('color-primary', true)};
    ${({ error }) =>
      error &&
      `
      transform: scale3d(1, 1, 1);
      ${variable('color-danger', 'border-color')}
    `}
  }
`;

export const InputLabel = styled.label<InputFieldProps>`
  label: hj-input-label;
  max-width: 90%;
  font-size: 16px;
  position: absolute;
  left: 0;
  top: 6px;
  z-index: -1;
  transform-origin: top left;
  transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
  color: ${({ isFocused, error }) =>
    isFocused && !error
      ? variable('color-primary', true)
      : variable('color-dark', true, 0.58)};
  ${({ isFocused, value, placeholder }) =>
    (isFocused || value || placeholder) &&
    'transform: scale(0.75) translate3d(0, -24px, 0);'};

  ${({ error }) => error && variable('color-danger', 'color')}
  ${({ disabled }) => disabled && variable('color-disabled', 'color')}
`;

export const InputBase = styled.input`
  label: hj-input-base;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 8px 0 8px;
`;

export const TextAreaBase = styled.textarea`
  label: hj-textarea-base;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 8px 0 8px;
  resize: vertical;
  min-height: 32px;
`;
