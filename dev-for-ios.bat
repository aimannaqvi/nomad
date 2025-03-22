@echo off
echo === Starting Development Server for iOS ===
echo.
echo IMPORTANT: Make sure to update capacitor.config.json with your computer's IP address!
echo Run ipconfig in Command Prompt to find your IP address.
echo.

REM Check if capacitor.config.json has been updated
findstr /C:"REPLACE_WITH_YOUR_IP" capacitor.config.json >nul
if %errorlevel% equ 0 (
    echo ERROR: You need to update capacitor.config.json with your IP address!
    echo Open capacitor.config.json and replace REPLACE_WITH_YOUR_IP with your actual IP.
    pause
    exit /b
)

echo Starting development server...
npm run mobile-dev 