import './Home.css';

const Home = () => {
    return (
        <div className="home1">
            <main className="homeMain">
            <h2>HELLO!! EXPLORE OUR CONTENT REGARDING INDIAN PREMIER LEAGUE </h2>
            {/* Add some content here to make the page scrollable */}
            <div className="content">
            
                {/* You can repeat or add more content to ensure the page is scrollable */}
            </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>  “You don’t win or lose the games because of the 11 you select. You win or lose with that those 11 do on the field.”  – Rahul Dravid.</p>
                    <p style={{"font-size":"15px", "font-weight":"lighter"}}>Stay with us:</p>
                    <div className="social-media-icons">
                        <a href="https://www.instagram.com/divya_sri770?igsh=MXFpbmg5OGR4dWR0ZQ==" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Instagram_logo.png" alt="Instagram" />
                        </a>
                        <a href="https://youtube.com/@divyasribarmavath?si=H351eOwHlAsEwA0n">
                            <img src="/images/Youtube-Icon.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
