import { ReactNode, forwardRef } from 'react';

import { ButtonProps } from '../../../Button';
import { DateCalendarButtonTooltip } from '../DateCalendarButtonTooltip';

import { DateCalendarBtnWrapper } from './styles';

export type DateCalendarButtonProps = Omit<ButtonProps, 'variant'> & {
  title?: string;
  children: ReactNode;
};

export const DateCalendarButton = forwardRef<
  HTMLButtonElement,
  DateCalendarButtonProps
>(({ title = '', disabled, selected, ...props }, ref) => (
  <DateCalendarButtonTooltip title={title} isActive={!disabled}>
    <DateCalendarBtnWrapper
      ref={ref}
      variant={selected ? 'contained' : 'text'}
      aria-selected={selected}
      disabled={disabled}
      {...props}
    />
  </DateCalendarButtonTooltip>
));