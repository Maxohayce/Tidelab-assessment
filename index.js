const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderUsers(data);
    });
}

const renderUsers = (usersData) => {
    // console.log(usersData);
    const ul = document.getElementById("user-list-container");
   

    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${index + 1}.</span>
            <span>${user.name}</span>
            <span>-</span>
            <span class="username">${user.username}</span>
        `;
        ul.appendChild(li);
    });
}

const searchUsersByUsername = () => {
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li");

    for(let index = 0; index < usersList.length; index++){
        const usernameSpanTag = usersList[index].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
        if(isMatch){
            usersList[index].style.display = "block"
        } else {
            usersList[index].style.display = "none"
        }
    }
}



fetchUsers()