import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { FlexBox, Grid } from '../../styles'
import { getHouses } from '../../store/houses.slice'

const HousesStyled = styled(FlexBox)``

function byCity(select, house) {
  if (select.city === house.city || !select.city) return true
  return false
}
function byType(select, house) {
  if (select.type === house.type || !select.type) return true
  return false
}

function filterSelect(select, house) {
  return byCity(select, house) && byType(select, house)
}

function Houses() {
  const HOUSES_SHOWED = 9
  const [currentPage, setCurrentPage] = useState(1)
  const houses = useSelector((state) => state.houses.houses)
  const { byId } = houses
  const select = useSelector((state) => state.select)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <HousesStyled>
      <Grid gridGap="32px">
        {Object.values(byId)
          .filter((house) => filterSelect(select, house))
          .slice(0, HOUSES_SHOWED * currentPage)
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
              currentPage * HOUSES_SHOWED >= Object.values(byId).length
                ? 'none'
                : 'block',
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
