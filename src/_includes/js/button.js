// Event Listener
var buttonClick = document.getElementById('trigger_build').addEventListener('click', (e) => {

    const http = new XMLHttpRequest();
    http.open('POST', 'https://api.netlify.com/build_hooks/5f5f24bcc3e9a63eb46679ab');
    http.send({});
    alert('Rebuild requested')

});