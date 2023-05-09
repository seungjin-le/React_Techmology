import React, {Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import routes from 'routes'

interface PageProps {
  children?: React.ReactNode
}

const loading = <div>Loading....</div>
const PageSection: React.FC<PageProps> = () => {
  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
            return route.element && <Route key={idx} path={route.path} element={<route.element />} />
          })}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default React.memo(PageSection)
