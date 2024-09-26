import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Container, Logo, Navbar } from './styles'
import Button from './../Button'
import SearchBar from './../SearchBar'
import logo from '/public/logo.svg'
import ProfilePic from '../ProfilePic'
import ProfileMenuDropDown from '../ProfileDropDown'
import {LoginContext} from "../../contexts/LoginContext"

const Header = () => {
  const {authedUser} = useContext(LoginContext)
  
  return (
    <Wrapper>
      <Container>
        <section className='start'>
          <Logo src={logo} alt="Logo da dio" />
          {authedUser ?
            <>
              <SearchBar />
              <a href="#">Live Code</a>
              <a href="#">Global</a>
            </> : null
          }
        </section>
        <section className='end'>
          {authedUser ?
            <ProfileMenuDropDown /> :
            <Navbar>
              <Link to='/' >
                Home
              </Link>
              <Link to='/login'>
                <Button>Entrar</Button>
              </Link>
              <Link to="/signup">
                <Button>Cadastrar</Button>
              </Link>
            </Navbar>
          }

        </section>
      </Container>
    </Wrapper>
  )
}

export { Header }