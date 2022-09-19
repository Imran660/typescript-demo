import React from "react";
import { addNumbers, user } from "./hepler";
import Sample from "./Sample";
function App() {
  console.log(addNumbers(5, 8));
  console.log(user.getSalary && user.getSalary(4520)); // cannot read the property of undefined of user
  console.log();
  return (
    <div className="App">
      <h2>Hey Learners, let's learn typescript</h2>
      <Sample />
    </div>
  );
}

export default App;
