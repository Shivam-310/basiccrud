import React from 'react'
import RecordTable from './components/recordTable'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <RecordTable/>
    </Provider>
  )
}

export default App
