import React, { PropTypes } from 'react'
import { style } from '@threepointone/react-css'

// TODO: Call react-css' remove function...
const remove = (stuff) =>
  console.log(`Removing stuff: ${JSON.stringify(stuff)}`)

const isEmptyObject = (object) =>
  Object.keys(object).length === 0

const shallowCompare = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  return aKeys.length === bKeys.length && aKeys.every(key => a[key] == b[key])
}

// TODO: Is there a canonical list of these somewhere? I copped
// these off document.body.style in Chrome...
const StyleProperties = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  alignmentBaseline: true,
  all: true,
  animation: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: true,
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationTimingFunction: true,
  backfaceVisibility: true,
  background: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundColor: true,
  backgroundImage: true,
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundPositionX: true,
  backgroundPositionY: true,
  backgroundRepeat: true,
  backgroundRepeatX: true,
  backgroundRepeatY: true,
  backgroundSize: true,
  baselineShift: true,
  border: true,
  borderBottom: true,
  borderBottomColor: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStyle: true,
  borderBottomWidth: true,
  borderCollapse: true,
  borderColor: true,
  borderImage: true,
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: true,
  borderImageWidth: true,
  borderLeft: true,
  borderLeftColor: true,
  borderLeftStyle: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRight: true,
  borderRightColor: true,
  borderRightStyle: true,
  borderRightWidth: true,
  borderSpacing: true,
  borderStyle: true,
  borderTop: true,
  borderTopColor: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStyle: true,
  borderTopWidth: true,
  borderWidth: true,
  bottom: true,
  boxShadow: true,
  boxSizing: true,
  breakAfter: true,
  breakBefore: true,
  breakInside: true,
  bufferedRendering: true,
  captionSide: true,
  clear: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  color: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorRendering: true,
  columnCount: true,
  columnFill: true,
  columnGap: true,
  columnRule: true,
  columnRuleColor: true,
  columnRuleStyle: true,
  columnRuleWidth: true,
  columnSpan: true,
  columnWidth: true,
  columns: true,
  content: true,
  counterIncrement: true,
  counterReset: true,
  cursor: true,
  cx: true,
  cy: true,
  direction: true,
  display: true,
  dominantBaseline: true,
  emptyCells: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  float: true,
  floodColor: true,
  floodOpacity: true,
  font: true,
  fontFamily: true,
  fontFeatureSettings: true,
  fontKerning: true,
  fontSize: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontVariantLigatures: true,
  fontWeight: true,
  height: true,
  imageRendering: true,
  isolation: true,
  justifyContent: true,
  left: true,
  letterSpacing: true,
  lightingColor: true,
  lineHeight: true,
  listStyle: true,
  listStyleImage: true,
  listStylePosition: true,
  listStyleType: true,
  margin: true,
  marginBottom: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marker: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  mask: true,
  maskType: true,
  maxHeight: true,
  maxWidth: true,
  maxZoom: true,
  minHeight: true,
  minWidth: true,
  minZoom: true,
  mixBlendMode: true,
  motion: true,
  motionOffset: true,
  motionPath: true,
  motionRotation: true,
  objectFit: true,
  objectPosition: true,
  opacity: true,
  order: true,
  orientation: true,
  orphans: true,
  outline: true,
  outlineColor: true,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  overflow: true,
  overflowWrap: true,
  overflowX: true,
  overflowY: true,
  padding: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  page: true,
  pageBreakAfter: true,
  pageBreakBefore: true,
  pageBreakInside: true,
  paintOrder: true,
  perspective: true,
  perspectiveOrigin: true,
  pointerEvents: true,
  position: true,
  quotes: true,
  r: true,
  resize: true,
  right: true,
  rx: true,
  ry: true,
  shapeImageThreshold: true,
  shapeMargin: true,
  shapeOutside: true,
  shapeRendering: true,
  size: true,
  speak: true,
  src: true,
  stopColor: true,
  stopOpacity: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  tabSize: true,
  tableLayout: true,
  textAlign: true,
  textAlignLast: true,
  textAnchor: true,
  textCombineUpright: true,
  textDecoration: true,
  textIndent: true,
  textOrientation: true,
  textOverflow: true,
  textRendering: true,
  textShadow: true,
  textTransform: true,
  top: true,
  touchAction: true,
  transform: true,
  transformOrigin: true,
  transformStyle: true,
  transition: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  unicodeBidi: true,
  unicodeRange: true,
  userZoom: true,
  vectorEffect: true,
  verticalAlign: true,
  visibility: true,
  whiteSpace: true,
  widows: true,
  width: true,
  willChange: true,
  wordBreak: true,
  wordSpacing: true,
  wordWrap: true,
  writingMode: true,
  x: true,
  y: true,
  zIndex: true,
  zoom: true
}

export class Style extends React.Component {
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

    return styleProps
  }

  static getStyleProps(props) {
    return Style.splitProps(props).styleProps
  }

  state = {
    style: null
  }

  updateStyle(styleProps) {
    this.setState({
      style: isEmptyObject(styleProps) ? null : style(styleProps)
    })
  }

  componentWillMount() {
    this.updateStyle(Style.getStyleProps(this.props))
  }

  componentWillReceiveProps(nextProps) {
    const prevStyleProps = Style.getStyleProps(this.props)
    const nextStyleProps = Style.getStyleProps(nextProps)

    if (!shallowCompare(prevStyleProps, nextStyleProps)) {
      if (this.state.style)
        remove(this.state.style)

      this.updateStyle(nextStyleProps)
    }
  }

  componentWillUnmount() {
    if (this.state.style)
      remove(this.state.style)
  }

  render() {
    const { component, ...props } = Style.splitProps(this.props).props
    const { style } = this.state

    if (style)
      Object.assign(props, style)

    return React.createElement(component, props)
  }
}

export const Inline = (props) =>
  <Style {...props} display="inline"/>

export const Block = (props) =>
  <Style {...props} display="block"/>

export const InlineBlock = (props) =>
  <Style {...props} display="inline-block"/>

export const Flex = (props) =>
  <Style {...props} display="flex"/>

export const InlineFlex = (props) =>
  <Style {...props} display="inline-flex"/>

export const Table = (props) =>
  <Style {...props} display="table"/>

export const TableRow = (props) =>
  <Style {...props} display="table-row"/>

export const TableCell = (props) =>
  <Style {...props} display="table-cell"/>
