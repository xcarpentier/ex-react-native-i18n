import I18n from './vendor/i18n';
import Exponent from 'expo';

I18n.initAsync = async () => {
  const Localization = Expo.DangerZone.Localization || Expo.Localization || Expo.Util;
  const locale = await Localization.getCurrentLocaleAsync();
  I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

export default I18n;
