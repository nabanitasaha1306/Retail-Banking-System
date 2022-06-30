import React from "react";
import {Link }from "react-router-dom"; 
const Send = () => {
    return (
        <div className="send">
        <h2>TRANSFER</h2>
        <form>
        <label> Beneficiary Name:</label>
        <input type="text"
        required
        />

        <label>Account Number:</label>
        <input 
        type="number"
        required
        />

        <label>Confirm Account Number:</label>
        <input 
        type="number"
        required
        />

        <label>Amount:</label>
        <input 
        type="number"
        required
        />

        <button >
        <Link to ="/transactionstatus">
        Send
        </Link>
       </button>

        </form>
        </div>
    );
}
export default Send;