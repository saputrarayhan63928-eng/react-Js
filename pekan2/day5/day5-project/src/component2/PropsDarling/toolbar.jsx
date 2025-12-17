import Profile from "./Profile";

function Toolbar({ user }) {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
}

export default Toolbar