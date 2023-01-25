import React, { useEffect } from 'react'
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

  const filteredHouses = Object.values(byId).filter((house) =>
    filterHouses(filter.city, filter.type, house.city, house.type),
  )

  return (
    <HousesStyled>
      {status.isError && <div>Error</div>}
      {status.isLoading && <div>Loading...</div>}
      {filteredHouses.length === 0 && <div>No results</div>}
      <Grid gridGap="32px">
        {filteredHouses
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
              currentPage * constants.HOUSES_SHOWED >= filteredHouses.length
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
