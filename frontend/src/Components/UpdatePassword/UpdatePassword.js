import "./UpdatePassword.css";
import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../actions/userActions";
import { useAlert } from "react-alert";
import MetaData from "../../Meta/MetaData";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, alert, message]);

  return (
    <div className="updatePassword">
      <MetaData title="Update Password" />
      <form className="updatePasswordForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
               <img
            src="data:image/jpeg;base64,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Doj8SLXH6oA/aBIb45kPvNgbW2pY4vFW0+ToeyXkTVuSANdTBOlcZHL9IzS3btN4bfZ7WNO3VEZm013ZSKOo+kVIY6hnJHok5PTwDkbIuVqcZA6nKtdVQD4habpkeR0/Gd3jrUH/AKRc8/ypx9X8mM++a21OH15ZXltc2C/KGoBTUUkBmrgnU+lm5qwOMA5GPaPDe7djbF5SF5Vo/lS2hbamynsrYKSGyW5szZzgnqPUA9909lgcJL+p1a4Wo37FJcKPere+cjhYnb70W6MAUs1rVl+0+hc+9lPslnbh7EenuMltcoULiqHQkEhalRzgkEjOlh75obi7hPYbVq1WrLVWomhQFKsF1Bssc4zyHSBEOGA08TLpT103I9ouE5fCW7b7UpPtGrQU5qW4Q1Bg4AqAlOfQ8lMrXb+6+0LXfQ39hSFYVGLNTyBh3GKisCw9FidWQeRkv3I2RcUqFavdAC5vanaVFU5CIBinTyP0RnvPXqcQJXERAREQEwZmIFbbxUD+HavmVPs0rOnuxcqoajU+bU5jPTJGCp9YnV3g2YWqCooyQMMO8juPs5zkpazhZrXw55t/ph2q5KZeHik+nymGLvdRxUPZEMp5gE4IHh4Gab7s3P6H+pf7zuUXqquFYgeHUfGfTXtx+n/pX+0xN+Htz1MMUz8RXlFonujD7r3eeVP/AFL/AHmud0L1m+Yq+bMuPhkySVtp3QHJ8fsr/acu821eY5VSPUqj/wAZtpfBHTazTNxlukx9W3Y2dHZmznrVXDVXGAByzjmqIDzxnqT/AElZXFd3uXqNzZ2LN9onJnU2jUd6pLszt4sST6ufdNXZmy6txfilSGSerfRVf0m8v4zsYMkW6LmDFGCLZctt2nrPt6LT4dqRupTz3s5Hq7RsSUzS2ZZLRsEpL82moUeeOpPmT/GbklPOXlc14vktaPOduLtzdu2u7ik1dS4tyxVM+gzNp5uPpY09M45mdoDAwO6fUTDWREQEREBERAREQEx3TM17yiXtHQHBdSAfAkEZ+MCrNo7Qrba3iNnQc07Kgc1nXkagB5e8ghR06sc4AnItNnpT4zJRoqESi6gKOgUWuWJ8yScnvJm5uLtqlsi1uLe+SpSqmrqUimWFRAqgBGHI8wxHPHpeudXh3sW4q7yV9qXFNqXbFuyRwQ+GI9IqeYAVQB45J6YgWjERAREQEREBERAREQEREBERAREQPnE13s0LZxz8uU2YkLUraNWjbMTMdGp8gTwPvnydnU/A++bsSH3fF8MM+Jb1c99kUj1B9816m7luw5g/vGdiI+74vhhOM+SOlpR07m2ROSjH1u39DOrY7PpUaWmki0x4AYyfEnqT65uGAJtrWK9IYvmyXjVrTMMzMRMtZERAREQEREBERAREQERED5wJ9REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="
            alt="logo"
          />
        </Typography>

        <input
          type="password"
          placeholder="Old Password"
          required
          value={oldPassword}
          className="updatePasswordInputs"
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
