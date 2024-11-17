import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './Search.css'
const Search = () => {  
    const navigate = useNavigate(); 
    const handleButtonClick = () => {
        navigate('/'); 
    };
    return (
        <div className="search">
            <button onClick={handleButtonClick}>X</button>
            <div className="container">
                <div className="row">
                    <div className="search-text">
                        <input type="text" placeholder="Type to search" className="col-8" />
                        <FontAwesomeIcon icon={faSearch} className="col-4"/>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Search;