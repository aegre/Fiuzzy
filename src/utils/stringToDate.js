import moment from 'moment';
/**
 * Receives a string and return the converted string in a date
 * @param {string} dateStr
 */
const stringToDate = (dateStr) => {
  const result = moment(
    `${dateStr} +00:00`,
    'DD-MM-YYYY[T]H:m Z',
  );

  return result.toDate();
};

export default stringToDate;
