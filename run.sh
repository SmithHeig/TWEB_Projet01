# To do
echo "building images"
docker build -t client ./client
docker build -t server ./server

echo "running images"
docker run -p 4000:4000 -d server 
docker run -p 80:80 -d client

echo "running in background"