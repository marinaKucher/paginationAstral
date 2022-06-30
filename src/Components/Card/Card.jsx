import './Card.css';
import React, {useState} from "react";
import styled from '@emotion/styled'

function Card(props){
    const [heartLiked, setHeartLiked] = useState(false);

    const I = styled.i
        `color: ${props => props.Liked ? 'red' : 'black'};
        margin-bottom: 2%`

    function changeLiked (){
             setHeartLiked(!heartLiked)
    }

    return (
        <div className="card" >
            <div className="cardContentContainer">
                <img  className="cardImg" src={props.urlImgContent} alt="здесь ожидалась картинка" ></img>
                <span className="cardText">Дата добавления: <br></br> {props.dateOfCreation}</span>
                <I Liked={heartLiked} className="fa fa-heart"  aria-hidden="true" onClick={changeLiked} ></I>
            </div>
        </div>
    )

}
export default Card