let body_str = $response.body
let path = $request.path
body = JSON.parse(body_str)

console.log(path);
if (path === "/api/v1/caen/package"){
    for(var key in body){
        if(body[key].hasOwnProperty('bought')){
            body[key]["bought"] = true;
            body[key]["expired"] = false;
            body[key]["expiresAt"] = 1888888888;
            body[key]["remainDays"] = 999999;
            if(key === "bell"){
                body[key]["expiredAtSec"] = "1888888888";
                body[key]["bellPtFinished"] = false;
            }
        }
        if(key === "darwin"){
            for(var key2 in body["darwin"]){
                if(body["darwin"][key2].hasOwnProperty('bought')){
                    body["darwin"][key2]["bought"] = true;
                    body["darwin"][key2]["subscriptionStatus"] = 1;
                    body["darwin"][key2]["expiredAtSec"] = 1888888888;
                }
            }
        }
    }
}


if (path === "/api/v1/bell/mine"){
    body["status"] = 2;
    body["started_at_sec"] = 1600000000;
    body["expired_at_sec"] = 1888888888;
}

if (path === "/api/v1/caen/user_courses/elite"){
    body_str = '{"courses":[{"courseType":1,"linkUrl":"overlord://to_darwin_core","coverUrl":"https://cdn.llscdn.com/fe-static/yy/image/rc-upload-1587985406120-2.jpg","thumbCoverUrl":"https://cdn.llscdn.com/fe-static/yy/image/rc-upload-1587628391729-2.png","mainTitle":"懂你英语®A⁺","subtitle":"综合系统课","subscriptionInfo":{"subscriptionStatus":1,"expiresAt":188888888},"learningProgress":{"style":1,"current":0,"end":30},"updatedAt":1628867057,"resourceId":""},{"courseType":4,"linkUrl":"overlord://to_bell","coverUrl":"https://cdn.llscdn.com/fe-static/yy/image/rc-upload-1583327786272-4.png","thumbCoverUrl":"https://cdn.llscdn.com/fe-static/yy/image/rc-upload-1584532924339-2.png","mainTitle":"流利说·发音","subtitle":"发音专项课","subscriptionInfo":{"subscriptionStatus":1,"expiresAt":1888888888},"learningProgress":null,"updatedAt":1620006382,"resourceId":""}]}';
    body = JSON.parse(body_str);
}


$notify("title", "123", "content");
body_str = JSON.stringify(body);
// 查看信息
console.log(body_str);
$done({ body_str })