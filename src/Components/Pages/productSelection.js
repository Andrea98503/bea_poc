import React, { useState, useEffect } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Check from "../../assets/icons/check";
import NavBar from "../Oragnisms/navBar";
import { Persist } from "formik-persist";
import * as Yup from "yup";

const ProductSelection = ({ next }) => {
  const [checkedData, setCheckedData] = useState({ selectedProducts: [] });
  const [isShowModal, setShowModal] = useState(false);

  const ProductNames = [
    { name: "Passbook Savings", index: "Passbook Savings" },
    { name: "International Savings", index: "International Savings" },
    { name: "Current Account", index: "Current Account" },
    { name: "Account Teen", index: "Account Teen" },
    { name: "ISA Account", index: "ISA Account" },
    { name: "Account Children", index: "Account Children" },
    { name: "Call Deposit", index: "Call Deposit" },
    { name: "Smart Savings", index: "Smart Savings" },
    { name: "Fixed Time Deposit", index: "Fixed Time Deposit" },
  ];
  const validationSchema = Yup.object({
    selectedProducts: Yup.array().min(1, "*Please choose at least one option").required(),
  });
  return (
    <div className="xl:mx-72 mx-10">
      <NavBar />
      <Formik
        initialValues={checkedData}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          next();
          setCheckedData(values);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
              <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                <div className="justify-center w-full">
                  <div className="text-2xl text-white text-center">
                    Product Selection
                  </div>
                </div>
                <div
                  onClick={() => setShowModal(true)}
                  className="h-9 w-9 justify-self-end"
                >
                  <RoundedCross color={"#fff"} />
                </div>
              </div>
              <div className="px-4 py-6">
                <div className="flex flex-row gap-5">
                  <div className="rounded-full bg-header-gray h-8 w-8 shrink-0">
                    <div className="text-white text-xl pl-3 pt-0.5 font-thin">
                      1
                    </div>
                  </div>
                  <div className="md:w-5/12 text-2xl font-thin">
                    Which product would you like to open?
                  </div>
                </div>
                <FieldArray name="selectedProducts">
                  {() => (
                    <div className="ml-12 mr-5 mt-9 gap-1.5 flex flex-wrap grid grid-flow-row auto-rows-max grid-cols-2">
                      {ProductNames.map((item) => (
                        <label
                          key={item.index}
                          className="ml-7 text-2xl font-thin flex-wrap flex"
                        >
                          <Field
                            type="checkbox"
                            name="selectedProducts"
                            value={item.name}
                            className="relative peer shrink-0 appearance-none border h-7 w-7 bg-checkbox border-checkbox-border rounded-sm mr-7 mb-5"
                          />
                          <Check />
                          {item.name}
                        </label>
                      ))}
                    </div>
                  )}
                </FieldArray>
                <div className="text-s text-red-600 text-right font-thin pr-7">
                <ErrorMessage name="selectedProducts" />
                </div>
              </div>
            </div>
            <div className="w-full">
              {
                <div className="mx-8 flex flex-row justify-between flex-wrap items-center">
                  <div>
                    <Button
                    type={"buttom"}
                      dissabled={true}
                      variant={"default"}
                      text={"Previous"}
                    />
                  </div>
                  <div>
                    <Button text={"Next"} variant={"Next"} type={"submit"} />
                  </div>
                </div>
              }
            </div>
            <Persist name="form" />
          </Form>
        )}
      </Formik>

      {isShowModal && (
        <Modal
          content={"Do you want to cancel this ?"}
          buttons={[
            <Button
            variant="default"
              onClick={() => setShowModal(false)}
              text="Cancel"
            />,
            <Button
            variant="default"
              onClick={() => setShowModal(false)}
              text="Ok"
            />,
          ]}
        />
      )}
    </div>
  );
};
export default ProductSelection;
