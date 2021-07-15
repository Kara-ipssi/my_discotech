import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/Navbar.css";

export default function Navbar() {

    const[toggleMenu, setToggleMenu] = useState(true);
    const[largeur, setLargeur] = useState()

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () =>{
            setLargeur(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false)
            }
        }


        window.addEventListener("resize", changeWidth)

        return () => {
            window.addEventListener("resize", changeWidth)
        }
    // eslint-disable-next-line
    }, [])

    return (
        <nav>
            {/* short curcuit opérator */}
            {toggleMenu | largeur > 500 &&  (
                <ul className="liste">
                    <NavLink to="/" exact className="items items-link" activeClassName="active-item">Accueil</NavLink>
                    <NavLink to="/musique" exact className="items items-link" activeClassName="active-item">Musique</NavLink>
                    <NavLink to="/favoris" exact className="items items-link" activeClassName="active-item">Mes Favoris</NavLink>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="btn">MENU</button>
        </nav>
    )
}
