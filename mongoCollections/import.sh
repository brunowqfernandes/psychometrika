#! /bin/bash

for i in `ls ./mongoCollections/*.json`;  do 
   mongoimport -h mongodb:27017 -d psychometrika $i --type=json --jsonArray; 
done
