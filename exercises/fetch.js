// const students = ['Jerome', 'David', 'Jesse'];


// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i])
// // }


// // for (const student of students) {
// //   console.log(student) 
// // }

// function logStudent(student) {
//   console.log(student)
// }


const obj = {
  id: 1,
  getId() {
    console.log(this.id)
  }
}

// students.forEach(logStudent)



// const prom = new Promise((resolve, reject) => {}).then(logStudent).then().catch(error => console.error(error))


const chucky = document.getElementById('chucky');


let isError = false

const API_URL = "https://api.chucknorris.io/jokes/random";

const fetchData = fetch(API_URL); // new Promise()

// microtask

fetchData
  .then(function(response) {

    console.log(response)

    if (!response.ok) {
      throw new Error();
    }

    const data = response.json();
    return data;
  })
  .then(function(data) {
    console.log(data)
    const value = data.value;
    const imageSrc = data.icon_url;

    chucky.innerHTML = `
      <img src=${imageSrc} alt="chucky" >
      <h1>${value}</h1>
    `;
  })
  .catch(function(error) {
    isError = true
    chucky.innerHTML = '<h1 style="color: red">BAD REQUEST</h1>'
    console.error('shiiiit', error)
  })

console.log("this will log first");

setTimeout(function() { console.log('hey guys!') }, 2000)