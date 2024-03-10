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
                <ul className="project-description-list">
                    <li><span className="bold">Website URL: </span><a href={website.url} target="_blank" rel="noreferrer">{website.title}</a></li>
                    <li><span className="bold">About the website: </span>{website.about}</li>
                    <li><span className="bold">Coding languages used: </span>{website.platform}</li>

                </ul>
                
            </section>
        </main>

    );


}