import React, { useState } from "react";

const useForm = () => {
  const [formValue, setFormValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      // key:value
      ...formValue,
      [name]: value,
    });
  };

  return {
    formValue,
    handleChange,
  };
};

export default useForm;
