import React, { useContext } from 'react'
import { LoginContext } from "../../contexts/LoginContext"
import { Wrapper, Container, Infos } from './styles';
import { Header } from '../../components/Header';
import { FancyButton } from '../../components/Button';
import { FormSection } from '../../components/FormSection/styles';
import Input from '../../components/Input';
import { email, password } from '../../components/Icons'
import { Link } from 'react-router-dom'


const Login = ({user, action}) => {
    const {authedUser, setAuthedUser} = useContext(LoginContext)
    setAuthedUser(0)
    return (
        <Wrapper>
            <Header auth={authedUser} />
            <Container>
                <Infos>
                    <h1>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </h1>
                </Infos>
                <FormSection>
                    <h2>Faça seu cadastro</h2>
                    <p>Faça seu login e make the change._</p>
                    <form action="/">
                        <Input type="text" placeholder='E-mail' icon={email} /><br />
                        <Input type="password" placeholder='Password' icon={password} /><br />
                        <FancyButton type='submit' onClick={() => setAuthedUser(true)}>Entrar</FancyButton>
                    </form>
                    <div>
                        <a href="#" style={{color: 'rgba(229, 224, 68, 1)'}}>Esqueci minha senha</a>
                        <a href="#" style={{color: 'rgba(35, 221, 122, 1)'}}>Criar conta</a>
                    </div>
                </FormSection>
            </Container>
        </Wrapper>
    )
}

export default Login