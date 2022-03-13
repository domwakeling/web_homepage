// Event Listener
var buttonClick = document.getElementById('trigger_build').addEventListener('click', (e) => {

    const http = new XMLHttpRequest();
    http.open('POST', 'https://api.netlify.com/build_hooks/622db0523bf38e3cbcdabd0e');
    http.send({});
    alert('Rebuild requested')

});