import { useState } from "react";

function Premium() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    setShowPopup(true);
    setStep(4);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div style={styles.container}>

      {/* Blur only before payment */}
      {step !== 4 && <div style={styles.overlay}></div>}

      {/* CENTER BOX */}
      <div style={styles.box}>

        {step === 1 && (
          <button style={styles.button} onClick={() => setStep(2)}>
            Go Premium
          </button>
        )}

        {step === 2 && (
          <>
            <button style={styles.button} onClick={() => setStep(3)}>
              📱 PhonePe
            </button>
            <button style={styles.button} onClick={() => setStep(3)}>
              💳 Google Pay
            </button>
          </>
        )}

        {step === 3 && (
          <div>
            <h3>Select Amount</h3>
            <button style={styles.amountBtn} onClick={handlePayment}>₹20</button>
            <button style={styles.amountBtn} onClick={handlePayment}>₹50</button>
            <button style={styles.amountBtn} onClick={handlePayment}>₹100</button>
          </div>
        )}

      </div>

      {/* POPUP */}
      {showPopup && (
        <div style={styles.popup}>
          ✅ Payment Successful
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: "url('/premium-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)"
  },
  box: {
    position: "relative",
    zIndex: 2,
    background: "rgba(0,0,0,0.7)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white"
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "yellow",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  amountBtn: {
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer"
  },
  popup: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 5
  }
};

export default Premium;