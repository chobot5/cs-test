import React from 'react'

import { Providers } from './core/Providers'
import { AppRouter } from './core/AppRouter'

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App
