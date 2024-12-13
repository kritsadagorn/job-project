import './GoButton.css'
import { Link } from "react-router-dom";

export default function GoButton (){
    return (
        <div className="buttonCon">
            <Link to="/position/comeng" className='goText'>
                <div className='go-Box'>
                    GO EXPLORE
                </div>
            </Link>
        </div>
    );  
}