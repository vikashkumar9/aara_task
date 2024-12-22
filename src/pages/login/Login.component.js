import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/amazon_logo.png";
import Banner2 from "../../assets/Banner2.png";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import TextField from "@mui/material/TextField";
import Validation from "../../assets/neg_sign.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const renderValidationError = (message) => (
    <div className="flex items-center">
      <img src={Validation} alt="Validation Negative Sign" className="mr-2" />
      <span className="text-Validation_color">{message}</span>
    </div>
  );

  return (
    <div className="absolute top-[81px] w-full flex justify-center px-4 md:px-0">
      <div className="flex justify-center bg-white w-full md:w-[578px] border rounded-lg">
        <div className="text-center w-full">
          <div className="h-14 flex items-center shadow-custom">
            <img src={Logo} alt="Amazon Logo" className="mx-auto h-8" />
          </div>
          <h2 className="text-green_color mt-4 text-2xl">Login</h2>
          <div className="flex justify-center w-full">
            <img
              className="mt-6 w-full md:w-[385px] h-[128px]"
              src={Banner2}
              alt="Banner2"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center mt-6"
          >
            <div className="w-full md:w-[385px] m-auto">
              <TextField
                {...register("email", { required: "Email is required" })}
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={
                  errors.email && renderValidationError(errors.email.message)
                }
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#20B716",
                    fontSize: "16px",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#E2E8F0",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E2E8F0",
                  },
                  "& .MuiInputLabel-root": { color: "green" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "green" },
                }}
              />
            </div>
            <div className="w-full md:w-[385px] m-auto mt-6">
              <TextField
                {...register("password", { required: "Password is required" })}
                id="password"
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                error={!!errors.password}
                helperText={
                  errors.password &&
                  renderValidationError(errors.password.message)
                }
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#20B716",
                    fontSize: "16px",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#E2E8F0",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E2E8F0",
                  },
                  "& .MuiInputLabel-root": { color: "green" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "green" },
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-green_color border rounded-full py-[15px] w-full md:w-[385px] my-6 flex justify-center m-auto text-[19px] text-white"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-between w-full md:w-[385px] m-auto text-[14px]">
            <div>Forgot Password?</div>
            <div className="text-red_color">New User? Sign Up</div>
          </div>
          <div className="my-4">or</div>
          <div className="bg-google_color w-full md:w-[385px] m-auto flex items-center mb-4">
            <div>
              <img src={Google} alt="google" className="py-[5px] pl-1" />
            </div>
            <div className="flex-1 flex justify-center items-center text-white text-[14px]">
              CONTINUE WITH GOOGLE
            </div>
          </div>
          <div className="bg-facebook_color w-full md:w-[385px] m-auto flex items-center mb-4">
            <div>
              <img
                src={Facebook}
                height="40px"
                width="40px"
                alt="Facebook"
                className="py-[5px] pl-1"
              />
            </div>
            <div className="flex-1 flex justify-center items-center text-white text-[14px]">
              CONTINUE WITH FACEBOOK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
