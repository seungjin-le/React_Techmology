import React, {Component, Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from 'pages/home/Main'

const loading = <div>asd</div>

const Page404 = React.lazy(() => import('pages/page404/Page404'))
const Page500 = React.lazy(() => import('pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/404' element={<Page404 />} />
            <Route path='/500' element={<Page500 />} />
            <Route path='/*' element={<Main />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
