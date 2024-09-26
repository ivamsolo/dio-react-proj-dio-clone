import React from "react";
import { Container } from "./styles";
import ProfilePic from "../ProfilePic";
import { contact } from '../Icons'

const Post = ({cover, title, content}) => {
    return (
        <Container>
            {
                cover ? 
                <div className="header">
                    <img src={cover} />
                </div> : null
            }

            <div className="body">
                <div className="user-info">
                    <ProfilePic src={contact} />
                    <div>
                        <h3>User name</h3>
                        <p>Há ? minutos</p>
                    </div>
                </div>
                <div className="content">
                    <h3>
                        {title ? title : 'Post title'}
                    </h3>
                    <p>
                        {content ? content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Post