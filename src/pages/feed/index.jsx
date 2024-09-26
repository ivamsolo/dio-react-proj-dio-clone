import React, { useState } from 'react'
import { Wrapper, Container, Infos, Banner } from './styles';
import { Header } from '../../components/Header';
import { FancyButton } from '../../components/Button';
import bannerImg from '/public/image1.png'
import Post from '../../components/Post';
import sample from "/public/post-sample.png"
import ProfilePic from '../../components/ProfilePic';
import { contact } from '../../components/Icons'
import ProgressBar from '../../components/ProgressBar';


export const Feed = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <section className='posts'>
                    <h2>Feed</h2>
                    <div className='entries'>
                        <Post cover={sample} title="Projeto para curso de HTML e CSS" content="Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais" />
                        <Post />
                        <Post cover={sample} />
                        <Post />
                        <Post cover={sample} />
                    </div>
                </section>

                <section className='ranking'>
                    <h2># Ranking 5 top da semana</h2>
                    <div className='content'>
                        <div className='card'>
                            <ProfilePic src={contact} />
                            <ProgressBar title="User A" progress="90" />
                        </div>
                        <div className='card'>
                            <ProfilePic src={contact} />
                            <ProgressBar title="User B" progress="85" />
                        </div>
                        <div className='card'>
                            <ProfilePic src={contact} />
                            <ProgressBar title="User C" progress="65" />
                        </div>
                        <div className='card'>
                            <ProfilePic src={contact} />
                            <ProgressBar title="User D" progress="60" />
                        </div>
                        <div className='card'>
                            <ProfilePic src={contact} />
                            <ProgressBar title="User E" progress="50" />
                        </div>

                    </div>

                </section>
            </Container>
        </Wrapper>
    )
}

export default Feed