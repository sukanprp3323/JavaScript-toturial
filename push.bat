@echo off
echo 🔁 Staging all files...
git add .

echo 💬 Committing changes...
git commit -m "update"

echo 🚀 Pushing to GitHub...
git push

echo ✅ Done! Press any key to close.
pause >nul