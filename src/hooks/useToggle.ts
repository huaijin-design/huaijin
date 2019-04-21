import { Dispatch, SetStateAction, useState, useCallback } from 'react';

interface UseToggle {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  model: {
    value: boolean;
    onChange: (v: boolean) => void;
  };
  reset: () => void;
  toggle: () => void;
}

function useToggle(initialValue: boolean): UseToggle {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(v => {
    setValue(v);
  }, []);

  const reset = (): void => setValue(initialValue);

  const toggle = (): void => setValue(prev => !prev);

  return {
    value,
    setValue,
    model: {
      value,
      onChange,
    },
    reset,
    toggle,
  };
}

export default useToggle;
