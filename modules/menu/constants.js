export const NAME = 'c-LanguageSwitch'

const CLASS = 'c-LanguageSwitch'

export const Settings = {
  STAGGER_DELAY: 80
}

export const ClassName = {
  ROOT: CLASS,
  OPTION: `${CLASS}-option`,
  TRIGGER_CLASS: 'has-open-language-dropdown'
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`,
  OPTION: `.${ClassName.OPTION}`
}

export const ExternalComponents = {
  TOGGLE: '#dfb-bp-language-toggle',
  HEADER: '.m-Header'
}
