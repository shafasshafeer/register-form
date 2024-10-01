// src/RegistrationForm.jsx
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let validationErrors = {};
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.address) validationErrors.address = 'Address is required';
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      validationErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.gender) validationErrors.gender = 'Gender is required';
    if (!formData.dob) validationErrors.dob = 'Date of birth is required';
    if (!formData.course) validationErrors.course = 'Course selection is required';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h1>Higher Secondary Admission Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        
        <div>
          <label>Mobile:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>
        
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        
        <div>
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>

        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>Cancel</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
