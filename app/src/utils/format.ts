import {format, parseISO} from 'date-fns';

export const capitalize = (text: string) => {
  let _text: string = '';

  if (text === text.toUpperCase()) {
    _text = text.toLowerCase();
  }

  return _text.charAt(0).toUpperCase() + _text.slice(1);
};

export const formatDate = (date: string) => {
  const parseDate = parseISO(date);
  const currentDate = format(new Date(), 'dd/MM/yyyy');

  let day = format(parseDate, 'dd/MM/yyy');
  let time = format(parseDate, "H':'mm");

  day = currentDate === day ? 'Today' : day;

  return `${day} at ${time}`;
};
