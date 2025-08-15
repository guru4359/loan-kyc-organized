import os
import shutil
import zipfile

# === CONFIG ===
BASE_DIR = "loan_app"  # final app folder name
ZIP_NAME = "loan_app.zip"

# Desired folder structure
FOLDERS = [
    "templates",
    "static/css",
    "static/js",
    "static/images",
    "uploads",
]

# Files that belong in each folder (map extension to folder)
FILE_MAP = {
    ".html": "templates",
    ".css": "static/css",
    ".js": "static/js",
    ".png": "static/images",
    ".jpg": "static/images",
    ".jpeg": "static/images",
}

def create_structure():
    os.makedirs(BASE_DIR, exist_ok=True)
    for folder in FOLDERS:
        os.makedirs(os.path.join(BASE_DIR, folder), exist_ok=True)

def move_files():
    current_dir = os.getcwd()
    for file in os.listdir(current_dir):
        if os.path.isfile(file):
            ext = os.path.splitext(file)[1].lower()
            target_folder = FILE_MAP.get(ext)
            if target_folder:
                shutil.move(file, os.path.join(BASE_DIR, target_folder, file))
            else:
                shutil.move(file, os.path.join(BASE_DIR, file))

def create_gitkeep():
    for folder in FOLDERS:
        keep_path = os.path.join(BASE_DIR, folder, ".gitkeep")
        open(keep_path, "w").close()

def make_zip():
    with zipfile.ZipFile(ZIP_NAME, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(BASE_DIR):
            for file in files:
                filepath = os.path.join(root, file)
                arcname = os.path.relpath(filepath, BASE_DIR)
                zipf.write(filepath, arcname)

if __name__ == "__main__":
    create_structure()
    move_files()
    create_gitkeep()
    make_zip()
    print(f"✅ Project organized and zipped as {ZIP_NAME}")
