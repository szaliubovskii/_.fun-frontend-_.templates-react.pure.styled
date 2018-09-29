import React from 'react'
import PropTypes from 'prop-types'
import { FaClose } from 'react-icons/lib/fa'

import { Grid, Image, Header, Description, DummyImage } from './containers'

const Item = ({ name, phone }) => (
  <Grid>
    <Image>
      <DummyImage>
        <FaClose />
      </DummyImage>
    </Image>
    <Header>
      <h3>{name}</h3>
    </Header>
    <Description>
      <span>Phone: {phone}</span>
    </Description>
  </Grid>
)

export const ItemPropType = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

Item.propTypes = ItemPropType

export default Item
