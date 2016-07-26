import expect from 'expect'
import React from 'react'
import { render } from 'react-dom'
import StyleSheet from '../StyleSheet'

describe('<StyleSheet>', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
    document.body.appendChild(node)
  })

  afterEach(() => {
    document.body.removeChild(node)
  })
})
