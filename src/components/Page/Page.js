import React from 'react'
import { useTranslation } from 'react-i18next';

import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import Block from '../Block/Block'
import { Trans } from 'react-i18next';

const Page = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <WelcomeMessage />
        <Block>
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        </Block>
        <Block>
          <Trans i18nKey="description.part2">
            To get started, edit <strong>src/App.js</strong> and save to reload.
        </Trans>
        </Block>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('ru')}>ru</button>
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}

export default Page