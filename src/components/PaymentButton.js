// PaymentButton.js
import React, { useState } from 'react';
import PaymentDialog from "./PaymentDialog";

const PaymentButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Payment Dialog</button>
      {isDialogOpen && <PaymentDialog />}
    </div>
  );
};

export default PaymentButton;
