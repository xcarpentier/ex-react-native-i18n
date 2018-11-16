import I18n from './vendor/i18n';
import { Localization } from 'expo'

I18n.initAsync = async () => {
  const locale = await Localization.locale;
  I18n.locale = (locale) ? locale.replace(/_/, '-') : '';
}

export default I18n;
