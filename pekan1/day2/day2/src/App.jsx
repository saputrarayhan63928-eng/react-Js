function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    backgroundColor: "#fafafa",
};
  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
  };
  const skillItemStyle = {
    backgroundColor: "#eee",
    margin: "4px 0",
    padding: "6px",
    borderRadius: "6px",
  };

  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={imageStyle} />

      <h2>{name}</h2>
      <p>{bio}</p>

      <div>
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} style={skillItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard
        name="Hanz"
        photo="https://via.placeholder.com/200"
        bio="Fullstack developer yang suka belajar hal baru."
        skills={["React", "JavaScript", "Node.js", "UI/UX"]}
      />
    </div>
  );
}

export default App;
