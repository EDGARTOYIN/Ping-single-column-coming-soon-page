/* eslint-disable react/prop-types */
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-custom hover:bg-pale-blue-custom transition-all  rounded-full md:max-w-[11rem] md:text-sm p-3 block w-full font-semibold text-white shadow-sm shadow-blue-custom"
    >
      {text}
    </button>
  );
}

export default Button;
