import React, { useState } from "react";

function EditCustomer({ editForm, handleCustomerUpdate, handleChange }) {
  let { id, name, email, phone } = editForm;
  const [isSubmitting, setIsSubmitting] = useState(false);
  // PATCH request; calls handleCustomerUpdate to push changes to the page
  function handleEditForm(e) {
    e.preventDefault();
    setIsSubmitting(true); // disable submit while processing

    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    })
      .then((resp) => resp.json())
      .then((updatedCustomer) => {
        handleCustomerUpdate(updatedCustomer);
        setIsSubmitting(false); // re-enable submit
      })
      .catch(() => setIsSubmitting(false)); // handle error
  }

  return (
    <div>
      <h4>Edit Customer</h4>
      <form onSubmit={handleEditForm}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input type="text" name="email" value={email} onChange={handleChange} />
        <input type="text" name="phone" value={phone} onChange={handleChange} />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Changes"}
        </button>
      </form>
    </div>
  );
}
export default EditCustomer;
