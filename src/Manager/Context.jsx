import React, { useState, useEffect, createContext } from "react";
import eyeOpen from "../assets/view.png";
import eyeCross from "../assets/hide.png";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [form, setForm] = useState({ url: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [show, setShow] = useState(false); // for form field
  const [visiblePasswords, setVisiblePasswords] = useState({}); // for table/list fields

  const handleEye = () => {
    setShow(!show);
  };

  const togglePasswordVisibility = (index) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  useEffect(() => {
    console.log("Password array updated:", passwordArray);
  }, [passwordArray]);

  const value = {
    setForm,
    form,
    passwordArray,
    setPasswordArray,
    show,
    handleEye,
    eyeOpen,
    eyeCross,
    visiblePasswords,
    togglePasswordVisibility,
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
