import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return ( 
        <div className="text-center justify-content-center d-md-flex m-5"> 
            <div className="card">
                <div className="card-header fs-1">
                    Personal Information
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">User</h5>
                    <p className="card-text">random user</p>
                    <h5 className="card-title fw-bold">Email</h5>
                    <p className="card-text">random email</p>
                    <div>
					    <Link to="/">
						    <button className="btn btn-primary btn-lg">Log out</button>
					    </Link>
				    </div>
                </div>
            </div>
        </div>
    )
}
