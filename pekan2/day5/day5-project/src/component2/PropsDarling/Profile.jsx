import Avatar from "./Avatar";
import ThemeDisplay from "./ThemeDisplay";


function Profile({ user }) {
  return (
    <div>
      <Avatar user={user} /> 
      <ThemeDisplay theme={user.theme} /> 
    </div>
  );
}

export default Profile