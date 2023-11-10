import "./auth.css";
import { useReducer } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";

const defaultState = {
  role: "",
  username: "",
  password: "",
};

function Login() {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  return (
    <div className="App">
      <section>
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_215322148-645x645.jpg"
                alt=""
              />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;" autocomplete="on">
                <h2>Sign In</h2>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_AUTH",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.username} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_AUTH",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.password} />

                <select
                  id="role"
                  name="role"
                  placeholder="Select your Role"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_AUTH",
                      data: [formstate, e.target.name],
                    });
                  }}
                >
                  <option value="" disabled selected>
                    Select your Role
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
                <Error error={errors.role} />
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
                <p class="signup">
                  <a href="/forgot">Forgot Password?</a>
                </p>
                <p class="signup">
                  Don't have an account ?<a href="/signup">Sign Up.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
