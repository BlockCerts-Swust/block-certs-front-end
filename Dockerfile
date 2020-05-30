# 使用超小的node:alpine镜像作为基础镜像编译
FROM node
# 将dist目录下的文件复制到容器dist目录下
COPY /dist/ /dist/
# 安装http-server服务器
# http-server是一个简单的零配置命令行HTTP服务器，基于nodejs。
# 如果你不想重复的写nodejs的web-server.js，则可以使用这个。
RUN npm install -g http-server
# 设置容器的工作目录
WORKDIR /dist/
# 设置容器工作目录执行的命令
CMD ["http-server"]