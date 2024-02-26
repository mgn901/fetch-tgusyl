import React, { ChangeEventHandler, FC, ReactNode } from 'react';

interface ListItemWithCheckboxProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
}

const ListItemWithCheckbox: FC<ListItemWithCheckboxProps> = (props) => {
  const { checked, onChange, children } = props;
  return (
    <li>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange} />
        {children}
      </label>
    </li>
  );
};

export default ListItemWithCheckbox;
