/* eslint-disable react/prop-types */
import Button from "./Button";
import Input from "./Input";
import { useForm, FormProvider } from "react-hook-form";
function Form() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  const email_validation = {
    name: "email",
    label: "email address",
    type: "email",
    id: "email",
    placeholder: "write a random email address",
    validation: {
      required: {
        value: true,
        message: "Whoops! It looks like you forgot to add your email",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email",
      },
    },
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={(e) => e.preventDefault}>
        <div className="grid md:grid-cols-[1fr,0.5fr]  gap-4 max-w-sm md:max-w-[40rem] mt-8 mx-auto">
          <Input {...email_validation} />
          <Button text="Notify Me" onClick={onSubmit} />
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
