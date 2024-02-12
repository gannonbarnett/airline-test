// This request gets blocked because the content must be served over HTTPS.
// fetch("http://starlinkrouter/").then((response) => {
//     console.log(response);
//     document.getElementById("response").innerHTML = response;
// });

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

window.onload = function() {
    const landed = param("landed");
    if (!landed) {
        window.location.href = "http://192.168.1.1/landed";
    } else {
        document.getElementById("output").innerHTML = `Landed!`;
    }
}