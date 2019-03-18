#!/bin/bash

echo "***********************************************"
echo "*********** Pushing Docker Images *************"
echo "***********************************************"

echo "*************** Logging In ********************"

docker login -u gasparandr -p $PASS

echo "************* Tagging Images ******************"

docker tag nginx-read:latest gasparandr/boardme-nginx-read:latest
docker tag nginx-write:latest gasparandr/boardme-nginx-write:latest
docker tag node-read:latest gasparandr/boardme-node-read:latest
docker tag node-write:latest gasparandr/boardme-node-write:latest

echo "************* Pushing Images ******************"

docker push gasparandr/boardme-nginx-read:latest
docker push gasparandr/boardme-nginx-write:latest
docker push gasparandr/boardme-node-read:latest
docker push gasparandr/boardme-node-write:latest

