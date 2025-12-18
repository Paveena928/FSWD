import React, { useState } from "react";

const AttendanceTracker = () => {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]); // list of students with attendance

  // Add a student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setStudents([...students, { name: name.trim(), status: "Absent" }]);
      setName("");
    } else {
      alert("Please enter a student name!");
    }
  };

  // Toggle Present/Absent
  const toggleAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].status =
      updatedStudents[index].status === "Present" ? "Absent" : "Present";
    setStudents(updatedStudents);
  };

  return (
    <>
      {/* 🔵 Embedded CSS */}
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, html {
          font-family: Arial, sans-serif;
        }

        .page-bg {
          min-height: 100vh;
          background-image:
            linear-gradient(rgba(0, 60, 160, 0.7), rgba(0, 120, 255, 0.7)),
            url("https://images.unsplash.com/photo-1596495577886-d920f3c0d152");
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 50px 0;
        }

        .tracker-container {
          width: 500px;
          background: #ffffff;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          margin-bottom: 50px;
        }

        .title {
          color: #1e90ff;
          margin-bottom: 20px;
          font-size: 26px;
        }

        .form-group {
          margin: 15px 0;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          margin-top: 20px;
          padding: 12px 20px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background-color: #1e90ff;
          color: white;
          transition: 0.3s;
        }

        button:hover {
          background-color: #005ecb;
          transform: scale(1.05);
        }

        .students-list {
          margin-top: 40px;
          width: 500px;
          background: #ffffff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .students-list h2 {
          color: #1e90ff;
          margin-bottom: 20px;
        }

        .student-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px;
          border-bottom: 1px solid #ddd;
          text-align: left;
        }

        .present-btn {
          background-color: #28a745;
          margin-left: 10px;
        }

        .absent-btn {
          background-color: #dc3545;
          margin-left: 10px;
        }

        .status {
          font-weight: bold;
        }
      `}</style>

      <div className="page-bg">
        <div>
          <div className="tracker-container">
            <h1 className="title">Attendance Tracker</h1>

            {/* Form to Add Student */}
            <form onSubmit={handleAddStudent}>
              <div className="form-group">
                <label>Student Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter student name"
                  required
                />
              </div>

              <button type="submit">Add Student</button>
            </form>
          </div>

          {/* Display Students with Attendance */}
          {students.length > 0 && (
            <div className="students-list">
              <h2>Student Attendance</h2>
              {students.map((student, idx) => (
                <div key={idx} className="student-item">
                  <span>{student.name}</span>
                  <span className="status">{student.status}</span>
                  <button
                    className={
                      student.status === "Present" ? "absent-btn" : "present-btn"
                    }
                    onClick={() => toggleAttendance(idx)}
                  >
                    Mark {student.status === "Present" ? "Absent" : "Present"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AttendanceTracker;

