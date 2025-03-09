import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label className="block font-medium">Username</label>
              <Field type="text" name="username" className="w-full p-2 border rounded" />
              <ErrorMessage name="username" component="p" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Email</label>
              <Field type="email" name="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Password</label>
              <Field type="password" name="password" className="w-full p-2 border rounded" />
              <ErrorMessage name="password" component="p" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
