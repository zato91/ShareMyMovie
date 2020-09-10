
import MediaCard3 from "./MediaCard3"
import React, {useState} from 'react';




const MAD_Dog = () => {

   
       
    const [media3, setMedia3] = useState([
        {id:400,
name:"Mr. Robot",
picture:"https://utellyassets9-1.imgix.net/api/Images/96efd4c3174656b7ddf4ef4a2cc0e7e6/Redirect",
rating:5,
description:"https://www.imdb.com/title/tt4158110",
extra_info:"iTunes",
extra_url:"https://itunes.apple.com/us/tv-season/whoami/id1476331264?i=1492613018",
},
{id:400,
    name:"Wolf's Rain",
    picture:"https://utellyassets9-1.imgix.net/api/Images/6125b5af259c29d53034edc5bbb8ac04/Redirect",
    rating:5,
    description:"https://www.imdb.com/title/tt0113568",
    extra_info:"Amazon Instant Video",
    extra_url:"https://play.google.com/store/movies/details/Ghost_in_the_Shell?gl=US&hl=en&id=sDR8Vw0ZY28",
    },
    

    ])

    function handleDelete(id){
        let za = media3.filter(med=> med.id !== id)
         setMedia3(za)
       }

    return( <>
             <div id="media3"> 
             { media3.map(film =>
                    <MediaCard3 style={{display:"inline-block"}} film={film} handleDelete={handleDelete}/>
        
        )} 
            </div></>
)};



export default MAD_Dog;