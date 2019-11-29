import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';

const formatDate = (date, dateFormat = 'MMMM dd, yyyy hh:mm') => (
  format(date, dateFormat, { locale: esLocale })
);

export default formatDate;
