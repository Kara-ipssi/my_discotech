import '../../assets/css/musiques/MusiqueCard.css'
// import play from '../../assets/pictos/play.png'

function MusiqueCard() {
    return (
        <div className="musique-card">
            <img className="img-profile" src="https://i.scdn.co/image/ab6761610000e5eb027ff0ef7c6a7de05221b608" alt="profile"></img>
            <div className="details-profile">
                <p className="name-profile">Nom de l'artiste</p>
                <p className="album-profile">artiste / album</p>
                <div className="action-profile">
                    <button className="btn-action btn-ecouter"> Play</button>
                    <button className="btn-action btn-fav">add to fav</button>
                </div>
            </div>
        </div>
    )
}

export default MusiqueCard
