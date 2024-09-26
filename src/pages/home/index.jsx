import React, { useContext } from 'react'
import { LoginContext } from "../../contexts/LoginContext"
import { Wrapper, Container, Infos, Banner } from './styles';
import { Redirect, redirect } from 'react-router-dom'
import { Header } from '../../components/Header';
import { FancyButton } from '../../components/Button';
import bannerImg from '/public/image1.png'
import { Feed } from '../feed/index'
import { Link } from 'react-router-dom'

const Home = () => {
    if (authFails())
        return (
            <Wrapper>
                <Header />
                <Container>
                    <Infos>
                        <h1>
                            <span>Implemente</span>
                            o seu futuro global agora!
                        </h1>
                        <p>
                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                        </p>

                        <Link to='/signup'>
                            <FancyButton>
                                Começar agora
                            </FancyButton>
                        </Link>
                    </Infos>
                    <Banner src={bannerImg} />
                </Container>
            </Wrapper>
        )
    return <Feed />
}

const authFails = () => {
    const { authedUser } = useContext(LoginContext)

    if (!authedUser)
        return true
    else
        return false
}

export default Home