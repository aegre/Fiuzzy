/**
 * Receives a string and return the converted string in a date
 * @param {string} dateStr
 */
const stringToDate = (dateStr) => {
  const [dateSection, hourSection] = dateStr.split('T');
  const [day, month, year] = dateSection.split('-');
  const [hour, minutes] = hourSection.split(':');

  const hourInNumber = Number(hour);
  const minutesInNumber = Number(minutes);

  const result = new Date(`${year}-${month}-${day}T${hourInNumber < 10 ? `0${hourInNumber}` : hourInNumber}:${minutesInNumber < 10 ? `0${minutesInNumber}` : minutesInNumber}:00+0000`);

  return result;
};

export default stringToDate;
