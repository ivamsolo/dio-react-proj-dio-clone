import React from "react";
import { Container } from "./styles";

const ProgressBar = ({title, progress}) => {
    return (
        <Container progress={progress}>
            <h3 className='title'>{title}</h3>
            <div className='bar'>
                <div className='progress' />
            </div>
        </Container>
    )
}

export default ProgressBar;