// api.js
const sendPaymentData = async (data) => {
    console.log(data);
    // Mocking API call with a delay to simulate asynchronous behavior
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomStatusCode = Math.random() < 0.7 ? 200 : Math.random() < 0.9 ? 400 : 500;
        if (randomStatusCode === 200) {
          resolve({ success: true, data });
        } else if (randomStatusCode === 400) {
          resolve({ error: 'Bad Request' });
        } else {
          resolve({ error: 'Server Error' });
        }
      }, 1000); // Simulating a 1-second delay
    });
  };
  
  export default sendPaymentData;
  