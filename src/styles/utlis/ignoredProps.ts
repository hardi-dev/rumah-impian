import {props as stprops} from '@styled-system/should-forward-prop';

const regex = new RegExp(
  `^(${stprops
    .join('|')
    .concat('|sx|i18n|tReady|i18nNamespaces|textTransform|transform|transitionDelay|transition')})$`,
);

export default regex;
