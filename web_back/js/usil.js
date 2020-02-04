

//  语义化 模块开发
//  功能模块
var user = {
    //  1.1 用户登录 功能模块
    login: function (name, password) {
        $.post(APILIST.user_login, {
            "user_name": name,
            "password": password,
        }).then(function (ser) {
            if (ser.code == 200) {
                window.location.href = "index.html"
            } else {
                alert(ser.msg)
            }
        })
    },
    //  1.2 用户退出 功能模块
    logout: function () {
        $.post(APILIST.user_logout).then(function (ser) {
            if (ser.code === 200) {
                alert("退出成功");
                window.location.href = "login.html";
                return;
            }
        })
    },

    //  2.2 用户信息 功能模块
    info: function () {
        $.get(APILIST.user_loginfo).then(function (ser) {
            if (ser.code === 200) {
                $("#user_naem").text(ser.data.nickname);
                $(".info_img").text(ser.data.user_pic);
            } else {
                alert("找不到内容");
            }
        })
    },
    //  3.1 获取文章管理 类别
    category: function () {
        $.get(APILIST.user_log_get).then(function (ser) {
            var str = template("laod", ser);
            $("#category").empty();
            $("#category").append(str);
        })
    },
    //  3.2 添加 发布文章信息
    category_add: function (name, slug) {
        $.post(APILIST.user_log_add, {
            "name": name,
            "slug": slug,
        }).then(function (ser) {
            if (ser.code == 200) {
                $("#recipient-name").val("")
                $("#lsug").val("")

                user.category();
                alert(ser.msg);
            }
        })
    },
    //  3.3 删除 文章信息
    category_del: function (id) {
        $.post(APILIST.user_log_del, { "id": id }).then(function (ser) {
            if (ser.code == 200) {
                user.category();
                alert("删除成功");
            }

        })
    },
    //  3.4 修改 文章信息
    category_edit: function (id, name, ulgs) {
        $.post(APILIST.user_log_edit, { id: id, name: name, slug: ulgs }).then(function (ser) {
            if (ser.code == 200) {
                alert(ser.msg)
                return;
            }

        })
    }
};
//  文章列表模块
var tabulation = {
    // 渲染 类别功能
    load: function () {
        return $.get(APILIST.user_log_get)
    },
    // 搜索 类别功能
    search: function (page, curtype, curstatus) {
        return $.get(APILIST.user_losearch, { page: page, type: curtype, state: curstatus })
    },
    // 删除 文章 整体
    del: function (id) {
        return $.get(APILIST.user_logrvdel, { "id": id })
    },
    // 添加 文章
    add: function (fd) {
        return $.ajax({
            url: APILIST.user_logadd,
            type: "post",
            data: fd,
            processData: false, // 不允许处理数据
            contentType: false, // 不要设置请求头
        })
    }
}