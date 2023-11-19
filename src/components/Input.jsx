/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid.js";
export default function Input({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <div className="flex flex-col relative">
        <label htmlFor={id} className="font-semibold capitalize hidden">
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`p-3 pl-9 border outline-none rounded-full md:min-w-[24rem] border-pale-blue-custom w-full placeholder-gray-custom ${
            isInvalid ? "border-light-red-custom" : ""
          }`}
          {...register(name, validation)}
        ></input>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export const InputError = ({ message }) => {
  return (
    <motion.p
      {...error_atributes}
      className="text-light-red-custom italic text-sm md:absolute top-[3.7rem] left-7 self-center mt-2"
    >
      {message}
    </motion.p>
  );
};

const error_atributes = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
