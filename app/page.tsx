"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<any>(null);

  const load = async () => {
    const res = await fetch(`/api/profile?username=${username}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>CastScope</h1>
      <p>Farcaster Profile Analytics</p>

      <input
        placeholder="Enter Farcaster username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={load}>Analyze</button>

      {data && (
        <div>
          <img src={data.pfp_url} width={80} />
          <p>@{data.username}</p>
          <p>Followers: {data.follower_count}</p>
          <p>Following: {data.following_count}</p>
        </div>
      )}
    </main>
  );
}
