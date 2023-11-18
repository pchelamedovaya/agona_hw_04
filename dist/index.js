"use strict";
const input = document.getElementById("input");
const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
if (buttonAdd && input && container) {
    buttonAdd.addEventListener("click", function () {
        const taskText = input.value;
        if (taskText) {
            addTask(taskText);
            input.value = "";
        }
    });
    function addTask(taskText) {
        const section = document.createElement("section");
        section.className = "task-wrapper";
        const taskContainer = document.createElement("div");
        taskContainer.className = "task-container-wrapper";
        const taskDetail = document.createElement("div");
        taskDetail.className = "task-wrapper-detail";
        const buttonDO = document.createElement("button");
        buttonDO.className = "button-do";
        const img = document.createElement("img");
        img.src = "images/icon.svg";
        img.alt = "img-do";
        img.className = "button-input-img";
        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task";
        taskTextElement.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.className = "button-delete";
        deleteButton.textContent = "Delete";
        buttonDO.appendChild(img);
        taskDetail.appendChild(buttonDO);
        taskDetail.appendChild(taskTextElement);
        taskContainer.appendChild(taskDetail);
        taskContainer.appendChild(deleteButton);
        section.appendChild(taskContainer);
        deleteButton.addEventListener("click", function () {
            section.remove();
        });
        if (container) {
            container.appendChild(section);
        }
        let isPainted = false;
        buttonDO.addEventListener("click", function () {
            if (isPainted) {
                section.style.backgroundColor = "#424242";
            }
            else {
                section.style.backgroundColor = "#5c5c5c";
            }
            isPainted = !isPainted;
        });
    }
}
