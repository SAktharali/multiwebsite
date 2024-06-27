import React, { useState } from 'react';
import NavBar from './NavBar';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    gender: '',
    relationship: '',
    dob: ''
  });

  const [formErrors, setFormErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    gender: '',
    relationship: '',
    dob: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' }); // Clear error once user starts typing
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleRelationshipChange = (e) => {
    setFormData({ ...formData, relationship: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert('form successfully submitted')
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        gender: '',
        relationship: '',
        dob: ''
      });
      setShowModal(false); // Hide modal on successful submission
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fname.trim()) {
      errors.fname = 'First Name is required';
    }
    if (!formData.lname.trim()) {
      errors.lname = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile Number must be 10 digits';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.relationship) {
      errors.relationship = 'Marital Status is required';
    }
    if (!formData.dob) {
      errors.dob = 'Date of Birth is required';
    }
    return errors;
  };

  return (
    <>
      <NavBar setShowModal={setShowModal}/>
      <div className="container">
        <div
          className={`modal fade ${showModal ? 'show' : ''}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: showModal ? 'block' : 'none', paddingRight: showModal ? '17px' : '0' }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Register Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="fname">First Name:</label>
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={formData.fname}
                        onChange={handleChange}
                      />
                      {formErrors.fname && (
                        <div className="text-danger">{formErrors.fname}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="lname">Last Name:</label>
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="Enter your last name"
                        value={formData.lname}
                        onChange={handleChange}
                      />
                      {formErrors.lname && (
                        <div className="text-danger">{formErrors.lname}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <div className="text-danger">{formErrors.email}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="mobile">Mobile Number:</label>
                      <input
                        type="text"
                        id="mobile"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {formErrors.mobile && (
                        <div className="text-danger">{formErrors.mobile}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {formErrors.password && (
                        <div className="text-danger">{formErrors.password}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {formErrors.confirmPassword && (
                        <div className="text-danger">{formErrors.confirmPassword}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label>Gender:</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          onChange={handleGenderChange}
                          checked={formData.gender === 'male'}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          onChange={handleGenderChange}
                          checked={formData.gender === 'female'}
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="others"
                          value="others"
                          onChange={handleGenderChange}
                          checked={formData.gender === 'others'}
                        />
                        <label className="form-check-label" htmlFor="others">
                          Others
                        </label>
                      </div>
                      {formErrors.gender && (
                        <div className="text-danger">{formErrors.gender}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label>Marital Status:</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="relationship"
                          id="single"
                          value="single"
                          onChange={handleRelationshipChange}
                          checked={formData.relationship === 'single'}
                        />
                        <label className="form-check-label" htmlFor="single">
                          Single
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="relationship"
                          id="married"
                          value="married"
                          onChange={handleRelationshipChange}
                          checked={formData.relationship === 'married'}
                        />
                        <label className="form-check-label" htmlFor="married">
                          Married
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="relationship"
                          id="widow"
                          value="widow"
                          onChange={handleRelationshipChange}
                          checked={formData.relationship === 'widow'}
                        />
                        <label className="form-check-label" htmlFor="widow">
                          Widow
                        </label>
                      </div>
                      {formErrors.relationship && (
                        <div className="text-danger">{formErrors.relationship}</div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="dob">DOB:</label>
                      <input
                        type="date"
                        id="dob"
                        className="form-control"
                        placeholder="Confirm your password"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                      {formErrors.dob && (
                        <div className="text-danger">{formErrors.dob}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '50%' }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
