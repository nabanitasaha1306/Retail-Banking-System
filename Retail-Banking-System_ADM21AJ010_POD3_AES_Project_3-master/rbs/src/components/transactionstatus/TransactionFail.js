import './ts.css';
import wrong from './wrong.png';
const TransactionFail = props => {
    
    

    return ( 
        
        <div className="popup-box">
            <div className="box">
                {/* handleClick={() => { }} */}
                <button className="okbtn" onClick={props.handleClick}>
                    Ok
                </button>
                <div className="pop-up-content">
                    <img src={wrong} height={100}></img>
                </div>
                <div className='name'>
                    Transaction Failed
                </div>
            </div>
        </div>
     );
}
 
export default TransactionFail;