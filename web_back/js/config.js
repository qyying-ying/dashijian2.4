


//  配置文件 
//  把项目中 所有的 基地址 和 接口 集中在一起进行管理
//  所有项目的 基地址
var BASEURL = "http://192.168.137.1:8000"

//  定义对象用来管理接口 
var APILIST = {
    // 登录 接口
    user_login: BASEURL + "/admin/login",
    // 退出 接口
    user_logout: BASEURL + "/admin/logout",
    // 用户 信息接口
    user_loginfo: BASEURL + "/admin/getuser",
    // 获取文章 内容
    user_log_get: BASEURL + "/admin/category_search",
    // 发布文章 内容
    user_log_add: BASEURL + "/admin/category_add",
    // 删除文章 内容
    user_log_del: BASEURL + "/admin/category_delete",
    // 修改文章 内容
    user_log_edit: BASEURL + "/admin/category_edit",
    // 搜索文章 内容
    user_losearch: BASEURL + "/admin/search",
    // 删除文章 整体
    user_logrvdel: BASEURL + "/admin/article_delete",
    user_logadd: BASEURL + "/admin/article_publish",

};