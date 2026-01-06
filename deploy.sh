#!/bin/bash

source ./.env

if ! ping -c 1 -W 5 "$ADDRESS"; then
    echo "Connect to VPN and try again"
    exit 127
fi

if ! ssh "$HOST_NAME" "$REMOTE_DIR"/deploy.sh; then
    echo "Failed to deploy on remote"
    exit 2
fi

echo "Site deployed on remote"
