import React, { useEffect, useState } from "react";
import { getUserInfo } from "./function";

interface elementTypes {
  Category: string;
  Description: string;
  Link: string;
}
function Sample() {
  const [data, setData] = useState<
    { category: string; description: string; link: string }[]
  >([]);
  //   //   const [name, setName] = useState<string>("Imran");
  //   let name = "Imran";
  useEffect(() => {
    console.log("got called");
    console.log(process.env.REACT_APP_SERVER_API);
    getUserInfo()
      .then((res) => {
        // give a type before reading that vairbale
        let shortData: elementTypes[] = res.data.entries.slice(0, 10); // reducing size from 1452 to 10
        let comprisedData = shortData.map((s) => ({
          category: s.Category,
          description: s.Description,
          link: s.Link,
        }));
        setData(comprisedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div>
          <h2>{d.category}</h2>
          <p>{d.description}</p>
        </div>
      ))}
      {/* <button onClick={() => (name = "Imran shaikh")}>Update</button> */}
    </div>
  );
}

export default Sample;
