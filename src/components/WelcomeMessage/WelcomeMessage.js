import React from 'react'


import { useTranslation } from 'react-i18next'
// import { withTranslation } from 'react-i18next';
// import { Translation } from 'react-i18next';
// import { Trans } from 'react-i18next';

const WelcomeMessage = () => {
  const { t } = useTranslation()
  // console.log('i18n', i18n)
  // window.i18n = i18n
  return (
    <>
      <h1>{t('title')}</h1>
    </>
  )
}

// const WelcomeMessage = ({ t, i18n }) => {
//   console.log('i18n', i18n)
//   window.i18n = i18n
//   return <h1>{t('title')}</h1>
// }

// const WelcomeMessage = () => {
//   return <Translation>
//     {
//       t => <h1>{t('wellcomTitle')}</h1>
//     }
//   </Translation>
// }

// const WelcomeMessage = () => {
//   return <Trans><h1>wellcomTitle</h1></Trans>
// }

export default WelcomeMessage
// export default withTranslation()(WelcomeMessage);