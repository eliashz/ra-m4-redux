import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { FlexBox, Grid } from '../../styles'
import { getHouses } from '../../store/houses.slice'

const HousesStyled = styled(FlexBox)``

function Houses() {
  const HOUSES_SHOWED = 9
  let k = 0
  const [currentPage, setCurrentPage] = useState(1)
  const houses = useSelector((state) => state.houses.houses)
  const { byCity, byType, byId } = houses
  console.log(byType)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <HousesStyled>
      <Grid gridGap="32px">
{/*         {byId.slice(0, HOUSES_SHOWED * currentPage).map((house) => (
          <HouseCard
            key={house.id}
            title={house.title}
            price={`${house.price}€`}
            img={house.image}
            link=""
          />
        ))} */}

      </Grid>

      <FlexBox align="center">
        <Button
          style={{
            marginTop: '2rem',
            display:
              currentPage * HOUSES_SHOWED >= houses.length ? 'none' : 'block',
          }}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Load more
        </Button>
      </FlexBox>
    </HousesStyled>
  )
}

export default styled(Houses)``
