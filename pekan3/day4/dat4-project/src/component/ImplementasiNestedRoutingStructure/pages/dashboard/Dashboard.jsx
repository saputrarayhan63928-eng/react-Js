import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav style={{ marginBottom: "16px" }}>
        <NavLink
          to="profile"
          style={({ isActive }) => ({
            marginRight: 12,
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Profile
        </NavLink>

        <NavLink
          to="settings"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Settings
        </NavLink>
      </nav>

      {/* Nested route akan dirender di sini */}
      <Outlet />
    </div>
  );
}

export default Dashboard;