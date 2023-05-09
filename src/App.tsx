import React, {Component, Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import PageLayout from 'layout/PageLayout'

const loading = <div>Loading</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <PageLayout />
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
