@echo OFF
echo "open local host port 8080"
firefox.exe -new-window http://localhost:8080
echo "start local host server port 8080"
nodemon index.js
pause