docker rmi dev-blogging-content:latest
docker build -t dev-blogging-content .
docker run --name dev-blogging -it -p 4000:80 dev-blogging-content:latest