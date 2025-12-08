// DeveloperSkillForm.jsx

import { useState } from "react";

export default function DeveloperSkillForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    gender: "",
    skills: [],
    country: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills: newSkills };
      });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl space-y-4"
    >
      <h1 className="text-2xl font-bold text-center mb-4">Developer Skill Registration</h1>

      <label className="block font-semibold">Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-blue-500"
      />

      <label className="block font-semibold">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-blue-500"
      />

      <label className="block font-semibold">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-blue-500"
      />

      <label className="block font-semibold">Bio</label>
      <textarea
        name="bio"
        rows="4"
        placeholder="Write something about yourself..."
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-blue-500"
      ></textarea>

      <label className="block font-semibold">Gender</label>
      <div className="flex gap-4">
        <label>
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        </label>
      </div>

      <label className="block font-semibold">Skills</label>
      <div className="grid grid-cols-2 gap-2">
        {['HTML','CSS','JavaScript','React','Node.js','Python'].map((skill) => (
          <label key={skill}>
            <input type="checkbox" value={skill} onChange={handleChange} /> {skill}
          </label>
        ))}
      </div>

      <label className="block font-semibold">Country</label>
      <select
        name="country"
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-blue-500"
      >
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <label className="block font-semibold">Upload Resume</label>
      <input type="file" name="file" onChange={handleChange} className="w-full" />

      <div className="flex justify-between mt-4">
        <button
          type="reset"
          className="px-4 py-2 border rounded-lg shadow hover:bg-gray-200"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
