import React, { FC, useCallback } from 'react';
import DatePicker from 'react-datepicker';

import './styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIco from './img/calendar.svg';

export type DateSelectorProps = {
    timeStamp: Date | null;
    placeholder: string;
    onChange: (timeStamp: number | null) => void;
  }

export const DateSelector: FC<DateSelectorProps> = (props) => {
  const {
    timeStamp, placeholder, onChange,
  } = props;

  const dateValue = timeStamp !== null
    ? new Date(timeStamp)
    : null;

  const handleDateChange = useCallback((value) => {
    onChange(value);
  }, [onChange]);

  return (
    <div className="date-selector">
      <DatePicker
        selected={dateValue}
        dateFormat="dd-MM-yyyy"
        placeholderText={placeholder}
        className="date-selector-input"
        onChange={handleDateChange}
      />
      <img src={calendarIco} alt="" className="date-selector-icon" />
    </div>
  );
};
