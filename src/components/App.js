// create your App component here

import { useEffect, useState } from "react"

function App() {

    const [dogImage, setDogImage] = useState([])


   useEffect(() => {
    const fetchImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then(data => setDogImage(data.message))
        .catch(error => console.error('Error fetching dog image:', error));
    }
    fetchImage();

    setInterval(fetchImage, 5000)
    },[])

   if(!dogImage) {
    return <p>Loading...</p>
   }
    

    return(
        <div>

            <img src={dogImage} alt="A Random Dog"/> 
        </div>
    )
}

export default App