import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, Container, dimensions } from '../../styles'
import { Text } from '../atoms'
import { MainMenu } from '../molecules'

const HeaderStyled = styled(Container)`
  padding-top: ${dimensions.spacing.xl};
  padding-bottom: ${dimensions.spacing.xl};
`
function Header() {
  const [bold, setBold] = useState('')

  return (
    <HeaderStyled direction="row" justify="space-between">
      <Text as="span" color={colors.red}>
        MIPISO.com
      </Text>
      <MainMenu bold={bold} setBold={setBold} />
    </HeaderStyled>
  )
}

export default Header
