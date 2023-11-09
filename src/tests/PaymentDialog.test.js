// PaymentDialog.js
import React, { useState } from 'react';
import sendPaymentData from './api';

const PaymentDialog = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('USD');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await sendPaymentData({ to, from, amount, description });

      if (response.success) {
        setSuccess(true);
      } else if (response.error) {
        setError(response.error);
      } else {
        setError('Unexpected error occurred');
      }
    } catch (err) {
      setError('Server error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ... (previous code) */}

      <button onClick={handleSubmit} disabled={!to || !amount || loading}>
        Submit
      </button>

      {loading && <p>Sending payment data...</p>}
      {success && <p>Payment successful! Display Success Dialog here.</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default PaymentDialog;
