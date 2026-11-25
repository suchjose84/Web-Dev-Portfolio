
import WebsiteCards from "../components/WebsiteCards";

export default function HomePage() {
    return (
        <>
            <main className="main-home">
                <section>
                    <span className="mainHello limeGreen">
                        <p>Hi, my name is</p>
                    </span>

                    
                    <h1 className="syne">JOSE SUCH.</h1>
                    <h1 className="greyish syne">Web Developer.</h1>

                    <p className="description">
                        I am a web developer passionate about building modern,
                        responsive, and user-friendly web applications.
                    </p>

                    <p className="description">
                        I have hands-on experience developing full-stack applications
                        using technologies such as <span className="limeGreen">Angular</span>,
                        <span className="limeGreen"> React</span>,
                        <span className="limeGreen"> Node.js</span>,
                        and <span className="limeGreen">.NET</span>.
                        I also work with databases like
                        <span className="limeGreen"> MongoDB</span> and
                        <span className="limeGreen"> PostgreSQL</span>.
                    </p>

                    <p className="description">
                        I continuously expand my skills through personal projects
                        and practical application development, with a focus on
                        writing clean code and creating solutions to real-world problems.
                    </p>

                </section>

                <section id="workSection">
                    <br />
                    <h2 className="syne">My Projects</h2>
                    <p>
                        Explore some of the applications I've designed and
                        developed. Select a project to learn more about it.
                    </p>

                    <WebsiteCards />
                </section>
            </main>
        </>
    );
}
