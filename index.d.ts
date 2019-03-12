export default class i18n {
  static t(text: string, interpolation?: object): string
  static currentLocale(): string
  static getFallbackLocale(): string
  static defaultLocale: string
  static fallbacks: boolean
  static translations: { [key: string]: NodeRequireFunction }
  static missingTranslation(): string
  static localShort(): string
  static locale: string
 }
