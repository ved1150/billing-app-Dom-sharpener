


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const submitBtn = document.querySelector("#submitBtn")
// Listen for form submit
// myForm.addEventListener('submit', onSubmit);



submitBtn.addEventListener("click",function(){
    let my_info ={
      name : `${nameInput.value}`,
      email : `${emailInput.value}`
    }
    my_info_serialized = JSON.stringify(my_info)
    
    localStorage.setItem(`my_info ${emailInput.value}`, my_info_serialized  )
    
    let my_info_desrialized = JSON.parse(localStorage.getItem(`my_info ${emailInput.value}`));
    console.log(my_info_desrialized)
    // localStorage.setItem("email",emailInput.value)
})

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {

    // localStorage.setItem(`${nameInput} , ${nameInput.value}`)
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // localStorage.setItem(`name, ${nameInput.value}`)
    // // Add HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // // Append to ul
    userList.appendChild(li);

    // Clear fields
    // nameInput.value = '';
    // emailInput.value = '';
  }
}

  
    

