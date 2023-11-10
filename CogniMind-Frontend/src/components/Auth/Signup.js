import "./auth.css";
import { useReducer } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";

const defaultState = {
  role: "",
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  return (
    <div className="App">
      <section>
        <div class="container active">
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Create an account</h2>
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
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                <Error error={errors.email} />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
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
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <p class="signup">
                  Already have an account ?<a href="/login">Login.</a>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <img
                src="https://www.diagnosio.com/wp-content/uploads/2020/12/AI-bias.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
