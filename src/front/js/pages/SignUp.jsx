import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center justify-content-center d-md-flex m-5"> 
			<div className="form-signin">
  				<form className="text-center container justify-content-center"> 
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <div className="form-floating m-1">
              <input type="text" className="form-control" id="floatingInput" placeholder="User name" />
              <label for="floatingInput">User name</label>
            </div>
            <div className="form-floating m-1">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating m-1">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
            </div>
            <div>
              <Link to="/login">
                <button className="w-100 btn btn-lg btn-primary m-1" type="submit">Create User</button>
              </Link>
            </div>
          </form>
      </div>
    </div>
	)
}

