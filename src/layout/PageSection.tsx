import React from 'react'

interface PageProps {
  children?: React.ReactNode
}

const PageSection: React.FC<PageProps> = ({children}: PageProps) => {
  return <>{children}</>
}

export default PageSection
