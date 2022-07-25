import {Formik} from "formik";
import * as yup from "yup"
import style from "./login.module.css"
import {authAPI} from "../../API/api";
import {useNavigate} from "react-router-dom";


const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().email("must enter viable email").required("must enter email"),
        password: yup.string().required("must enter password").typeError("must be string"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], " Passwords do not match").required("Confirm your Password")
    })

    const navigate = useNavigate()


    return (

        <div>
            <Formik  initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                rememberMe: false
            }}
                    validateOnBlur
                    onSubmit={(values, {resetForm}) => {
                        console.log(values)
                        authAPI.login(values.email, values.password, values.rememberMe)
                            .then( () => {
                                navigate(`/Profile/24950`, {replace: true})
                            })
                        resetForm({
                            email: '',
                            password: '',
                            confirmPassword: '',
                            rememberMe: false
                        })
                    }}
                    validationSchema={validationSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit, dirty,
                  }) => (
                    <div className={`form`}>
                        <p>
                            <label htmlFor={"email"}>Email</label> <br/>
                            <input
                                type={"text"}
                                className="input"
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}

                            />
                        </p>
                        {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}
                        <p>
                            <label htmlFor={"password"}>Password</label> <br/>
                            <input
                                type={"password"}
                                className="input"
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}

                            />
                        </p>
                        {touched.password && errors.password && <p className={style.error}>{errors.password}</p>}
                        <p>
                            <label htmlFor={"confirmPassword"}>Confirm Password</label> <br/>
                            <input
                                type={"password"}
                                className="input"
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}

                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p className={style.error}>{errors.confirmPassword}</p>}
                        <div>
                            <input type="checkbox"
                                   className={style.checkbox}
                                   name={`rememberMe`}
                                   value={values.rememberMe}/> Remember me?
                        </div>
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={"submit"}>Submit
                        </button>

                    </div>
                )}
            </Formik>
        </div>
    );
}

const Login = (props) => {
    return (
        <div className={style.wrapper}>
            <h1>PLEASE LOGIN IN ORDER TO CONTINUE</h1>
            <LoginForm/>

        </div>
    )
}


export default Login
