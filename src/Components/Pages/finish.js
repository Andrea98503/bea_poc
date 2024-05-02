import React, { useState } from "react";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import NavBar from "../Oragnisms/navBar";
import Button from "../Attoms/button";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Check from "../../assets/icons/check";

const Finish = ({ prev }) => {
  const [checkedData, setCheckedData] = useState({ selectedProducts: [] });

  const makeRequest = () => {
    console.log("Form Submitted.", localStorage.getItem("form"));
    localStorage.removeItem("form");
  };
  return (
    <div className="xl:mx-72 mx-10">
      <NavBar />
      <Formik
        initialValues={checkedData}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          makeRequest();
          setCheckedData(values);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="m-20">
              <div className="py-8 mr-5 text-2xl font-extralight">
                By using our services, you agree to comply with and be bound by
                our terms and conditions
              </div>
              <label
                key={"dec"}
                className="ml-7 text-2xl font-thin flex-wrap flex"
              >
                <Field
                  type="checkbox"
                  name="dec"
                  className="relative peer shrink-0 appearance-none border h-7 w-7 bg-checkbox border-checkbox-border rounded-sm"
                />
                <Check />
                Customer Declaration
              </label>
            </div>
            <div className="w-full">
              {
                <div className="flex items-center x-full justify-center">
                  <div>
                    <Button
                      text={"Finish"}
                      type={"submit"}
                      variant={"Finish"}
                    />
                  </div>
                </div>
              }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Finish;
