import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          alert("signup Sucessfull");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log("error" + error);
          alert("error" + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center border-2 ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-center text-black">
                Signup
              </h3>
              <div className="mt-4">
                <span className="m-2 text-lg text-black">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500 ml-2">
                    This field is required
                  </span>
                )}
                <div className="mt-4">
                  <span className="m-2 text-lg text-black">Email</span>
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
                  <div className="mt-4">
                    <span className="m-2 text-lg text-black">Password</span>
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
                  <div className="flex justify-between mt-6 ">
                    <button className="btn btn-sm btn-secondary text-lg">
                      SignUp
                    </button>
                    <p className="text-lg">
                      Have account?
                      <button
                        className="underline text-blue-500 cursor-pointer ml-1"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        LogIn
                      </button>
                      <Login />
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
