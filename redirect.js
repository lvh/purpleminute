let url = (new URL(document.location)).searchParams.get("url");
console.log("URL: ", url);
if (url !== null) {
    var parser = document.createElement('a');
    parser.href = url;
    parser.protocol = "googledocs:";
    console.log("Redirecting to", parser.href);
    window.location = parser.href;
}
