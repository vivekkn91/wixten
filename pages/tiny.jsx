import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
//import the component
const RichTextEditor = dynamic(() => import("react-rte"), { ssr: false });

const MyStatefulEditor = ({ onChange }) => {
  const [value, setValue] = useState();
  const router = useRouter();
  useEffect(() => {
    const importModule = async () => {
      //import module on the client-side to get `createEmptyValue` instead of a component
      const module = await import("react-rte");
      setValue(module.createEmptyValue());
    };
    importModule();
  }, [router.pathname]);

  const handleOnChange = (value) => {
    setValue(value);
    if (onChange) {
      onChange(value.toString("html"));
    }
  };

  //if `value` from react-rte is not generated yet, you should not render `RichTextEditor`
  if (!value) {
    return null;
  }

  return <RichTextEditor value={value} onChange={handleOnChange} />;
};

MyStatefulEditor.propTypes = {
  onChange: PropTypes.func,
};

export default MyStatefulEditor;
