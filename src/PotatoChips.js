
import MediaCard3 from "./MediaCard3"
import React, {useState} from 'react';




const PotatoChips = () => {

   
       
    const [media3, setMedia3] = useState([
        {id:100,
name:"V.R. Troopers",
picture:"https://utellyassets9-1.imgix.net/api/Images/9cc3bcc3e1843c8ccadd18410fb32b42/Redirect",
rating:4,
description:"https://www.imdb.com/title/tt0108978",
extra_info:"Netflix",
extra_url:"https://www.netflix.com/title/70183211",
},
{id:200,
    name:"Ghost in the Shell",
    picture:"https://utellyassets9-1.imgix.net/api/Images/4f77c1cd27eeddb739756094ff0eef58/Redirect",
    rating:5,
    description:"https://www.imdb.com/title/tt0113568",
    extra_info:"Google Play",
    extra_url:"https://play.google.com/store/movies/details/Ghost_in_the_Shell?gl=US&hl=en&id=sDR8Vw0ZY28",
    },
    { id:300,
        name:"Samurai Champloo",
        picture:"https://utellyassets9-1.imgix.net/api/Images/4890d7b079c148007f87aa4abc664735/Redirect",
        rating:5,
        description:"https://www.imdb.com/title/tt0423731",
        extra_info:"Amazon Instant Video",
        extra_url:"https://watch.amazon.com/detail?asin=B002IVG9E0&creativeASIN=B002IVG9E0&ie=UTF8&linkCode=xm2&tag=utellycom00-21",
        

    }

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



export default PotatoChips;