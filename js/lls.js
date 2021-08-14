let body = $response.body
body = JSON.parse(body)


body['darwin']['bought'] = true;
console.log($request.method);
console.log($request.path);
console.log($request.url);
console.log($request.headers);

$notify("title", "123", "content");
body = JSON.stringify(body)
$done({ body })