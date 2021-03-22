import {useState, useEffect} from 'react'

const useInitialState = (API)=> {//*1
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch(API)//*2
            .then(response => response.json())
            .then(data =>setVideos(data))

    },[]);
    return videos; //*3  (para retornar el estado que tenemos)

}

export default useInitialState