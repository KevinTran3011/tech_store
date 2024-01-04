import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { error, isSubmitting },
    reset,
    getValues,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log("form submitted");
    console.log(data);
    reset();
  };

  return (
    <div className="Login_container">
      <form className="Login_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="Login_form--email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your Email"
          id="email"
        ></input>
        <input
          className="Login_form--password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your Password"
          id="password"
        ></input>

        <button type="submit">Log In</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LogIn;
