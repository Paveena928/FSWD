import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Required Name Validation
    if (!name) {
      formErrors.name = "Name is required";
    }

    // Email Regex Validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    // Range Validation(Age 18-60)
    if (!age) {
      formErrors.age= "Age is required";
    } else if (age<18||age>60) {
      formErrors.age = "age must be between 18 and 60";
    }

    // Password Length Validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // Compare Validation
    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, phone, password });
    }
  };

  const styles = {
    container: {
      width: "350px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "pink",
      boxShadow: "0 0 10px grey(0,0,0,0.1)"
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "10px",
      borderRadius: "4px",
      border: "1px solid black"
    },
    button: {
      width: "100%",
      padding: "10px",
      marginTop: "15px",
      backgroundColor: "purple",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    error: {
      color: "red",
      fontSize: "13px"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>Validation Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={styles.error}>{errors.name}</p>

        <input
          type="text"
          placeholder="Enter Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={styles.error}>{errors.email}</p>

        <input
          type="number"
          placeholder="Enter Age"
          style={styles.input}
          onChange={(e) => setAge(e.target.value)}
        />
        <p style={styles.error}>{errors.age}</p>

        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={styles.error}>{errors.password}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <p style={styles.error}>{errors.confirmPass}</p>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
