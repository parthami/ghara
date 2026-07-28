#!/usr/bin/env bash
set -e

# Copy unit files to system directory
sudo cp systemd/ghara.service /etc/systemd/system/
sudo cp systemd/ghara.timer /etc/systemd/system/

sudo chmod 644 /etc/systemd/system/ghara.service
sudo chmod 644 /etc/systemd/system/ghara.timer

# Reload systemd to pick up new changes
sudo systemctl daemon-reload

# Enable and start the timer
sudo systemctl enable --now ghara.timer

echo "systemd service and timer installed and started successfully!"