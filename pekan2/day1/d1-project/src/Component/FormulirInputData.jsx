import { useState } from "react";
import React from "react";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Nama, setNama] = useState("");
  const [namaError, setNamaError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      setEmailError('Email harus mengandung karakter "@"');
    } else {
      setEmailError("");
    }
  };
  const validatePassword = (pw) => {
    if (pw.length < 6) {
      setPasswordError("Password harus memiliki minimal 6 karakter");
    } else {
      setPasswordError("");
    }
  };
  const validateNama = (nama) => {
    if (nama.trim() === "") {
      setNamaError("Nama tidak boleh kosong");
    } else {
      setNamaError("");
    }
  };

  const nameChange = (e) => {
    const newNama = e.target.value;
    setNama(newNama);
    validateNama(newNama); // Validasi real-time
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); // Validasi real-time
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validasi real-time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulir dengan Validasi</h2>
      <div>
        <label>
          Nama:
          <input type="text" value={Nama} onChange={nameChange} />
        </label>
        {namaError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{namaError}</p>
        )}
      </div>
      <div>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        {emailError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{emailError}</p>
        )}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {passwordError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{passwordError}</p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default ValidationForm;
