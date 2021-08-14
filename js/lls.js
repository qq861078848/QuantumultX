let body = $response.body
let path = $request.path
body = JSON.parse(body)

console.log(path);
if (path === "/api/v1/caen/package"){
    body['darwin']['bought'] = true;
    for(var key in body){
        console.log(key)
    }
}

$notify("title", "123", "content");
body = JSON.stringify(body)
$done({ body })