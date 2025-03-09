import {useState} from "react";



const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };

    // Validate form fields
  const validateForm = () => {
    let errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!password.trim()) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Registration Successful!");
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    }
  };
  return (
    <div>
    <h2>User Registration</h2>
    <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div >
          <label >Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
    </form>
    </div>
  );
}

export default RegistrationForm;
