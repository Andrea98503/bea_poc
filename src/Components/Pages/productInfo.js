import React, { useState, useEffect } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import Dropdown from "../Molecules/dropdown";
import DatePicker from "../Molecules/datePicker";
import DoubleArrowsRight from "../../assets/icons/doubleArrowsRight";
import ArrowRight from "../../assets/icons/arrowRight";
import NavBar from "../Oragnisms/navBar";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Persist } from "formik-persist";
import * as Yup from "yup";

const ProductInfo = ({ next, prev }) => {
  const [productData, setProductData] = useState({
    accountCurrency: "",
    frequency: "",
    purpose: "",
    toWhichCountries: "",
    fromWhichCountries: "",
    other: "",
    accountNumber: "",
  });

  const [isShowModal, setShowModal] = useState(false);
  const [isSelected, setSelected] = useState("CurrentAccount");
  const ToggleSelection = (item) => {
    setSelected(item);
  };
  const ProductNames = [
    { name: "Current Account", index: "CurrentAccount" },
    { name: "Passbook Saving Account", index: "PassbookSavingAccount" },
    { name: "Call Deposit", index: "CallDeposit" },
    { name: "Cash ISA", index: "CashISA" },
    { name: "ISA Account", index: "ISAAccount" },
    { name: "Fixed Time Deposit", index: "FixedTimeDeposit" },
    {
      name: "International Saving Account",
      index: "InternationalSavingAccount",
    },
  ];
  const validationSchema = Yup.object({
    accountCurrency: Yup.string().required().label("This"),
    frequency: Yup.string().required().label("This"),
    purpose: Yup.string().required().label("This"),
    toWhichCountries: Yup.string().required().label("This"),
    fromWhichCountries: Yup.string().required().label("This"),
    other: Yup.string(),
    accountNumber: Yup.string().required().label("This"),
  });
  return (
    <div className="xl:mx-72 mx-10">
      <NavBar />
      <Formik
        initialValues={productData}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          next();
          setProductData(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
              <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                <div className="justify-center w-full">
                  <div className="text-2xl text-white">Product Information</div>
                </div>
                <div
                  onClick={() => setShowModal(true)}
                  className="h-9 w-9 justify-self-end"
                >
                  <RoundedCross color={"#fff"} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-5/12 bg-inputBg">
                  <div className=" divide-y divide-slate-300 py-3">
                    {ProductNames.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => ToggleSelection(item.index)}
                        className={`flex flex-row justify-between bg-inputBg hover:bg-white ${
                          isSelected === item.index ? "bg-white" : "bg-inputBg"
                        }`}
                      >
                        {isSelected === item.index && (
                          <div className="w-2 bg-darkBlue"></div>
                        )}
                        <div className="text-xl font-extralight px-5 py-3.5 text-left flex w-full">
                          {item.name}
                        </div>
                        <div className="h-7 w-7 py-3.5 mr-2">
                          {isSelected === item.index ? (
                            <ArrowRight />
                          ) : (
                            <DoubleArrowsRight />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-7/12">
                  {isSelected === "CallDeposit" && (
                    <div className="py-8 mr-5">
                      <ul className="grid grid-flow-row auto-rows-max">
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"accountCurrency"}
                            className="ml-7 text-xl font-extralight "
                          >
                            Account Currency
                          </label>
                          <Dropdown
                            name={"accountCurrency"}
                            width={"w-32"}
                            height={"h-11"}
                            options={["EUR", "USD", "JPY"]}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"frequency"}
                            className="ml-7 text-xl font-extralight"
                          >
                            Frequency of Statement
                          </label>
                          <Dropdown
                            name={"frequency"}
                            width={"w-32"}
                            height={"h-11"}
                            options={[
                              "Weekly",
                              "Monthly",
                              "Quarterly",
                              "Annually",
                            ]}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"purpose"}
                            className="ml-7 text-xl font-extralight"
                          >
                            Purpose
                          </label>
                          <Dropdown
                            name={"purpose"}
                            width={"w-32"}
                            height={"h-11"}
                            options={["Savings", "Checking"]}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"toWhichCountries"}
                            className="ml-7 text-xl font-extralight"
                          >
                            To which countries
                          </label>
                          <Dropdown
                            name={"toWhichCountries"}
                            width={"w-32"}
                            height={"h-11"}
                            options={[
                              "India",
                              "China",
                              "Indonesia",
                              "Pakistan",
                              "Bangladesh",
                              "Japan",
                            ]}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"fromWhichCountries"}
                            className="ml-7 text-xl font-extralight"
                          >
                            From which countries
                          </label>
                          <Dropdown
                            name={"fromWhichCountries"}
                            width={"w-32"}
                            height={"h-11"}
                            options={[
                              "India",
                              "China",
                              "Indonesia",
                              "Pakistan",
                              "Bangladesh",
                              "Japan",
                            ]}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"other"}
                            className="ml-7 text-xl font-extralight"
                          >
                            Other reason
                          </label>
                          <div className="flex-column">
                          <Field
                            name="other"
                            className="px-4 relative peer shrink-0 appearance-none border h-11 w-42 bg-inputBg border-inputBorder rounded-xl"
                          />
                          <div className="text-xs text-red-600">
                            <ErrorMessage name="other" />
                          </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between mb-3">
                          <label
                            htmlFor={"accountNumber"}
                            className="ml-7 text-xl font-extralight"
                          >
                            Account number
                          </label>
                          <div className="flex-column">
                          <Field
                            name="accountNumber"
                            className="px-4 relative peer shrink-0 appearance-none border h-11 w-42 bg-inputBg border-inputBorder rounded-xl"
                          />
                          <div className="text-xs text-red-600">
                            <ErrorMessage name="accountNumber" />
                          </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              {
                <div className="mx-8 flex flex-row justify-between flex-wrap items-center">
                  <div>
                    <Button
                      dissabled={false}
                      variant={"default"}
                      text={"Previous"}
                      onClick={prev}
                      type={"buttom"}
                    />
                  </div>
                  <div>
                    <Button text={"Next"} type={"submit"} variant={"Next"} />
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
              type="default"
              onClick={() => setShowModal(false)}
              text="Cancel"
            />,
            <Button
              type="default"
              onClick={() => setShowModal(false)}
              text="Ok"
            />,
          ]}
        />
      )}
    </div>
  );
};
export default ProductInfo;
