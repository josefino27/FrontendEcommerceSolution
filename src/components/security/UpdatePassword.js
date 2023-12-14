import React, { useState, Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import resetUpdateStatus from "../../slices/securitySlice";
import { updatePassword } from "../../actions/userAction";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch;
  const navigate = useNavigate();
  const alert = useAlert();

  const { errores, loading, isUpdated } = useSelector(
    (state) => state.security
  );

  useEffect(() => {
    if (errores) {
      errores.map((error) => alert.error(error));
    }
    if (isUpdated) {
      alert.success("El password fue actualizado exitosamente");
      navigate("/me");
      dispatch(resetUpdateStatus({}));
    }
  }, [dispatch, alert, errores, isUpdated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword }));
  };

  return (
    <Fragment>
      <MetaData titulo={"Actualizar Password"} />
      <div class="row wrapper">
        <div class="col-10 col-lg-5">
          <form class="shadow-lg" onSubmit={submitHandler}>
            <h1 class="mt-2 mb-5">Actualizar Password</h1>
            <div class="form-group">
              <label htmlFor="old_password_field">Actual Password</label>
              <input
                type="password"
                id="old_password_field"
                class="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label htmlFor="new_password_field">Nueva Password</label>
              <input
                type="password"
                id="new_password_field"
                class="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="btn update-btn btn-block mt-4 mb-3"
              disabled={loading ? true : false}
            >
              Actualizar Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePassword;
