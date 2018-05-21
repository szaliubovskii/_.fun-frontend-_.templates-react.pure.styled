import styled, { css } from 'styled-components'

/* eslint-disable */
export default styled.input`

  outline: none;

  padding: 0.5rem 0.5rem;
  border-radius: 3px;

  ${({ isStretch,  theme: { defaultColor, defaultCouple, accentColor } }) => css`
    background-color: transparent;
    color: ${defaultColor};
    border: 1px solid ${defaultColor};

    ${() => { if (isStretch) return css`width: 100%;`}}

    &:active, &:focus {
      border-color: ${accentColor};
    }
  `}

  -webkit-transition: box-shadow .1s ease,border-color .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease;
`
/* eslint-enabled */
