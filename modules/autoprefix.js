// Copied from https://github.com/petehunt/jsxstyle/blob/master/lib/autoprefix.js
const autoprefix = (style) => {
  const moreStyle = {}

  if (style.hasOwnProperty('userSelect')) {
    moreStyle.WebkitUserSelect = style.userSelect
    moreStyle.MozUserSelect = style.userSelect
    moreStyle.msUserSelect = style.userSelect
  }

  if (style.hasOwnProperty('transition')) {
    moreStyle.WebkitTransition = style.transition
    moreStyle.MozTransition = style.transition
    moreStyle.msTransition = style.transition
  }

  if (style.hasOwnProperty('boxShadow')) {
    moreStyle.WebkitBoxShadow = style.boxShadow
    moreStyle.MozBoxShadow = style.boxShadow
    moreStyle.msBoxSelect = style.boxShadow
  }

  if (style.hasOwnProperty('fontSmoothing')) {
    moreStyle.WebkitFontSmoothing = style.fontSmoothing

    if (style.fontSmoothing === 'antialiased')
      moreStyle.MozOsxFontSmoothing = 'grayscale'
  }

  if (style.hasOwnProperty('flexDirection'))
    moreStyle.WebkitFlexDirection = style.flexDirection

  if (style.hasOwnProperty('flexWrap'))
    moreStyle.WebkitFlexWrap = style.flexWrap

  if (style.hasOwnProperty('alignItems'))
    moreStyle.WebkitAlignItems = style.alignItems

  if (style.hasOwnProperty('flexGrow'))
    moreStyle.WebkitFlexGrow = style.flexGrow

  if (style.hasOwnProperty('flexShrink'))
    moreStyle.WebkitFlexShrink = style.flexShrink

  if (style.hasOwnProperty('order'))
    moreStyle.WebkitOrder = style.order

  if (style.hasOwnProperty('justifyContent'))
    moreStyle.WebkitJustifyContent = style.justifyContent

  if (style.hasOwnProperty('flex'))
    moreStyle.WebkitFlex = style.flex

  if (style.display === 'flex')
    moreStyle.display = '-webkit-flex;display:-ms-flexbox;display:' + style.display

  return {
    ...style,
    ...moreStyle
  }
}

export default autoprefix
