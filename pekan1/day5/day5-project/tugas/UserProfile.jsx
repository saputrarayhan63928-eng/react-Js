import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("Rayhan");
  const [age, setAge] = useState(19);
  const [isEditing, setIsEditing] = useState(false);

  const save = () => {
    setIsEditing(false); 
  };
  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <p>Nama: {name}</p>
          <p>Umur: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}