import React, { useContext } from 'react'
import { Wrapper, Container, Infos } from './styles';
import { Header } from '../../components/Header';
import { FormSection } from "../../components/FormSection/styles";
import Input from "../../components/Input";
import { FancyButton } from "../../components/Button";
import { contact, email, password } from '../../components/Icons'
import { LoginContext } from "../../contexts/LoginContext"


export const SignUp = () => {
    const {authedUser, setAuthedUser} = useContext(LoginContext)
    setAuthedUser(0)

    return (
        <Wrapper>
            <Header />
            <Container>
                <Infos>
                    <h1>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </h1>
                </Infos>
                <FormSection>
                    <h2>Comece agora grátis</h2>
                    <p>Crie sua conta e make the change._</p>
                    <form action="/">
                        <Input type="text" placeholder='Nome Completo' icon={contact} /><br />
                        <Input type="text" placeholder='E-mail' icon={email} /><br />
                        <Input type="password" placeholder='Password' icon={password} /><br />
                        <FancyButton type='submit' onClick={() => setAuthedUser(true)}>Entrar</FancyButton>
                    </form>
                    <br />
                    <p>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </p>
                    <p>
                        Já tenho uma conta. <a href="/login" style={{color: 'rgba(35, 221, 122, 1)'}}>Fazer login</a>
                    </p>
                </FormSection>
            </Container>
        </Wrapper>
    )
}