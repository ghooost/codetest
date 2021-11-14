/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import './styles.css';
import filterIco from './img/filter.svg';

import 'react-datepicker/dist/react-datepicker.css';
import { DateSelector } from '../DateSelector';
import { mixToDateOrNull } from '../../utils/transform';

export type FilterProps = {
  timeStampFrom: number | null;
  timeStampTo: number | null;
  onApply: (
    timeStampFrom: number | null,
    timeStampTo: number | null,
  ) => void;
}

export const Filter: FC<FilterProps> = (props) => {
  const {
    timeStampFrom, timeStampTo, onApply,
  } = props;

  const [dateFrom, setDateFrom] = useState(mixToDateOrNull(timeStampFrom));
  useEffect(() => {
    setDateFrom(mixToDateOrNull(timeStampFrom));
  }, [timeStampFrom]);
  const handleDateFromChange = useCallback((value) => {
    setDateFrom(value);
  }, [setDateFrom]);

  const [dateTo, setDateTo] = useState(mixToDateOrNull(timeStampTo));
  useEffect(() => {
    setDateTo(mixToDateOrNull(timeStampTo));
  }, [timeStampTo]);
  const handleDateToChange = useCallback((value) => {
    setDateTo(value);
  }, [setDateTo]);

  const handleApply = useCallback(() => {
    onApply(
      dateFrom !== null ? dateFrom.getTime() : null,
      dateTo !== null ? dateTo.getTime() : null,
    );
  }, [onApply, dateFrom, dateTo]);

  const handleClear = useCallback(() => {
    setDateFrom(null);
    setDateTo(null);
    onApply(null, null);
  }, [onApply]);

  const visibleCheckId = 'filterOpenCheck';
  return (
    <div className="filter">
      <label htmlFor={visibleCheckId} className="filter-button-open">
        <img src={filterIco} alt="" />
        <span>Filter</span>
      </label>
      <input type="checkbox" id={visibleCheckId} className="filter-open-control" />
      <div className="filter-panel">
        <div className="filter-panel-date-holder">
          <DateSelector
            onChange={handleDateFromChange}
            timeStamp={dateFrom}
            placeholder="From"
          />
        </div>
        <div className="filter-panel-date-holder">
          <DateSelector
            onChange={handleDateToChange}
            timeStamp={dateTo}
            placeholder="To"
          />

        </div>
        <button
          type="button"
          onClick={handleApply}
          className="filter-button filter-button-apply"
        >
          Apply filters
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="filter-button filter-button-clear"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};
