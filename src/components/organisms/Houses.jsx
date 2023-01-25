import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { FlexBox, Grid } from '../../styles'
import { getHouses, setCurrentPage } from '../../store/houses.slice'
import { filterHouses } from '../../helpers'
import { constants } from '../../constants'

const HousesStyled = styled(FlexBox)``

function Houses() {
  const houses = useSelector((state) => state.houses.houses)
  const status = useSelector((state) => state.houses)
  const { currentPage } = status
  const { byId, filter } = houses
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <HousesStyled>
      {status.isError && <div>Error</div>}
      {status.isLoading && <div>Loading...</div>}
      <Grid gridGap="32px">
        {Object.values(byId)
          .filter((house) =>
            filterHouses(filter.city, filter.type, house.city, house.type),
          )
          .slice(0, constants.HOUSES_SHOWED * currentPage)
          .map((house) => (
            <HouseCard
              key={house.id}
              title={house.title}
              price={`${house.price}€`}
              img={house.image}
              link=""
            />
          ))}
      </Grid>
      <FlexBox align="center">
        <Button
          style={{
            marginTop: '2rem',
            display:
              currentPage * constants.HOUSES_SHOWED >=
              Object.values(byId).length
                ? 'none'
                : 'block',
          }}
          onClick={() => dispatch(setCurrentPage())}
        >
          Load more
        </Button>
      </FlexBox>
    </HousesStyled>
  )
}

export default styled(Houses)``
