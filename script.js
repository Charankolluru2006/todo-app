function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function() {
        li.remove();
    };

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}