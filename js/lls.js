let body = $response.body
body = JSON.parse(body)


body['darwin']['bought'] = true
console.log($request.method, $request.url, $request.path, $request.headers)
$notify("title", "123", "content");
body = JSON.stringify(body)
$done({ body })