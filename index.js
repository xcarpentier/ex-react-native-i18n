import I18n from './vendor/i18n';
import Expo from 'expo';

I18n.initAsync = async () => {
  const locale = await Expo.Util.getCurrentLocaleAsync();
  I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

export default I18n;
