//每整点可签

const rules = {
  name: "【富贵论坛】： ",
  type: 2, //签到类型 2 需要formhash
  op: "签到",
 // ua: "pc",
  url1: "https://www.fglt.net/forum.php", //用于获取formhash的链接
  cookie: config.fglt.cookie,
  reg1: 'formhash=(.+?)\\"', //formhash正则
  verify: "使用QQ帐号登录", //验证cookie状态
  signmethod: "get", //签到请求方式 get/post
  signurl: "https://www.fglt.net/plugin.php?id=dsu_amupper&ppersubmit=true&formhash=@formhash&mobile=2", //签到链接
   reg2: "", //重复签到判断
  reg3: "", //签到成功判断
  info: "", //签到成功返回信息
};

async function fglt(){
const template = require("../Template");
return rules.name+await template(rules)
}
module.exports=fglt