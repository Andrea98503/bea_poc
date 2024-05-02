import React, { useState, useEffect } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import Dropdown from "../Molecules/dropdown";
import DatePicker from "../Molecules/datePicker";
import NavBar from "../Oragnisms/navBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Persist } from "formik-persist";
import * as Yup from "yup";
import PhoneNumberInput from "../Molecules/phoneNumberInput";

const PersonalInfo = ({ next, prev }) => {
  const [personalData, setPersonalData] = useState({
    title: "",
    surname: "",
    forenames: "",
    dob: "",
    otherNames: "",
    gender: "",
    maritalStatus: "",
    homePhoneNumber: "",
    workPhoneNumber: "",
    mobilePhoneNumber: "",
    faxNumber: "",
    email: "",
  });

  const [isShowModal, setShowModal] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string().required().label("Title"),
    surname: Yup.string().required().label("Surname"),
    forenames: Yup.string().required().label("Forenames"),
    dob: Yup.date().required(),
    otherNames: Yup.string(),
    gender: Yup.string().required().label("Gender"),
    maritalStatus: Yup.string().required().label("Marital status"),
    homePhoneNumber: Yup.string().required().label("Home phone number"),
    workPhoneNumber: Yup.string().required().label("Work phone number"),
    mobilePhoneNumber: Yup.string().required().label("Mobile phone number"),
    faxNumber: Yup.string().required().label("Fax number"),
    email: Yup.string().required().email().label("Email address"),
  });
  return (
    <div className="xl:mx-72 mx-10">
      <NavBar />
      <Formik
        initialValues={personalData}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          next();
          setPersonalData(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div>
              <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
                <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                  <div className="justify-center w-full">
                    <div className="text-2xl text-white">
                      Personal Information
                    </div>
                  </div>
                  <div
                    onClick={() => setShowModal(true)}
                    className="h-9 w-9 justify-self-end"
                  >
                    <RoundedCross color={"#fff"} />
                  </div>
                </div>
                <div className="py-8 mr-5">
                  <ul className="grid grid-flow-row auto-rows-max">
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"title"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Title
                      </label>
                      <Dropdown
                        name={"title"}
                        width={"w-64"}
                        height={"h-11"}
                        options={[
                          "Mr.",
                          "Mrs.",
                          "Ms.",
                          "Miss",
                          "Dr.",
                          "Prof.",
                          "Hon.",
                          "Lady.",
                          "Lord.",
                          "Sir.",
                        ]}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"surname"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Surname
                      </label>
                      <div className="flex-column">
                        <Field
                          name="surname"
                          className="px-4 relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl"
                        />
                        <div className="text-xs text-red-600 text-right">
                          <ErrorMessage name="surname" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"forenames"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Forenames
                      </label>
                      <div className="flex-column">
                        <Field
                          name="forenames"
                          className=" px-4 relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl"
                        />
                        <div className="text-xs text-red-600 text-right">
                          <ErrorMessage name="forenames" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"dob"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Date of Birth
                      </label>
                      <DatePicker name={"dob"} setFieldValue={setFieldValue} />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"otherNames"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Former or Other Names( if any)
                      </label>
                      <div className="flex-column">
                        <Field
                          name="otherNames"
                          className="px-4 relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl"
                        />
                        <div className="text-xs text-red-600">
                          <ErrorMessage name="otherNames" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"gender"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Gender
                      </label>
                      <Dropdown
                        name={"gender"}
                        width={"w-64"}
                        height={"h-11"}
                        options={["Male", "Female", "Other"]}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"maritalStatus"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Marital Status
                      </label>
                      <Dropdown
                        name={"maritalStatus"}
                        width={"w-64"}
                        height={"h-11"}
                        options={["Single", "Married"]}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                  </ul>
                </div>
              </div>
              <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
                <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                  <div className="justify-center w-full">
                    <div className="text-2xl text-white">Contact Details</div>
                  </div>
                  <div
                    onClick={() => setShowModal(true)}
                    className="h-9 w-9 justify-self-end"
                  >
                    <RoundedCross color={"#fff"} />
                  </div>
                </div>
                <div className="py-8 mr-5">
                  <ul className="grid grid-flow-row auto-rows-max">
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"homePhoneNumber"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Home Phone Number
                      </label>
                      <PhoneNumberInput
                        name={"homePhoneNumber"}
                        id={"homePhoneNumber"}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"workPhoneNumber"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Work Phone Number
                      </label>
                      <PhoneNumberInput
                        name={"workPhoneNumber"}
                        id={"workPhoneNumber"}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"mobilePhoneNumber"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Mobile Phone Number
                      </label>
                      <PhoneNumberInput
                        name={"mobilePhoneNumber"}
                        id={"mobilePhoneNumber"}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"faxNumber"}
                        className="ml-7 text-2xl font-thin"
                      >
                        Fax Number
                      </label>
                      <PhoneNumberInput
                        name={"faxNumber"}
                        id={"faxNumber"}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-3">
                      <label
                        htmlFor={"email"}
                        className="ml-7 text-2xl font-thin"
                      >
                        email address
                      </label>
                      <div className="flex-column">
                        <Field
                          name="email"
                          className="px-4 relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl"
                        />
                        <div className="text-xs text-red-600 text-right">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="w-full">
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
              </div>
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
export default PersonalInfo;
