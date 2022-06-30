import './App.css';
import React, {useEffect, useState} from 'react';
import getImages from "../RequestMethods/GetImages";
import AllCards from "../Components/AllCards/AllCards";

function App() {
    const [images,setImages] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [fetching,setFetching] = useState(true);

    function getNewImages(){
        setFetching(!fetching)
        setCurrentPage(currentPage+1)
        console.log("новый фетчинг при нажатии")
    }

    useEffect(() => {
        console.log("зашел сюда")
        getImages(function (infoAboutImages) {
            console.log(infoAboutImages)
            setImages(images.concat(infoAboutImages))
        },currentPage)

    }, [fetching]);

    return (
    <div className="intro">
        <div className="maincontant">
            <div className="cardcontainer">
                <div className="cardcontent">
                    <AllCards data ={images}  />
                </div>
            </div>
        </div>
        <div className="footer">
            <button className="footerbutton" onClick={getNewImages} > Загрузить ещё</button>
        </div>
    </div>
    );
}

export default App;
