import styled, { css } from 'styled-components'
import { darken } from 'polished'

export default styled.div`
  margin: 0.5rem 0;
  background-color: ${({ theme: { background } }) => darken(0.1, background)};

  ${({ isSmall, isMedium, isBig, isHalfSize }) => {
    let height = '2rem'
    let width = '100%'

    if (isSmall) height = '1rem'
    if (isMedium) height = '1.5rem'
    if (isBig) height = '2rem'
    if (isHalfSize) width = '50%'

    return css`
      height: ${height};
      width: ${width};
    `
  }};
`
