import React, { useState } from "react";

const TelephoneFormatter = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 0) input = input.slice(0, 10);
    let formattedInput = input;
    if (input.length > 3)
      formattedInput = `+(${input.slice(0, 3)}) - ${input.slice(3)}`;
    setPhoneNumber(formattedInput);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text" // Using text to allow formatting
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Mobile number"
        className="border mt-6 mb-3 rounded w-64 text-center text-2xl hover:cursor-pointer"
        maxLength="16" // To account for formatting characters
      />
      <p className="text-md">+(123) - 4567890</p>
    </div>
  );
};

export default TelephoneFormatter;
