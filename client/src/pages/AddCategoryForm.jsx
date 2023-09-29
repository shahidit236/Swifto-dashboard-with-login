import React, { useState } from 'react';

const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary form validation

    // Submit the form data
    const formData = {
      name: categoryName
    };

    // Call an API endpoint or perform any required action with the form data
    // For now, let's just log it to the console
    console.log(formData);

    // Reset the form
    setCategoryName('');
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <label className='m-2 '>
        Category Name:
        <input type="text" value={categoryName}  className='form-control  m-2'  onChange={handleInputChange} />
      </label><br/>
      <button type="submit" className='btn btn-primary text-success m-2 ml-5'>Add Category</button>
    </form>
  );
};

export default AddCategoryForm;