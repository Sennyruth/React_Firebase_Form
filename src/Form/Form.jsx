import {signInWithPopup } from "firebase/auth";
import {auth,facebookProvider,googleProvider} from "../firebaseConfig.js"
import "./Form.css"
import { useFormik } from "formik";

function Form() {
  

  const googleLogin = async()=> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      
      
    } catch (error) {
      console.log(error.message);
      
    }
    
    };
    const facebookLogin = async()=> {
      try {
        const result = await signInWithPopup(auth, facebookProvider);
        console.log(result.user);
        
        
      } catch (error) {
        console.log(error.message);
        
      }
      
      };

  
  const formik = useFormik({

    initialValues: {
      Username:"",
      email: "",
      password: "",
      
    },
    onSubmit: async (formValues) => {
      console.log(formValues);
      },
    });
  return (
    <div>
      <div className="form-maincontainer">
      <h1>Sign In</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="firstname">
            <label htmlFor="name">UserName</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter your username"
              name="Username"
              value={formik.values.Username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.Username&& formik.touched.Username && (
              <div className="error">{formik.errors.Username}</div>
            )}
          </div>

        
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="pass">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.password && formik.touched.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          
          <button type="submit" className="form-btn">
            sign in
          </button><br />
        <button type="submit" onClick={googleLogin }>sign in with Google</button><br />
        <button type="submit" onClick={facebookLogin}>sign in with Facebook</button><br />
        
        </div>
       
      </form>
    </div>
    </div>
  );
}

export default Form
