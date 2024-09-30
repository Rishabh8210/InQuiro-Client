"use client"
import { useParams } from 'next/navigation';

const UserProfile = () => {
  const { username } = useParams();  // Access dynamic route param

  return (
    <div>
      <h1>Profile of {username}</h1>
    </div>
  );
};

export default UserProfile;
