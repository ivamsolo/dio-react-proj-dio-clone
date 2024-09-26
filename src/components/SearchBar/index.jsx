import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { search } from '../Icons'
 //import { Button } from '../Button';
const SearchBar = () => {
  return (
    <Container>
      <label htmlFor="search">
        <img src={search} alt="" />
      </label>
      <input type="search" placeholder="Buscar" id="search" />
    </Container>
  )
}

export default SearchBar