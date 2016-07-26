import React from 'react'
import { render } from 'react-dom'
import StyleSheet from '../StyleSheet'

export const renderWithStyleSheet = (element, ...args) =>
  render(<StyleSheet children={element}/>, ...args)
