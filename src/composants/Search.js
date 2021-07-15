import { useState, useEffect} from 'react';

import '../assets/css/Search.css';


function Search() {

    const[musiques, setMusiques] = useState([])

    const deezerApi = () => {
        var search = document.getElementById('search')
        // fetch(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${search.value}`)
        fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem')
        .then((result) => {
            console.log(result)
        })
        .catch((error)=>console.log(error))
    }

    return (
        <div className="recherche-container">
            <input className="search-bar" type="search" id="search" name="recherche" placeholder="entrez le nom d'un artiste ou d'une chanson Ex: Daft Punk"></input>
            <button onClick={deezerApi} name="rechercher" id="rechercher" type="submit">Trouver l'artiste </button>
        </div>
    )
}

export default Search
