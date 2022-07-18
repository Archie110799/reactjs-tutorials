import React from "react";
import SimpleExample from "./components/SimpleExample";
import MultipleInputFieldsExample from "./components/MultipleInputFieldsExample";
import ReactHookForm from "./components/ReactHookForm";
import Register from "./components/Register";

function FormsExamples() {
  return (
    <div className="w-50 m-auto mt-3">
      {/* <MultipleInputFieldsExample/> */}
      {/* <SimpleExample /> */}
      {/* <ReactHookForm /> */}
      <Register />
    </div>
  );
}

export default FormsExamples;
