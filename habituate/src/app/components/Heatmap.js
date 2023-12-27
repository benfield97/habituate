// components/Heatmap.js

import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { addDays } from 'date-fns';

const Heatmap = ({ startDate, numDays, values }) => {
  // Calculate the end date based on the start date and the number of days
  const endDate = addDays(startDate, numDays - 1);

  // Function to format tooltip data
  const tooltipDataAttrs = (value) => {
    if (value && value.date) {
      return {
        'data-tip': `${value.date.toISOString().slice(0, 10)}: ${value.count} commits`,
      };
    } else {
      return {
        'data-tip': 'No commits on this day',
      };
    }
  };

  // Function to determine the color of the cell based on the count
  const classForValue = (value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-github-${value.count}`;
  };

  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      values={values}
      classForValue={classForValue}
      tooltipDataAttrs={tooltipDataAttrs}
      showWeekdayLabels
      showMonthLabels
      gutterSize={3}
    />
  );
};

export default Heatmap;