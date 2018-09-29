import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Grid = styled.div`
  display: grid;
  padding: 0.5em;

  grid-gap: 1rem;

  grid-template:
    'image header header'
    'image description description';

  ${({ theme: { background } }) => css`
    background-color: ${darken(0.05, background)};
  `};
`

export const Image = styled.div`
  grid-area: image;

  ${({ theme: { background } }) => css`
    background-color: ${darken(0.1, background)};
  `};
`

export const DummyImage = styled.div`
  height: 100%;
  width: 100%;

  align-self: center;
  justify-self: center;
`

export const Header = styled.div`
  grid-area: header;
`

export const Description = styled.div`
  grid-area: description;
`
