export default function About ({ isVisible, hideModal }) {
    if(!isVisible) { return null; }

    return (
        <div className="aboutModal">
            <div className="aboutModalTop">
                <h1 className="aboutTitle">About Us</h1>
                <button className="exit" onClick={hideModal}>X</button>
            </div>
            <p className="aboutModalContent">
                We're a website all about helping you find your comfiest reads! 
                Search by title or author; we have it all! Our amazing selection of just under 10 books
                 will leave you wanting more than ever! Want to donate? We don't take any! This 
                 site is completely funded by my sweat and tears!
            </p>
        </div>
    )
}