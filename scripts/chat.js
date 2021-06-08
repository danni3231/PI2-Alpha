const messagesContainer = document.querySelector('.userChat__chatArea')
const form = document.querySelector('.userChat__inputContainer')

console.log('entra');

var startLog = `
<div class="userChat__startLog">
    <p class="userChat__date">Abril 26 de 2021</p>
    <h3 class="userChat__title">Solicitaste Asistencia</h3>
</div>`;

function renderMessages(list) {
    messagesContainer.innerHTML = startLog;

    list.forEach(function (elem, i) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('userChat__chat');
        newMessage.classList.add(`userChat__chat--${elem.type}`);

        newMessage.innerHTML = `
        <p>${elem.msg}</p>
        `;

        messagesContainer.appendChild(newMessage);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

}

function getMessages() {
    messageCollection.get().then((querySnapshot) => {
        const objects = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            objects.push(data);

        });

        let arraySorted = objects.sort(function (a, b) {
            return a.time - b.time;
        });

        renderMessages(arraySorted);
    });
};


console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (form.chat.value != '') {

        var type = "";

        if (messagesContainer.classList.contains('cli')) {
            type = "cli"
        } else if (messagesContainer.classList.contains('amb')) {
            type = "amb"
        }

        const usermessage = {
            type: type,
            msg: form.chat.value,
            time: Date.now()
        }

        messageCollection.add(usermessage)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                getMessages();

                form.chat.value = '';
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }else{
        alert('por favor escribe algo');
    }

});

getMessages();

setInterval(function(){
    console.log('obteniendo mensajes');
    getMessages();
},3000);
