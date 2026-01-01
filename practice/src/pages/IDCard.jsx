import "./IDCard.css";

function IDCard() {
  // Temporary dummy data
  // Later ye data StudentBio + Courses se aayega
  const student = {
    name: "Syeda Nimra",
    course: "Web Development",
    teacher: "Ali",
    timing: "9am - 11am",
    days: ["Mon", "Wed", "Fri"],
  };

  // Roll number generate (simple but effective)
  const rollNumber = "STD-" + Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="id-page">

      <h1>Student ID Card</h1>

      <div className="id-card">

        {/* Header */}
        <div className="id-header">
          <h2>Code Academy</h2>
          <span>Student ID</span>
        </div>

        {/* Body */}
        <div className="id-body">

          <div className="photo">
            <span>Photo</span>
          </div>

          <div className="info">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Roll No:</strong> {rollNumber}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Teacher:</strong> {student.teacher}</p>
            <p><strong>Timing:</strong> {student.timing}</p>
            <p><strong>Days:</strong> {student.days.join(", ")}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="id-footer">
          <span>Authorized Signature</span>
        </div>

      </div>

    </div>
  );
}

export default IDCard;
