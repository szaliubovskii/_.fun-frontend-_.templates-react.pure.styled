import styled from 'styled-components'
import { lighten } from 'polished'

const Item = styled.div`
  padding: 1rem;
  color: ${({ theme: { color } }) => color};

  text-decoration: none;

  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }

  &:active {
    text-decoration: none;
    color: ${({ theme: { accent } }) => lighten(0.2, accent)};
  }

  .active & {
    color: ${({ theme: { accent } }) => accent};
  }
`

export default Item
