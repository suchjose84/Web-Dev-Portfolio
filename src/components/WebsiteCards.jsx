import { useNavigate } from "react-router-dom";
import { websites } from "../assets/data/websites";

export default function WebsiteCards() {

    const navigate = useNavigate();

    const handleClickCard = () => {
        navigate("/projects");
    }

    return(
        <>
            <ul className="websiteCardList">
                {websites.websites.map((website, index) => (
                <li className="bg-snow" key={index} onClick={handleClickCard}>
                    <h2 className="bluish">{website.title}</h2>
                    <img src={website.image} alt={website.title} />
                    <p className="bluish">{website.description}</p>
                </li>
                ))}
            </ul>
        </>
    )

}