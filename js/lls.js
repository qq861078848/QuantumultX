let body = $response.body
let path = $request.path
body = JSON.parse(body)

console.log(path);
if (path === "/api/v1/caen/package"){
    for(var key in body){
        if(body[key].hasOwnProperty('bought')){
            body[key]["bought"] = true;
        }
        if(key === "darwin"){
            for(var key2 in body["darwin"]){
                if(body["darwin"][key2].hasOwnProperty('bought')){
                    body["darwin"][key2]["bought"] = true;
                    body["darwin"][key2]["subscriptionStatus"] = 1;
                }
            }
        }
    }
}

$notify("title", "123", "content");
body = JSON.stringify(body);
// 查看信息
console.log(body);
$done({ body })