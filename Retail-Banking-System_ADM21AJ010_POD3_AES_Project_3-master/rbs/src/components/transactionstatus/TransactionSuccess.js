import './ts.css';
import tick from './tick.jpg';
import { Link } from 'react-router-dom';
const TransactionSuccessPopUp = props => {
    
    

    return ( 
        
        <div className="popup-box">
            <div className="box">
                {/* handleClick={() => { }} */}
                <button className="okbtn" onClick={props.handleClick}>
                    
                    <Link to = "/home">
                         Ok
                    </Link>
                
                </button>
                <div className="pop-up-content">
                    <img src={tick} height={100}></img>
                </div>
                <div className='name'>
                    Transaction Successful
                </div>
            </div>
        </div>
     );
}
 
export default TransactionSuccessPopUp;