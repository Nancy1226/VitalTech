import { Formik, Form, Field } from "formik";
import axios from "axios";

function FormA() {
    return ( 
    <>
    
    <div>
      <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios.post("http://localhost:4000/api/signin", values, { withCredentials: true });
          //const allCookies = document.cookie;

          console.log(response.data)
          //actions.resetForm();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Write a email"
            onChange={handleChange}
            value={values.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Write a password"
            onChange={handleChange}
            value={values.password}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving.." : "Save"}</button>
        </Form>
      )}
    </Formik>
    
  </div>
    
    </> );

}

export default FormA;