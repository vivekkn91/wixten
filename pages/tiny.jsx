import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
//import the component
const RichTextEditor = dynamic(() => import("react-rte"), { ssr: false });

const MyStatefulEditor = ({ onChange }) => {
  const [value, setValue] = useState([]);
  console.log(value.toString("html"));

  useEffect(() => {
    const importModule = async () => {
      //import module on the client-side to get `createEmptyValue` instead of a component
      const module = await import("react-rte");
      console.log(module);
      setValue(module.createEmptyValue());
    };
    importModule();
  }, []);

  const handleOnChange = (value) => {
    setValue(value);
    if (onChange) {
      onChange(value.toString("html"));
    }
  };

  return <RichTextEditor value={value} onChange={handleOnChange} />;
};

MyStatefulEditor.propTypes = {
  onChange: PropTypes.func,
};

export default MyStatefulEditor;
