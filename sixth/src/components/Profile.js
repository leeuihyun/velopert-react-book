import React from "react";

const data = {
  vanc: {
    name: "이의현",
    desc: "리액트를 좋아하는 개발자",
  },
  lee: {
    name: "이재우",
    desc: "친구",
  },
};
function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }
  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{profile.desc}</p>
    </div>
  );
}

export default Profile;
