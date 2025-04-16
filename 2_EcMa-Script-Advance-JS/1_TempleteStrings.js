//! Template String is used for typing strings or variables in very easy way

const Name = "Sukan ";
const Surname = "Prajapati";
// const FullName = Name + Surname
const FullName = `
First name: ${Name} 
Last Name:${Surname}
`;

console.log(FullName);