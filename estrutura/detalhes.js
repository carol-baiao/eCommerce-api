function IdUrl(url) {
    const urlObj = new URL(url);
    const path = urlObj.pathname;
    const id = searchParams.get('id');
    return id;
}

function produtoApi(url) {
    const id = IdUrl(url);
    const apiUrl = `http://diwserver.vps.webdock.cloud:8765/products/${id}`; 
}