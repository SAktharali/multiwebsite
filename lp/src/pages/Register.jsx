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
      <NavBar />
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className='container mt-5'>
        <h2 className='text-center'>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='fname'>First Name:</label></strong>
              <input type='text' id='fname' className='form-control' placeholder='Enter your first name' value={formData.fname} onChange={handleChange} />
              {formErrors.fname && <div className='text-danger'>{formErrors.fname}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='lname'>Last Name:</label></strong>
              <input type='text' id='lname' className='form-control' placeholder='Enter your last name' value={formData.lname} onChange={handleChange} />
              {formErrors.lname && <div className='text-danger'>{formErrors.lname}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='email'>Email:</label></strong>
              <input type='email' id='email' className='form-control' placeholder='Enter your email' value={formData.email} onChange={handleChange} />
              {formErrors.email && <div className='text-danger'>{formErrors.email}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='mobile'>Mobile Number:</label></strong>
              <input type='text' id='mobile' className='form-control' placeholder='Enter your mobile number' value={formData.mobile} onChange={handleChange} />
              {formErrors.mobile && <div className='text-danger'>{formErrors.mobile}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='password'>Password:</label></strong>
              <input type='password' id='password' className='form-control' placeholder='Enter your password' value={formData.password} onChange={handleChange} />
              {formErrors.password && <div className='text-danger'>{formErrors.password}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='confirmPassword'>Confirm Password:</label></strong>
              <input type='password' id='confirmPassword' className='form-control' placeholder='Confirm your password' value={formData.confirmPassword} onChange={handleChange} />
              {formErrors.confirmPassword && <div className='text-danger'>{formErrors.confirmPassword}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label>Gender:</label></strong><br />
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='male' value='male' onChange={handleGenderChange} checked={formData.gender === 'male'} />
                <label className='form-check-label' htmlFor='male'>Male</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='female' value='female' onChange={handleGenderChange} checked={formData.gender === 'female'} />
                <label className='form-check-label' htmlFor='female'>Female</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='others' value='others' onChange={handleGenderChange} checked={formData.gender === 'others'} />
                <label className='form-check-label' htmlFor='others'>Others</label>
              </div>
              {formErrors.gender && <div className='text-danger'>{formErrors.gender}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label>Marital Status:</label></strong><br />
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='relationship' id='single' value='single' onChange={handleRelationshipChange} checked={formData.relationship === 'single'} />
                <label className='form-check-label' htmlFor='single'>Single</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='relationship' id='married' value='married' onChange={handleRelationshipChange} checked={formData.relationship === 'married'} />
                <label className='form-check-label' htmlFor='married'>Married</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='relationship' id='widow' value='widow' onChange={handleRelationshipChange} checked={formData.relationship === 'widow'} />
                <label className='form-check-label' htmlFor='widow'>Widow</label>
              </div>
              {formErrors.relationship && <div className='text-danger'>{formErrors.relationship}</div>}
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <strong><label htmlFor='dob'>DOB:</label></strong>
              <input type='date' id='dob' className='form-control' placeholder='Confirm your password' value={formData.dob} onChange={handleChange} />
              {formErrors.dob && <div className='text-danger'>{formErrors.dob}</div>}
            </div>
          </div>
          <div className='row'>
            <div className='col-12 text-center'>
              <button type='submit' className='btn btn-primary' style={{ width: '50%' }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Register;

