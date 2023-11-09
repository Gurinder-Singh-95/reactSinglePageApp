// PaymentDialog.js
import React, { useState } from 'react';
import sendPaymentData from "../api/api";

const PaymentDialog = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('USD');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    let data = {to, from, amount, description};
    sendPaymentData(data);
  };

  return (
    <div>
      <label>
        To:
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Enter valid email"
        />
      </label>

      <label>
        From:
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />
      </label>

      <button onClick={handleSubmit} disabled={!to || !amount}>
        Submit
      </button>
    </div>
  );
};

export default PaymentDialog;
