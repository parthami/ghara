#!/usr/bin/env bash
set -e

sudo cp ghara.service /etc/systemd/system/

sudo chmod 644 /etc/systemd/system/ghara.service

sudo systemctl daemon-reload

echo "systemd service installed and started successfully!"