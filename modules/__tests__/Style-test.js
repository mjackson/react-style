import React from 'react'
import expect from 'expect'
import { renderWithStyleSheet } from './helpers'
import Style from '../Style'

describe('<Style>', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
    document.body.appendChild(node)
  })

  afterEach(() => {
    document.body.removeChild(node)
  })

  it('adds style properties for its component to the document', () => {
    renderWithStyleSheet(<Style component="a" display="block"/>, node, () => {
      expect(node.firstChild.tagName).toEqual('A')
      expect(window.getComputedStyle(node.firstChild).display).toEqual('block')
    })
  })

  it('does not pass style properties through to its component', () => {
    renderWithStyleSheet(<Style component="a" display="block"/>, node, () => {
      expect(node.firstChild.tagName).toEqual('A')
      expect(node.firstChild.style.display).toNotEqual('block')
    })
  })

  it('passes non-style properties through to its component', () => {
    renderWithStyleSheet(<Style component="a" id="the-link"/>, node, () => {
      expect(node.firstChild.tagName).toEqual('A')
      expect(node.firstChild.id).toEqual('the-link')
    })
  })
})
