import React, { lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import ListContacts from 'features/contacts/components/list-contacts'

export const ContactsLazy = lazy(() => import('pages/сontacts'))

const Contacts = () => {
  return (
    <>
      <Helmet title={'List contacts'}>
        <meta charSet="utf-8" />
      </Helmet>
      <ListContacts />
    </>
  )
}

export default Contacts
