import React from 'react'
import styled from 'styled-components'

const ItemBox = styled.div`
  padding: 1rem;
  color: ${({ theme: { color } }) => color};

  text-decoration: none;

  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }

  &:active {
    text-decoration: none;
  }

  .active & {
    color: ${({ theme: { accent } }) => accent};
  }
`

const Item = ({ children }) => <ItemBox>{children}</ItemBox>

export default Item
