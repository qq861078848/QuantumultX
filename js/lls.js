let body = $response.body
body = JSON.parse(body)

console.log(body['darwin']['bought'])

body = JSON.stringify(body)
$done({ body })