import { useRef, useState } from "react";
import { ConfirmPopup } from "primereact/confirmpopup";

const Logout = ({ handleSignOut }) => {
  const [visible, setVisible] = useState(false);
  const buttonEl = useRef(null);

  return (
    <>
      <ConfirmPopup
        pt={{
          root: { className: "surface-100" },
        }}
        target={buttonEl.current}
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to log out?"
        accept={handleSignOut} // only triggers when confirmed
        reject={() => setVisible(false)}
      />
      <button
        ref={buttonEl}
        onClick={() => setVisible(true)}
        className="w-full font-medium text-primary hover:bg-primary/5 rounded py-3 transition duration-200 ease-in-out cursor-pointer"
      >
        LOG OUT
      </button>
    </>
  );
};

export default Logout;
