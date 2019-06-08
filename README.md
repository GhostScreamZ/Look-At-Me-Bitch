# Look-At-Me-Bitch
A small program to get the user's IP and other parameters

Download:

git clone https://github.com/GhostScreamZ/Look-At-Me-Bitch.git

Install:

chmod +x install.sh &&
./install.sh

Usage:

node LookAtMeBitch.js

After running this command, the program server will be started in localhost on port 3000
You can download Ngrok and throw the server into the network(Internet) with command(after starting the server):

./ngrok http 3000

This program generate web-server on localhost:3000 with supposedly not found web page and determines OS, IP, Browser and other parameters of victim request
