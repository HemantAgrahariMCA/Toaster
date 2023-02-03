const btn = document.getElementById('btn');
const container = document .getElementById('container'); 
btn.addEventListener('click',() => {
createNotification();

});

function createNotification (){
    const notify = document.createElement('div');
    notify.classList.add('toast');
    // notify.innerHTML.add('Its a crazy challenge');
    notify.innerHTML = "Hemant KUMAR AGRAHARI"

    container.appendChild(notify)
    setTimeout(()=>{
        notify.remove();
    },3000)
    
} 