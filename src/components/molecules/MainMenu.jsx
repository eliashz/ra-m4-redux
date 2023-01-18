import React, { useState } from 'react'
import styled from 'styled-components'
import { main } from '../../constants'

const MainMenuStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;

  li {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }
`

function MainMenu() {
  const [bold, setBold] = useState('')

  const handleClick = (e) => {
    setBold(e.target.textContent)
    //e.preventDefault()
  }

  return (
    <MainMenuStyled>
      {Object.values(main).map(({ path, label }) => (
        <li key={path}>
          <a
            href={path}
            onClick={handleClick}
            style={{ fontWeight: label === bold ? 'bold' : 'normal' }}
          >
            {label}
          </a>
        </li>
      ))}
    </MainMenuStyled>
  )
}

export default styled(MainMenu)``
