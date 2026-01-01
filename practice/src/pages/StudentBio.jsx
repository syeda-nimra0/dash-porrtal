import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentBio.css";

function StudentBio() {
  // State object jisme sara student data store hoga
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  // Har input change par state update hogi
  function handleChange(e) {
    setStudent({
      ...student,                // purana data safe
      [e.target.name]: e.target.value, // jis input me likha woh update
    });
  }

  // Next page par jana
  function handleNext(e) {
    e.preventDefault();
    navigate("/courses");
  }

  return (
    <div className="bio-container">

      {/* LEFT SIDE FORM */}
      <form className="bio-form" onSubmit={handleNext}>
        <h2>Student Bio Data</h2>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          value={student.fatherName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
        />

        <button type="submit">Next → Choose Course</button>
      </form>

      {/* RIGHT SIDE LIVE PREVIEW */}
      <div className="preview-card">
        <h3>Live Preview</h3>

        <div className="card">
          <p><strong>Name:</strong> {student.name || "—"}</p>
          <p><strong>Father:</strong> {student.fatherName || "—"}</p>
          <p><strong>Email:</strong> {student.email || "—"}</p>
          <p><strong>Phone:</strong> {student.phone || "—"}</p>
          <p><strong>Address:</strong> {student.address || "—"}</p>
        </div>
      </div>

    </div>
  );
}

export default StudentBio;
