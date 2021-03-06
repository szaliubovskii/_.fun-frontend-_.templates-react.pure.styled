import styled, { css } from 'styled-components'
import { darken } from 'polished'

/* eslint-disable */
export default styled.button`
  font-size: 1em;
  margin: 1em;
  padding: .5em 1em;
  border-radius: 3px;

  outline: none;
  cursor: pointer;
  
  ${({
    isAccent,
    isHollow,
    isCircular, 
    theme: { defaultColor, defaultCouple, accentColor, accentCouple } }) => {

    let backgroundColor = defaultColor, 
        borderColor = defaultColor,
        color = defaultCouple,
        borderRadius = '2px'

    if (isAccent) {
      backgroundColor = borderColor = accentColor
      color = accentCouple
    }

    if (isHollow) {
      backgroundColor = 'rgba(0, 0, 0, 0.0)'
      color = isAccent ? accentColor : defaultCouple
    }

    if (isCircular) {
      borderRadius = '20px'
    }

    return css`
      background: ${backgroundColor};
      color: ${color};
      border-color: ${borderColor};
      border-radius: ${borderRadius};

      &:hover {
        border-color: ${darken(0.03, borderColor)};
        background-color: ${darken(0.03, backgroundColor)};
      }

      &:active {
        border-color: ${darken(0.05, borderColor)};
        background-color: ${darken(0.05, backgroundColor)};
      }
    `
  }}
`
/* eslint-enabled */
