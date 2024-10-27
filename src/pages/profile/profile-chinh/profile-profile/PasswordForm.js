import { useState } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // Biểu thức kiểm tra mật khẩu hợp lệ
  const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    // Kiểm tra mật khẩu có hợp lệ không
    if (!isValidPassword.test(password)) {
      newErrors.password = "Mật khẩu phải từ 8-32 ký tự, bao gồm chữ và số";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Xử lý gửi form khi mật khẩu hợp lệ
      console.log("Mật khẩu hợp lệ, gửi dữ liệu");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Gửi</button>
    </form>
  );
}

export default PasswordForm;
