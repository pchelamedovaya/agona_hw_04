const input: HTMLInputElement | null = document.getElementById("input") as HTMLInputElement;
const buttonAdd: HTMLButtonElement | null = document.getElementById("buttonAdd") as HTMLButtonElement;
const container: HTMLDivElement | null = document.getElementById("container") as HTMLDivElement;

    if (buttonAdd && input && container) {
        buttonAdd.addEventListener("click", function () {
        const taskText: string = input.value;
        if (taskText) {
            addTask(taskText);
            input.value = "";
        }
    });

    function addTask(taskText: string) {
        const section: HTMLElement = document.createElement("section") as HTMLElement;
        section.className = "task-wrapper";

        const taskContainer: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        taskContainer.className = "task-container-wrapper";

        const taskDetail: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        taskDetail.className = "task-wrapper-detail";

        const buttonDO: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        buttonDO.className = "button-do";

        const img: HTMLImageElement = document.createElement("img") as HTMLImageElement;
        img.src = "images/icon.svg";
        img.alt = "img-do";
        img.className = "button-input-img";

        const taskTextElement: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
        taskTextElement.className = "task";
        taskTextElement.textContent = taskText;

        const deleteButton: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
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

        let isPainted: boolean = false;
        buttonDO.addEventListener("click", function () {
            if (isPainted) {
                section.style.backgroundColor = "#424242";
            } else {
                section.style.backgroundColor = "#5c5c5c";
            }
            isPainted = !isPainted;
        });
    }
}