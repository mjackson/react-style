import warning from 'warning'
import React, { PropTypes } from 'react'
import { createMarkupForStyles } from 'react/lib/CSSPropertyOperations'
import { hex_md5 as md5 } from './md5'
import {
  styleSheet as styleSheetType
} from './PropTypes'

/**
 * A <StyleSheet> provides context to <Style> components so they can
 * insert CSS rules into the document.
 * 
 * Credit: The idea for using document.styleSheets to insert rules into
 * the DOM comes from @threepointone/react-css.
 */
class StyleSheet extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    dataAttr: PropTypes.string,
    document: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    id: 'react-style',
    dataAttr: 'style'
  }

  // TODO: Make this dynamic based on env
  static maxRules = 65534

  static childContextTypes = {
    styleSheet: styleSheetType.isRequired
  }

  getChildContext() {
    return {
      styleSheet: {
        createRule: this.createRule
      }
    }
  }

  keys = {}
  rules = []

  state = {
    rules: []
  }

  createRule = (styles) => {
    const css = createMarkupForStyles(styles)
    const key = md5(css).substring(0, 8)
    const prop = `data-${this.props.dataAttr}-${key}`
    const rule = `[${prop}]{${css}}`

    // If we already have this rule, we can safely ignore it
    // since all rules we generate have unique hashes in them.
    if (!this.keys[key]) {
      this.keys[key] = true

      const rules = this.rules
      rules.push(rule)

      warning(
        rules.length <= StyleSheet.maxRules,
        'A <StyleSheet> may contain only %s rules, which you have exceeded',
        StyleSheet.maxRules
      )

      this.setState({
        rules
      })
    }

    return prop
  }

  enableRules(rules) {
    const styleSheet = this.styleSheet

    rules.forEach(rule => {
      styleSheet.insertRule(rule, styleSheet.cssRules.length)
    })
  }

  componentDidMount() {
    const document = this.props.document || window.document

    this.node = document.createElement('style')
    this.node.id = this.props.id

    // Webkit hack to get it going :/
    this.node.appendChild(document.createTextNode(''))

    const head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(this.node)

    for (let i = 0; i < document.styleSheets.length; ++i) {
      const styleSheet = document.styleSheets[1]

      if (styleSheet.ownerNode === this.node) {
        this.styleSheet = styleSheet
        break
      }
    }

    this.enableRules(this.state.rules)
  }

  componentDidUpdate(prevProps, prevState) {
    const newRules = this.state.rules.filter(rule => (
      prevState.rules.indexOf(rule) === -1
    ))

    this.enableRules(newRules)
  }

  componentWillUnmount() {
    this.node.parentNode.removeChild(this.node)
    this.styleSheet = null
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default StyleSheet
