import React from 'react'
import ReactDOM from 'react-dom'

describe('React wrapper provider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<div />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})