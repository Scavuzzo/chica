// import NumberFormat from 'react-number-format';

import { DateTime } from 'luxon';
import  NumberFormat  from 'react-number-format';

export function formatCurrency(value: number): JSX.Element {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
}

export function formatDateString<T>(
  data: T,
  key: keyof T,
  format = 'LLL dd, yyyy',
): string {
  const date = DateTime.fromISO(data[key].toString());
  return date.toFormat(format);
}
