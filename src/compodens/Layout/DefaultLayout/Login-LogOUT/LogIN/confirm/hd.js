import React, { useState } from "react";
const leduc = () => {
  const [newemail, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const checkemai = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(re.test(inputEmail));
  };

  return (
    <div>
      <input value={newemail} onClick={checkemai} />
      {!isValidEmail && <p>leduc</p>}
    </div>
  );
};
