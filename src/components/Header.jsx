import { Link } from "react-router-dom";
import Nav from "./Nav";
export default function Header() {

    const openPdfInNewTab = () => {
        const pdfUrl = '/src/assets/resume/jose-such-resume.pdf';
        window.open(pdfUrl, '_blank');

    };


    return (
        <>
        <header className="header">
            <div className="headerLeftSide">
            <Link to="/"><img className='portfolio-logo' src="/src/assets/logos/png/logo-no-background3.png" alt="Portfolio Logo" /></Link>
            </div>
            <div className="headerRightSide">
                <Nav />
                <div onClick={openPdfInNewTab} className="resumeButton">
                    <div id="resume-button" className="bg-limeGreen">Resume</div>
                </div>


            </div>
            

        </header>

        
        </>

    );
}