async function getImages(setNewData,page) {
    const requestURL = "https://jsonplaceholder.typicode.com/photos?_limit=6&_page="+page.toString()
    try {
        await fetch(requestURL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                alert("Произошла ошибка,попробуйте позже")
            })
            .then((response) => {
                setNewData(response)
            });

    } catch (e) {
        alert("Произошла ошибка,попробуйте позже")
    }
}

export default getImages















/*function getImages() {
    return new Promise((resolve,reject)=> {

        const method = "GET";
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=3";
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
        }
        xhr.onerror=()=>{
            reject(xhr.response)
        }
        console.log(xhr.response);
        xhr.send()
    })
}


export default getImages*/