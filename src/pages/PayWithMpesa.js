import React, { useState } from "react";
import "./PayWithMpesa.css"; // Ensure you have basic styles

function PayWithMpesa() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validateInputs = () => {
    const phoneRegex = /^2547\d{8}$/;
    const validPhone = phoneRegex.test(phone);
    const validAmount = !isNaN(amount) && Number(amount) > 0;

    if (!validPhone) return "Enter a valid phone number (format: 2547XXXXXXXX)";
    if (!validAmount) return "Enter a valid amount greater than 0";
    return "";
  };

  const handlePay = async () => {
    setError("");
    setSuccess("");
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://insurance-backend.onrender.com/api/mpesa/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "STK Push failed");
      setSuccess("✅ STK Push sent! Check your phone to complete the payment.");
    } catch (err) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="mpesa-background"
      style={{
        backgroundImage: "url('/images/mpesa-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        className="mpesa-container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#0d6efd" }}>Pay with M-Pesa</h2>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone e.g. 2547XXXXXXXX"
          className="mpesa-input"
          style={inputStyle}
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (KES)"
          className="mpesa-input"
          style={inputStyle}
        />

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <button
          onClick={handlePay}
          disabled={loading}
          className="mpesa-button"
          style={buttonStyle}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#0d6efd",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default PayWithMpesa;
