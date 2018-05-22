import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

/* eslint-disable */
export default styled.input`

  outline: none;

  padding: 0.5rem 0.5rem;
  border-radius: 3px;

  ${({ isStretch,  theme: { color, accentColor } }) => css`
    background-color: transparent;
    color: ${color};
    border: 1px solid ${transparentize(0.7, color)};

    ${() => { if (isStretch) return css`width: 98%;`}}

    &:active, &:focus {
      border-color: ${accentColor};
    }

    &::placeholder {
      color: ${transparentize(0.7, color)};
    }
  `}

  -webkit-transition: box-shadow .1s ease,border-color .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease;
`
/* eslint-enabled */
