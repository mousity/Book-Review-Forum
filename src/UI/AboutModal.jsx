export default function About ({ isVisible, hideModal }) {
    if(!isVisible) { return null; }

    return (
        <div className="aboutModal">
            <div className="aboutModalTop">
                <h1>About Us</h1>
                <button className="exit" onClick={hideModal}>X</button>
            </div>
            <p className="aboutModalContent">

            </p>
        </div>
    )
}