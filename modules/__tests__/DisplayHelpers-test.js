import React from 'react'
import expect from 'expect'
import { renderWithStyleSheet } from './helpers'
import { Inline, Block, InlineBlock, Table, TableRow, TableCell, Flex, InlineFlex } from '../DisplayHelpers'

const childStyle = (node) =>
  window.getComputedStyle(node.firstChild)

describe('DisplayHelpers', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
    document.body.appendChild(node)
  })

  afterEach(() => {
    document.body.removeChild(node)
  })

  describe('<Inline>', () => {
    it('uses display:inline', () => {
      renderWithStyleSheet(<Inline/>, node, () => {
        expect(childStyle(node).display).toEqual('inline')
      })
    })
  })

  describe('<Block>', () => {
    it('uses display:block', () => {
      renderWithStyleSheet(<Block/>, node, () => {
        expect(childStyle(node).display).toEqual('block')
      })
    })
  })

  describe('<InlineBlock>', () => {
    it('uses display:inline-block', () => {
      renderWithStyleSheet(<InlineBlock/>, node, () => {
        expect(childStyle(node).display).toEqual('inline-block')
      })
    })
  })

  describe('<Table>', () => {
    it('uses display:table', () => {
      renderWithStyleSheet(<Table/>, node, () => {
        expect(childStyle(node).display).toEqual('table')
      })
    })
  })

  describe('<TableRow>', () => {
    it('uses display:table-row', () => {
      renderWithStyleSheet(<TableRow/>, node, () => {
        expect(childStyle(node).display).toEqual('table-row')
      })
    })
  })

  describe('<TableCell>', () => {
    it('uses display:table-cell', () => {
      renderWithStyleSheet(<TableCell/>, node, () => {
        expect(childStyle(node).display).toEqual('table-cell')
      })
    })
  })

  describe('<Flex>', () => {
    it('uses display:flex', () => {
      renderWithStyleSheet(<Flex/>, node, () => {
        expect(childStyle(node).display).toEqual('flex')
      })
    })
  })

  describe('<InlineFlex>', () => {
    it('uses display:inline-flex', () => {
      renderWithStyleSheet(<InlineFlex/>, node, () => {
        expect(childStyle(node).display).toEqual('inline-flex')
      })
    })
  })
})
