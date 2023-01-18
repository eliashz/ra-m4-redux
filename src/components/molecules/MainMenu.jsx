import React, { useState } from 'react'
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

function MainMenu({ bold, setBold }) {
  return (
    <MainMenuStyled>
      {Object.values(main).map(({ path, label }) => (
        <li key={path}>
          <a
            href={path}
            onClick={(e) => setBold(e.target.textContent)}
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
