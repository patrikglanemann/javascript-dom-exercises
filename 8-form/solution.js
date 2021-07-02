const data = [];
const formElement = document.querySelector(".super-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = formElement.name.value;
  const age = formElement.age.value;
  const marriedStatus = formElement.married.checked;
  const hobbies = formElement.hobbies.value;

  const objectUser = {
    name: name, //Could be typed only "name", since the const-name and the key-name are the same!
    age: age,
    marriedStatus: marriedStatus,
    hobbies: hobbies,
  };
  if (!data.length) {
    pushdata(objectUser);
  } else {
    data.length = 0;
    pushdata(objectUser);
  }

  formElement.reset();
});

function pushdata(object) {
  data.push(object);
  console.log(data);
}

/*
const data = [];
const formElement = document.querySelector(".super-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = formElement.name.value;
  const age = formElement.age.value;
  const marriedStatus = formElement.married.checked;
  const hobbies = formElement.hobbies.value;

  for(let i=0; i<data.length; i++)
  {

  }
  if (!data.lengt) {
    data.push(`${name}`, `${age}`, `${marriedStatus}`, `${hobbies}`);
    console.log(data);
  } else {
      data.lenght=0;
  }
  formElement.reset();
});
*/
