import Card from "../Card/Card";
import getCurrentDate from "../../СomponentLogicMethods/getCurrentDate";
import React from "react";

function AllCards(props) {
    if (props.data == null) {return null}
    const arrOfCards = props.data.map((card) =>
        <Card key={props.data.indexOf(card)}  dateOfCreation={getCurrentDate(card.id)} urlImgContent={card.url}/>
    );
    return (arrOfCards);
}

export default AllCards



