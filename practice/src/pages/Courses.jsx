import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  // Available courses data
  const coursesData = [
    {
      id: 1,
      title: "Web Development",
      teachers: ["Ali", "Sara", "Ahmed"],
      duration: "3 Months",
      timings: ["9am - 11am", "2pm - 4pm"]
    },
    {
      id: 2,
      title: "UI UX Design",
      teachers: ["Ayesha", "Hassan"],
      duration: "2 Months",
      timings: ["10am - 12pm", "3pm - 5pm"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      teachers: ["Usman", "Fatima"],
      duration: "4 Months",
      timings: ["11am - 1pm", "5pm - 7pm"]
    }
  ];

  // Selected course state
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [teacher, setTeacher] = useState("");
  const [timing, setTiming] = useState("");
  const [days, setDays] = useState([]);

  // Days selection logic
  function toggleDay(day) {
    setDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  }

  // Enroll logic
  function handleEnroll() {
    if (!selectedCourse || !teacher || !timing || days.length === 0) {
      alert("Please complete all selections");
      return;
    }

    navigate("/id-card");
  }

  return (
    <div className="courses-container">
      <h1>Choose Your Course</h1>

      {/* Courses Cards */}
      <div className="courses-grid">
        {coursesData.map(course => (
          <div
            key={course.id}
            className={`course-card ${selectedCourse?.id === course.id ? "active" : ""}`}
            onClick={() => {
              setSelectedCourse(course);
              setTeacher("");
              setTiming("");
              setDays([]);
            }}
          >
            <h3>{course.title}</h3>
            <p>Duration: {course.duration}</p>
          </div>
        ))}
      </div>

      {/* Enrollment Options */}
      {selectedCourse && (
        <div className="enroll-section">
          <h2>Enroll in {selectedCourse.title}</h2>

          {/* Teacher */}
          <select value={teacher} onChange={e => setTeacher(e.target.value)}>
            <option value="">Select Teacher</option>
            {selectedCourse.teachers.map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>

          {/* Timing */}
          <select value={timing} onChange={e => setTiming(e.target.value)}>
            <option value="">Select Timing</option>
            {selectedCourse.timings.map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>

          {/* Days */}
          <div className="days">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
              <button
                key={day}
                className={days.includes(day) ? "day active" : "day"}
                onClick={() => toggleDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <button className="enroll-btn" onClick={handleEnroll}>
            Enroll & Generate ID Card →
          </button>
        </div>
      )}
    </div>
  );
}

export default Courses;
