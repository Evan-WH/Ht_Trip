import dayjs from 'dayjs';

export function formatMonthDate (date) {
  return dayjs(date).format("MM月DD日")
}

export function getDifDay (start, end) {
  const startDay = dayjs(start);
  const endDay = dayjs(end);
  return endDay.diff(startDay, 'day');
}