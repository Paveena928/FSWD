import DeveloperSkillForm from "./Fullstack/React/DeveloperSkillRegistrationForm";

export default function App() {
  const handleFormSubmit = (data) => {
    console.log("Form Submitted Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <DeveloperSkillForm onSubmit={handleFormSubmit} />
    </div>
  );
}
