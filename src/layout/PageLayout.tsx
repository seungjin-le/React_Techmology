import React from 'react'
import PageHeader from 'layout/PageHeader'
import PageFooter from 'layout/PageFooter'
import PageSection from 'layout/PageSection'

interface PageProps {
  children?: React.ReactNode
}

const PageLayout: React.FC<PageProps> = () => {
  return (
    <>
      <PageHeader />
      <PageSection />
      <PageFooter />
    </>
  )
}
export default PageLayout
