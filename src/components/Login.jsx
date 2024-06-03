import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog
        id="my_modal_3"
        className="modal dark:bg-slate-900 dark:text-white"
      >
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">LogIn</h3>
            <div className="mt-4">
              <span className="m-2 text-base">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500 ml-2">
                  This field is required
                </span>
              )}
              <br />
              <div className="mt-4">
                <span className="m-2 text-base">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500 ml-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-6">
                <button className="btn btn-sm btn-secondary text-base">
                  LogIn
                </button>
                <p className="text-base">
                  Not registered?
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer ml-1"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
