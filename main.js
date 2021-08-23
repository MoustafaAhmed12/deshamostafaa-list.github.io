const btnAdd = document.querySelector(".icon-upload"),
    input = document.getElementById("text"),
    container = document.querySelector(".my-tasks");

btnAdd.addEventListener("click", (eo) => {
    eo.preventDefault();

    if (input.value == "") {
        alert("Pls Check Your Task Name !");
    } else {
        const task = document.createElement("div");
        task.classList.add("task");
        container.appendChild(task);

        const spanStar = document.createElement("span");
        task.appendChild(spanStar);
        spanStar.classList.add("icon-star", "icon");

        const taskName = document.createElement("p");
        task.appendChild(taskName);
        taskName.innerHTML = input.value;

        const icons = document.createElement("div");
        task.appendChild(icons);

        const spanTrash = document.createElement("span");
        icons.appendChild(spanTrash);
        spanTrash.classList.add("icon-trash", "icon");
        spanTrash.style.paddingRight = "10px";

        const spanAngry = document.createElement("span");
        icons.appendChild(spanAngry);
        spanAngry.classList.add("icon-angry2", "icon");

        input.focus();
        input.value = "";
    }
});

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash icon") {
        let respones = confirm('Are you sure you want to delete this task')
        if (respones == true) {
            eo.target.parentElement.parentElement.remove();

        }
    } else if (eo.target.className == "icon-angry2 icon") {
        eo.target.className = "icon-heart";
        eo.target.parentElement.previousElementSibling.style.textDecoration =
            "line-through";
    } else if (eo.target.className == "icon-heart") {
        eo.target.className = "icon-angry2 icon";
        eo.target.parentElement.previousElementSibling.style.textDecoration =
            "none";
    } else if (eo.target.className == "icon-star icon") {
        container.prepend(eo.target.parentElement);
        eo.target.classList.add("star");
        console.log(eo.target.parentElement);
    } else if (eo.target.className == "icon-star icon star") {
        container.append(eo.target.parentElement);
        eo.target.classList.remove("star");
    } else {
        console.log("Not Here");
    }
});

/*

container.addEventListener("click", (eo) => {
    const key = eo.target.className;
    switch (key) {
        case "icon-trash icon":
            eo.target.parentElement.parentElement.remove();
            break;
        case "icon-angry2 icon":
            eo.target.className = "icon-heart";
            eo.target.parentElement.previousElementSibling.style.textDecoration =
                "line-through";

        case "icon-heart":
            eo.target.className = "icon-angry2 icon";
            eo.target.parentElement.previousElementSibling.style.textDecoration =
                "none";

        case "icon-star":
            container.prepend(eo.target.parentElement);
            eo.target.classList.add("star");
            console.log(eo.target.parentElement);
        case "star":
            container.append(eo.target.parentElement);
            eo.target.classList.remove("star");
        default:
            console.log("Not Here");

            break;
    }
});
*/
// btnAdd.addEventListener("click", (eo) => {
//     eo.preventDefault();

//     if (input.value == "") {
//         alert("Pls Check Your Task Name !");
//     } else {
//         const newTask = container.firstElementChild.cloneNode(true);
//         document.querySelector(".my-tasks").appendChild(newTask);
//         console.log(newTask);

//         newTask.children[1].innerHTML = input.value;

//         console.log("Done !");
//         input.focus();
//         input.value = "";
//     }
// });