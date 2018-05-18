import styled from 'styled-components'
import { lighten } from 'polished'

export default styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background: transparent;
  color: ${({ theme: { color } }) => color};
  border: 2px solid ${({ theme: { color } }) => color};

  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { accent } }) => accent};
    border: 2px solid ${({ theme: { accent } }) => accent};
  }

  &:active {
    color: ${({ theme: { accent, lightenBy } }) => lighten(lightenBy, accent)};
    border: 2px solid
      ${({ theme: { accent, lightenBy } }) => lighten(lightenBy, accent)};
  }
`
