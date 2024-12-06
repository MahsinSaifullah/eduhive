'use client';

import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from 'react';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = React.useState<View>(Views.WORK_WEEK);
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['work_week', 'day']}
      view={view}
      style={{ height: '98%' }}
      onView={setView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 18, 0, 0)}
    />
  );
};

export default BigCalendar;