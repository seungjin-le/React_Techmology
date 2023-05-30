import React, {Component, Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import PageLayout from 'layout/PageLayout'
import Wallet from 'utils/Wallet'

const loading = <div>Loading</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <PageLayout />
          <Wallet />
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
