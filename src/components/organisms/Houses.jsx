import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { useFetch } from '../../hooks'
import { FlexBox, Grid } from '../../styles'
import { urls } from '../../constants'
import { getHouses } from '../../store/houses.slice'

const HousesStyled = styled(FlexBox)``

function Houses() {
  const HOUSES_SHOWED = 9
  const houses = useSelector((state) => state.houses.houses)
  const [currentPage, setCurrentPage] = useState(1)
  //const { data, loading, isError, isSuccess } = useFetch(urls.houses)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])
  /* let types = [...new Set(houses.map((house) => house.type))]
  let cities = [...new Set(houses.map((house) => house.city))]

  console.log(cities) */

  return (
    <HousesStyled>
      {/*    {loading && <div>Loading...</div>}
      {isError && <div>Error</div>} */}
      {
        /* isSuccess &&  */ <Grid gridGap="32px">
          {houses.slice(0, HOUSES_SHOWED * currentPage).map((house) => (
            <HouseCard
              key={house.id}
              title={house.title}
              price={`${house.price}€`}
              img={house.image}
              link=""
            />
          ))}
        </Grid>
      }
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
