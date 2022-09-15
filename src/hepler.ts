export const addNumbers = (a: number, b: number) => {
  // let result:any;
  // result="ssj"
  // result=4552
  let result: number = a + b;
  return result;
};

interface userTypes {
  name: string;
  address: string | number; // two options for the types
  phone: number;
  alive: boolean;
  getSalary?: (amount: number) => void;
  colors: "black" | "blue" | "orange"; //enum - you've to choose value out of this enum values
}

export const user: userTypes = {
  name: "Imran",
  address: 402,
  phone: 4512265522,
  alive: true,
  colors: "black",
  getSalary: (amount) => {
    console.log(amount);
    console.log("hii");
  },
};

// export const member: userTypes = {
//   name: "membername",
// };

// export const member:userTypes={

// }
