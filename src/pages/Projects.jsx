import { useEffect, useState } from "react";
import { websites } from "../../public/data/websites";
import { useParams } from "react-router-dom";

export default function ProjectsPage() {
    const { websiteId } = useParams();
    const [website, setWebsite] = useState(null);

    useEffect(() => {
        const selectedWebsite = websites.find((site) => site.id === websiteId);
        setWebsite(selectedWebsite);
        console.log(selectedWebsite);
    }, [websiteId]);

    useEffect(() => {
        if(website) {
            document.title = `Web Dev Portfolio | ${websites.title}`;
        }
        
    }, [website]);
    if (!website) {
        return <div>Cannot load website information</div>;
    }

    return (
        <main className="main-projects">
            <section>
                <h3>Project - {website.title}</h3>
                <div className="projects-hero-image-box">
                    <figure className="figureDesktop">
                        <img src={website.image.desktop} alt={website.title} />
                        <figcaption className="projects-figure-caption">{website.title} - Desktop View</figcaption>
                    </figure>
                    <figure>
                        <img src={website.image.mobile} alt={website.title}/>
                        <figcaption className="projects-figure-caption">{website.title} - Mobile View</figcaption>
                    </figure>
                </div>
                <p>Website URL: <span><a className="project-link" href={website.url} rel="noreferrer" target="_blank">{website.url}</a></span></p>
                <p>{website.description}</p>
                <p>Platform: {website.platform}</p>
            </section>
        </main>

    );


}