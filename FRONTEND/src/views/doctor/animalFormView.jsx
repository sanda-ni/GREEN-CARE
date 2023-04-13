import React, { useState } from "react";
import AppHeader from "../header";
import "./animalForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
  subject: "",
  animalSpecies: "",
  weight: "",
  age: "",
  attachment: "",
  description: "",
};

export const AnimalForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^(0\d{9})$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
    }

    if (!formData.animalSpecies) {
      errors.animalSpecies = "Animal species is required";
    }

    if (!formData.weight) {
      errors.weight = "Weight is required";
    } else if (!/^[0-9]+$/.test(formData.weight)) {
      errors.weight = "Weight is invalid";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    } else if (!/^[0-9]+$/.test(formData.age)) {
      errors.age = "Age is invalid";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData(initialState);
    }
  };

  const handleClear = () => {
    setFormData(initialState);
    setErrors({});
  };

  return (
    <section id="learnMore" className="hero-block">
      <header id="header">
        <AppHeader />
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span>{errors.subject}</span>}
        </div>
        <div>
          <label htmlFor="animalSpecies">Animal Species</label>
          <input
            type="text"
            name="animalSpecies"
            value={formData.animalSpecies}
            onChange={handleChange}
          />
          {errors.animalSpecies && <span>{errors.animalSpecies}</span>}
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
          {errors.weight && <span>{errors.weight}</span>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>
        <div>
          <label htmlFor="attachment">Attachment</label>
          <input type="file" name="attachment" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default AnimalForm;