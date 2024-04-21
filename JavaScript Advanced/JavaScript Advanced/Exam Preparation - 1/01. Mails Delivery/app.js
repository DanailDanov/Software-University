function solve() {

    const inputRecepient = document.getElementById('recipientName');
    const inputTitle = document.getElementById('title');
    const inputTextArea = document.getElementById('message');

    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');

    addButton.addEventListener('click', add);
    resetButton.addEventListener('click', reset);

    function reset(event) {
        
        event.preventDefault();

        inputRecepient.value = '';
        inputTitle.value = '';
        inputTextArea.value = '';
    }

    function add(event) {

        event.preventDefault();

        const recepient = inputRecepient.value;
        const title = inputTitle.value;
        const textArea = inputTextArea.value;

        if (inputRecepient.value === '' || inputTitle.value === '' || inputTextArea.value === '') {
            return;
        }

        const listOfMailsAppend = document.getElementById("list");

        let li = document.createElement("li");

        let firstH4 = document.createElement("h4");
        firstH4.textContent = `Title: ${title}`;

        let secondH4 = document.createElement("h4");
        secondH4.textContent = `Recipient Name: ${recepient}`;

        let span = document.createElement("span");
        span.textContent = textArea;

        let div = document.createElement("div");
        div.id = "list-action";

        let sendButton = document.createElement("button");
        sendButton.type = "submit";
        sendButton.id = "send";
        sendButton.textContent = "Send";

        let deleteButton = document.createElement("button");
        deleteButton.type = "submit";
        deleteButton.id = "delete";
        deleteButton.textContent = "Delete";

        listOfMailsAppend.appendChild(li);

        li.appendChild(firstH4);
        li.appendChild(secondH4);
        li.appendChild(span);
        li.appendChild(div);

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        inputRecepient.value = "";
        inputTitle.value = "";
        inputTextArea.value = "";

        sendButton.addEventListener('click', send);

        function send() {

            li.remove();

            const ulSend = document.querySelector(".sent-list");

            const liSend = document.createElement("li");
            const spanTo = document.createElement("span");
            spanTo.textContent = `To: ${recepient}`;

            const spanTitle = document.createElement("span");
            spanTitle.textContent = `Title: ${title}`;

            const divBtn = document.createElement("div");
            divBtn.classList.add("btn");

            const deleteBtn = document.createElement("button");
            deleteBtn.type = "submit";
            deleteBtn.classList.add("delete");
            deleteBtn.textContent = "Delete";

            divBtn.appendChild(deleteBtn);

            liSend.appendChild(spanTo);
            liSend.appendChild(spanTitle);
            liSend.appendChild(divBtn);

            ulSend.appendChild(liSend);

            deleteBtn.addEventListener('click', deleteB);

            function deleteB() {

                liSend.remove();

                const ulDelete = document.querySelector(".delete-list");

                const liDelete = document.createElement("li");

                const spanDeleteTo = document.createElement("span");
                spanDeleteTo.textContent = `To: ${recepient}`;

                const spanDeleteTitle = document.createElement("span");
                spanDeleteTitle.textContent = `Title: ${title}`;

                liDelete.appendChild(spanDeleteTo);
                liDelete.appendChild(spanDeleteTitle);

                ulDelete.appendChild(liDelete);

            }
        }

        deleteButton.addEventListener('click', deleteFunction);

        function deleteFunction() {

            li.remove();

            const ulDeleteList = document.querySelector(".delete-list");

            const liDeleteList = document.createElement("li");

            const spanDeleteToList = document.createElement("span");
            spanDeleteToList.textContent = `To: ${recepient}`;

            const spanDeleteTitleList = document.createElement("span");
            spanDeleteTitleList.textContent = `Title: ${title}`;

            liDeleteList.appendChild(spanDeleteTitleList);
            liDeleteList.appendChild(spanDeleteTitleList);

            ulDeleteList.appendChild(liDeleteList);


        }
    }
}