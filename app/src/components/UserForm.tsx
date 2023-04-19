import React, { useState } from "react";
import api from "../api";
type User = {
  _id: string;
  name: string;
  email: string;
  password?: string;
};
type UserFormProps = {
  onUserCreated: (user: User) => void;
};
const UserForm: React.FC<UserFormProps> = ({ onUserCreated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userResponse = await api.post("/users", {
        name,
        email,
        password,
      });

      console.log("User created:", userResponse.data);

      const postResponse = await api.post("/posts", {
        userId: userResponse.data._id,
        content: postContent,
      });

      console.log("Post created:", postResponse.data);

      onUserCreated(userResponse.data);
      setName("");
      setEmail("");
      setPassword("");
      setPostContent("");
    } catch (error) {
      console.error("Error creating user and post:", (error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
      </label>
      <br />
      <label>
        Post Content:
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="text-black"
        />
      </label>
      <br />
      <button type="submit" className="bg-blue-500 p-2 rounded">
        Create User
      </button>
    </form>
  );
};

export default UserForm;
