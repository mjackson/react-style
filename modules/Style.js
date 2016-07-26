import React, { PropTypes } from 'react'
import StyleProperties from './StyleProperties'
import {
  styleSheet as styleSheetType
} from './PropTypes'

const isEmptyObject = (object) =>
  Object.keys(object).length === 0

const shallowCompare = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  return aKeys.length === bKeys.length && aKeys.every(key => a[key] == b[key])
}

/**
 * A declarative <Style> component that accepts CSS styles as props.
 * Uses a <StyleSheet> in context to activate rules.
 *
 * Credit: This API was copied from Pete Hunt's jsxstyle package.
 * See https://github.com/petehunt/jsxstyle
 */
class Style extends React.Component {
  static contextTypes = {
    styleSheet: styleSheetType.isRequired
  }

  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ])
  }

  static defaultProps = {
    component: 'div'
  }

  static splitProps(mixedProps) {
    const props = {}
    const styleProps = {}

    Object.keys(mixedProps).forEach(key => {
      if (StyleProperties[key]) {
        styleProps[key] = mixedProps[key]
      } else {
        props[key] = mixedProps[key]
      }
    })

    return {
      props,
      styleProps
    }
  }

  static getStyleProps(props) {
    return Style.splitProps(props).styleProps
  }

  state = {
    key: null
  }

  updateKey(styleProps) {
    this.setState({
      key: isEmptyObject(styleProps) ? null : this.context.styleSheet.createRule(styleProps)
    })
  }

  componentWillMount() {
    this.updateKey(Style.getStyleProps(this.props))
  }

  componentWillReceiveProps(nextProps) {
    const prevStyleProps = Style.getStyleProps(this.props)
    const nextStyleProps = Style.getStyleProps(nextProps)

    if (!shallowCompare(prevStyleProps, nextStyleProps))
      this.updateKey(nextStyleProps)
  }

  render() {
    const { component, ...props } = Style.splitProps(this.props).props
    const { key } = this.state

    if (key)
      props[key] = ''

    return React.createElement(component, props)
  }
}

export default Style
