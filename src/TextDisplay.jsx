import PropTypes from "prop-types";
function TextDisplay({ chat }) {
  return (
    <div className="bg-white p-2 rounded-md h-5/6">
      {chat.map((c, index) => (
        <div key={index}>
          {c.isClient ? (
            <h3 className="flex justify-end text-green">{c.text}</h3>
          ) : (
            <h3 className=" text-black ">{c.text}</h3>
          )}
        </div>
      ))}
    </div>
  );
}

export default TextDisplay;
