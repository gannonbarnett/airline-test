console.log('Hello World');

fetch("http://starlinkrouter/").then((response) => {
    console.log(response);
    document.getElementById("response").innerHTML = response;
});