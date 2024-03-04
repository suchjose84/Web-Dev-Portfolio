import WebsiteCards from "../components/WebsiteCards";

export default function HomePage(){
    return(
        <>
            <main className="main-home">
                <section>
                    <span className="mainHello limeGreen">
                        <p>Hi, my name is</p>
                    </span>
                    <h1 className="syne">JOSE SUCH.</h1>
                    <h1 className="greyish syne">Web Developer.</h1>

                    <p className="description">I am a new web developer with a passion for creating dynamic and user-friendly
                        web
                        applications.</p>
                    <p className="description">
                        As a developer, I specialize in <span className="limeGreen">frontend</span> technologies, bringing
                        creative and responsive designs to life. My
                        expertise extends from crafting engaging user interfaces using frameworks like <span
                            className="limeGreen">Angular</span> and <span className="limeGreen">React</span> to
                        seamlessly integrating <span className="limeGreen">backend</span> functionalities, making me well-versed
                        in the art of <span className="limeGreen">full-stack development.</span>
                    </p>
                </section>
                <section id="workSection">
                    <br></br>
                    <h2 className="syne">My Projects</h2>
                    <p>Please click the cards for more information about these websites</p>
                    <WebsiteCards />
                </section>
            </main>
        </>
    );
}
