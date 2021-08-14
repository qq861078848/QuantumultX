let body = $response.body
let path = $request.path
body = JSON.parse(body)

console.log(path);
if (path === "/api/v1/caen/package"){
    for(var key in body){
        if(body[key].hasOwnProperty('bought')){
            body[key]["bought"] = true;
            body[key]["expired"] = false;
            body[key]["expiredAtSec"] = 1888888888;
            body[key]["expiresAt"] = 1888888888;
            body[key]["bellPtFinished"] = false;

        }
        if(key === "darwin"){
            for(var key2 in body["darwin"]){
                if(body["darwin"][key2].hasOwnProperty('bought')){
                    body["darwin"][key2]["bought"] = true;
                    body["darwin"][key2]["subscriptionStatus"] = 1;
                    body["darwin"][key2]["expiredAtSec"] = 1888888888;
                    body["darwin"][key2]["effectedAtSec"] = 1588888888;
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