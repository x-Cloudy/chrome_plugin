import { useState } from 'react';
import { IoAdd } from "react-icons/io5";
import "./PhoneInput.css";

const PhoneInput = ({
  onChange,
  initialDdd = "",
  initialPhone = "",
  field
}) => {
  const [ddd, setDdd] = useState(initialDdd);
  const [phone, setPhone] = useState(initialPhone);

  const handleDddChange = (e) => {
    const newDdd = e.target.value.replace(/\D/g, "");
    setDdd(newDdd);
    
    if (onChange) {
      onChange({
        target: {
          name: field,
          value: `+${newDdd}${phone}`
        }
      });
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value.replace(/\D/g, "");
    setPhone(newPhone);
    
    if (onChange) {
      onChange({
        target: {
          name: field,
          value: `+${ddd}${newPhone}`
        }
      });
    }
  };
  
  const formatPhoneDisplay = (phoneNumber) => {
    if (!phoneNumber) {
      return "";
    }  
    const numericPhoneNumber = phoneNumber.replace(/\D/g, "");
  
    if (numericPhoneNumber.length <= 2) {
      return numericPhoneNumber;
    }  
    if (numericPhoneNumber.length <= 5) {
      return numericPhoneNumber.slice(0, 2) + " " + numericPhoneNumber.slice(2);
    }
    let formattedNumber = "";
  
    if (numericPhoneNumber.length === 9) {
      formattedNumber = numericPhoneNumber.replace(
        /(\d{0,5})(\d{4})/,
        "$1-$2"
      );
    } else {
      formattedNumber = numericPhoneNumber.replace(
        /(\d{0,1})(\d{4})(\d{4})/,
        "$1 $2-$3"
      );
    }
  
    return formattedNumber;
  };

  return (
    <div className="phone-input-wrapper">
      <div className="ddd-input-group">
        <span className="phone-input-icon">
          <IoAdd />
        </span>
        <input
          type="text"
          name="ddd"
          placeholder=""
          maxLength={3}
          value={ddd}
          onChange={handleDddChange}
          className="ddd-input"
        />
      </div>
      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        maxLength={14}
        value={formatPhoneDisplay(phone)}
        onChange={handlePhoneChange}
        className="phone-input"
      />
    </div>
  );
};

export default PhoneInput;