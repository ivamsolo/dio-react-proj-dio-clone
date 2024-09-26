import React, { useContext } from 'react'
import { Container } from "./styles";
import ProfilePic from "../ProfilePic";
import { contact, chevron } from '../Icons'
import { Link } from 'react-router-dom'
import {LoginContext} from "../../contexts/LoginContext"


const ProfileMenuDropDown = () => {
    const {setAuthedUser} = useContext(LoginContext)

    return (
        <Container>
            <ProfilePic src={contact} />
            <label htmlFor="dropdown">
                <img className="chevron" src={chevron} />
            </label>
            <input type="checkbox" name="" id="dropdown" />
            <div className="dropdown">
                <Link to="/" onClick={() => {setAuthedUser(false)}}>Logout</Link>
            </div>
        </Container>

    )
}

export default ProfileMenuDropDown