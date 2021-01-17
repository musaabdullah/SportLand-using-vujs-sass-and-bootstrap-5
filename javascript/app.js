

// const numberCheck = arrayNumber.filter( source => {

//     return source > 4

// })

// console.log(arrayNumber);
// console.log(numberCheck);

// const students = [
//     {name: 'Musa', age: 43},
//     {name: 'Ahmed', age: 51},
//     {name: 'Omer', age: 42}
// ]
//  const students = [12, 34, 25, 65, 2, 42]
// const result = students.reduce( (acc, curr) => {
//     if( curr > 34) {
//         acc++;
//         console.log(acc);
//     }
//     return acc;
// }, 0)

// console.log(result);
// const filteredStudent = students.filter( student => {
//     return student.name === 'Omer'
// })



// const mapStudents = students.map( (student) => {
//     return {name: student.name, age: student.age / 3}
// })
// console.log(students);
// console.log(mapStudents);

// console.log(filteredStudent);

// const students = {
//     name: 'Omer',
//     age: 34,
//     address: {
        
//         city: 'Omdurman',
//         steert: '23',
//     }
// };

// const { name , age, address: { city } } = students;

// console.log(city);
// const students = ['Omer', 'Ahmed', 'Ali', 'Mohammed', 'Khalid', 'Tarig'];

// const [Omer , Ahmed , Ali , ...reset] = students;

// console.log(Omer, Ahmed, Ali, reset);

// console.log();

const addForm = document.querySelector('.addForm');
const list = document.querySelector('ul'); 
 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const AddTo = (todo) => {

    const html = `
    <li class="list-group-item text-white d-flex justify-content-between align-items-center" style="margin-bottom:0.2rem; border-radius: 5px; background-color:rgb(124, 90, 156);">${todo} <span><i class="fa fa-trash delete"></i></span></li>
    `;
    list.innerHTML += html;
}
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = addForm.addTodo.value.trim();
    if (todo.length) {
        AddTo(todo);
        addForm.reset();
    }

})

const search = document.querySelector('.searchForm');
const filterTodo = (term) => {

    Array.from(list.children)
      .filter((todo) => !todo.textContent.includes(term))
      .forEach((todo) => todo.classList.add('filtered'));
    
      Array.from(list.children)
      .filter((todo) =>  todo.textContent.includes(term))
      .forEach((todo) => todo.classList.add('filtered'));

    }


search.addEventListener('keyup', (e) => {
    e.preventDefault();
    const term = searchValue.value.trim();
    filterTodo(term);
})