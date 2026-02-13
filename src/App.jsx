import React from "react";
import Person from "./classes/Person";
import Student from "./classes/Student";
import Teacher from "./classes/Teacher";
import PersonCard from "./components/PersonCard";

function App() {
  const people = [
    new Person("Rahul", 32),
    new Student("Anjali", 20, "Computer Science"),
    new Teacher("Dr. Sharma", 45, "Mathematics"),
    new Student("Priya", 21, "Information Technology"),
    new Teacher("Mr. Verma", 50, "Physics"),
    new Student("Aman", 22, "Mechanical Engineering"),
    new Person("Neha", 28)
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",   // ⬅ horizontal center
        alignItems: "flex-start",   // ⬅ keep from sticking to exact vertical center
        paddingTop: "40px"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
  style={{
    color: "#ffffff",        // white color
    fontWeight: "bold",      // bold text
    marginBottom: "40px"     // gap between heading & boxes
  }}
>
  Person Class Hierarchy
</h1>

        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;
