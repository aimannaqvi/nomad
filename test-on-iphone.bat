@echo off
echo ========================================================
echo    Testing on iPhone from Windows PC
echo ========================================================
echo.
echo Since you're on Windows, you cannot directly deploy to iPhone without a Mac.
echo However, you can test the web version of your app on your iPhone browser:
echo.
echo 1. Starting the development server...
echo    Server will be available at: http://%COMPUTERNAME%:3000
echo    Or use your IP address: http://192.168.1.4:3000
echo.
echo 2. On your iPhone:
echo    - Make sure your iPhone is connected to the same WiFi network as this computer
echo    - Open Safari and navigate to: http://192.168.1.4:3000
echo    - You can save it to your home screen for a more app-like experience
echo.
echo To stop the server, press Ctrl+C in this window.
echo.
echo ========================================================
echo.

npm run mobile-dev 