import React from 'react';

const TeacherDashboard = () => {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <section>
        <h2>Classes Information</h2>
        {/* You can map through classes here */}
        <div>
          <p>Class 1: Math</p>
          <p>Class 2: Science</p>
          <p>Class 3: History</p>
          {/* Add more classes as needed */}
        </div>
      </section>
      <section>
        <h2>Students Information</h2>
        {/* You can map through students here */}
        <div>
          <p>Student 1: Alice</p>
          <p>Student 2: Bob</p>
          <p>Student 3: Charlie</p>
          {/* Add more students as needed */}
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;