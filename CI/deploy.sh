#!/bin/bash

OUT=.

set -e

echo -e "Creating destination ..."
CMD="'""echo '$SSH_PASS' | sudo -S mkdir -p $REMOTE_PATH""'"
ssh -oStrictHostKeyChecking=no -o PubkeyAuthentication=yes $CONNECTION "'"$CMD"'"

echo -e "Cleaning destination ..."
CMD="'""cd $REMOTE_PATH && echo '$SSH_PASS' | sudo -S rm -rf *""'"
ssh -oStrictHostKeyChecking=no -o PubkeyAuthentication=yes $CONNECTION "'"$CMD"'"

echo -e "Replacing dev files ..."
cat CI/authConfig.js > assets/js/authConfig.js

echo -e "Synchronizing files ..."
rsync -e "ssh -o StrictHostKeyChecking=no -o PubkeyAuthentication=yes" -avzr --exclude-from=CI/exclude-list.txt --delete $OUT/* $CONNECTION:$REMOTE_PATH

echo -e "Deployed !!"
