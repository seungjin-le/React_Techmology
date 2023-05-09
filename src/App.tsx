import React, {Component, Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from 'pages/home/Main'

const loading = <div>asd</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/*' element={<Main />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
