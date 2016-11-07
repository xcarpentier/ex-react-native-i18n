import I18n from './vendor/i18n';
import Exponent from 'exponent';

I18n.initAsync = async () => {
  const locale = await Exponent.Util.getCurrentLocaleAsync();
  I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

export default I18n;
