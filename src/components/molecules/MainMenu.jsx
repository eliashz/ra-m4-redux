import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { main } from '../../constants'

const MainMenuStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }
`

function MainMenu() {
  const location = useLocation()

  return (
    <MainMenuStyled>
      {Object.values(main).map(({ path, label }) => (
        <li key={path}>
          <a
            href={path}
            style={{
              fontWeight: path === location.pathname ? 'bold' : 'normal',
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </MainMenuStyled>
  )
}

export default styled(MainMenu)``
