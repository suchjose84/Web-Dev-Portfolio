
import { useNavigate } from "react-router-dom";
import { websites } from "/public/data/websites";

export default function WebsiteCards() {
    const navigate = useNavigate();

    const handleClickCard = (websiteId) => {
        navigate(`/projects/${websiteId}`);
    };

    return (
        <ul className="websiteCardList">
            {websites.map((website) => (
                <li
                    className="bg-snow"
                    key={website.id}
                    onClick={() => handleClickCard(website.id)}
                >
                    <div className="websiteCardHeader">
                        <h2 className="bluish">{website.title}</h2>

                        {website.status && (
                            <span className="projectStatus">
                                {website.status}
                            </span>
                        )}
                    </div>

                    <img
                        src={website.image.desktop}
                        alt={website.title}
                    />

                    <p className="bluish">
                        {website.description}
                    </p>
                </li>
            ))}
        </ul>
    );
}
