@echo off
echo ========================================================
echo Auto Publisher for My Homepage Project
echo ========================================================
echo.
echo 1. Adding all changes...
cmd /c git add .

echo.
echo 2. Committing changes...
set /p commit_msg="Enter commit message (Press Enter for default 'Update'): "
if "%commit_msg%"=="" set commit_msg=Update
cmd /c git commit -m "%commit_msg%"

echo.
echo 3. Pushing source code to GitHub (main branch)...
cmd /c git push origin main

echo.
echo 4. Building and Deploying to GitHub Pages...
cmd /c npm run deploy

echo.
echo ========================================================
echo DONE! Your website is being updated.
echo It may take 1-2 minutes for changes to appear online.
echo ========================================================
pause
