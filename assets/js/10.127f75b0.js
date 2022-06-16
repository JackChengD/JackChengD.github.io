(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{430:function(i,t,e){"use strict";e.r(t);var a=e(45),_=Object(a.a)({},(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[e("h1",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[i._v("#")]),i._v(" 常用命令")]),i._v(" "),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[i._v("#")]),i._v(" 初始化")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git init：初始化(新建一个文件夹)，将其目录切换至目录上，执行此命令，即可初始化该目录为git")]),i._v(" "),e("li",[i._v("git status : 查看仓库的状态")]),i._v(" "),e("li",[i._v("git add filename 将filename添加到git的暂存区")]),i._v(" "),e("li",[i._v("git commit -m 'message' 提交，提交的信息为message")]),i._v(" "),e("li",[i._v("git commit --amend 修改已提交的commit注释，在vi编辑器改")]),i._v(" "),e("li",[i._v("git log : 查看所有产生的 commit 记录")]),i._v(" "),e("li",[i._v("git log filename 查看filename日志")])])]),i._v(" "),e("h2",{attrs:{id:"分支相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支相关命令"}},[i._v("#")]),i._v(" 分支相关命令")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git branch: 查看所有分支。")]),i._v(" "),e("li",[i._v("git branch filename: 创建filename分支。")]),i._v(" "),e("li",[i._v("git checkout filename: 切换到filename的分支上")]),i._v(" "),e("li",[i._v("git checkout -b filename: 创建filename分支并切换到这个分支上，效果相当于合并上面 2 个命令")]),i._v(" "),e("li",[i._v("git merge filename: 将filename分支合并到当前分支上")]),i._v(" "),e("li",[i._v("git rm -f filename 删除filename分支")]),i._v(" "),e("li",[i._v("git branch -D filename： 删除filename分支")]),i._v(" "),e("li",[i._v("git branch -D filename： 强制删除filename分支")]),i._v(" "),e("li",[i._v("git clone -r -d origin/dev\ngit push origin :dev    删除远程分支")]),i._v(" "),e("li",[i._v("git checkout -b develop origin/develop 本地拉取显示的develop分支代码")])])]),i._v(" "),e("h2",{attrs:{id:"标签相关的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签相关的命令"}},[i._v("#")]),i._v(" 标签相关的命令")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git tag : 查看历史 tag 记录。")]),i._v(" "),e("li",[i._v("git tag <tag_name> <commit_id> : 在指定提交 id 上创建一个 tag。如果不写 <commit_id> ，那就在最新的 commit 上创建一个 tag。")]),i._v(" "),e("li",[i._v("git checkout <tag_name> : 切换到 <tag_name> 标签")]),i._v(" "),e("li",[i._v("git show <tag_name> : 查看标签信息")]),i._v(" "),e("li",[i._v("git tad -d <tag_name> : 删除标签")]),i._v(" "),e("li",[i._v("git push origin <tag_name> : 将某个标签推送到远程仓库")]),i._v(" "),e("li",[i._v("git push origin :refs/tags/<tag_name> : 可以删除一个远程标签。")])])]),i._v(" "),e("h2",{attrs:{id:"github操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github操作"}},[i._v("#")]),i._v(" github操作")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git clone ... : 将 github 项目复制到本地的当前目录")]),i._v(" "),e("li",[i._v("git push origin <本地分支>:<远程分支> : 把本地分支中本地代码同步到远程分支")]),i._v(" "),e("li",[i._v("git pull orgin <branch_name> : 把远程 <branch_name> 分支的最新的代码同步到本地当前分支中")]),i._v(" "),e("li",[i._v("get remote add origin git@github.com:xxx/xxxx.git : 将当前本地仓库与远程进行联接")]),i._v(" "),e("li",[i._v("git remote -v : 查看我们当前项目有哪些远程仓库")])])]),i._v(" "),e("h2",{attrs:{id:"版本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本操作"}},[i._v("#")]),i._v(" 版本操作")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git diff 查看对比两次文件内容具体修改了什么")]),i._v(" "),e("li",[i._v("git diff HEAD -- "),e("code",[i._v("<filename>")]),i._v(' ("--"前后有空格，可以查看工作区和版本库里面最新版本的区别)')]),i._v(" "),e("li",[i._v("git reset --hard HEAD^ 回退一步")]),i._v(" "),e("li",[i._v("git reset --hard HEAD^^^ 回退三步")]),i._v(" "),e("li",[i._v("git reflog 查看操作")]),i._v(" "),e("li",[i._v("git reflog filename 查看详细的操作")]),i._v(" "),e("li",[i._v("git reset --hard 43ea01 将版本回退到43ea01时的版本")]),i._v(" "),e("li",[i._v("git reset --hard HEAD~3 回退三步")]),i._v(" "),e("li",[i._v("git checkout -- 版本回撤")])])]),i._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[i._v("#")]),i._v(" 总结")]),i._v(" "),e("blockquote",[e("ul",[e("li",[i._v("git命令需要多动手敲敲，常用的命令就几条")]),i._v(" "),e("li",[i._v("如果你忘记了，欢迎来到我的博客回顾回顾~")]),i._v(" "),e("li",[i._v("感觉您的来访，文章如有出错，欢迎指出")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);