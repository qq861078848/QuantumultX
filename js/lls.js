let body = $response.body
body = JSON.parse(body)

body['darwin']['bought'] = true
console.log(body['darwin']['bought'])

body = JSON.stringify(body)
$done({ body })