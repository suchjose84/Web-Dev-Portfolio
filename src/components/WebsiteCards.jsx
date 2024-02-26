import { useNavigate } from "react-router-dom";
import { websites } from "/public/data/websites";

export default function WebsiteCards() {
    const navigate = useNavigate();

    const handleClickCard = (websiteId) => {
        navigate(`/projects/${websiteId}`);
    }

    return (
        <ul className="websiteCardList">
            {websites.map((website, index) => (
                <li className="bg-snow" key={index} onClick={() => handleClickCard(website.id)}>
                    <h2 className="bluish">{website.title}</h2>
                    <img src={website.image.desktop} alt={website.title} />
                    <p className="bluish">{website.description}</p>
                </li>
            ))}
        </ul>
    );
}

