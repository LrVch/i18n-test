import React, {Fragment} from 'react'


import { useTranslation } from 'react-i18next'

const WelcomeMessage = () => {
  const { t } = useTranslation()
  return (
    <Fragment>
      <h1>{t('title')}</h1>
    </Fragment>
  )
}

export default WelcomeMessage