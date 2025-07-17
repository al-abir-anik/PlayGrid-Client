import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    return (
        <div>
             
        </div>
    );
};

export default UpdateProfile;