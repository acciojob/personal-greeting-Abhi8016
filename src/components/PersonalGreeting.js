import React, { useState } from "react";

function PersonalGreeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <div>Enter your name:</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name ? <div>Hello {name}!</div> : null}
    </div>
  );
}

export default PersonalGreeting;
