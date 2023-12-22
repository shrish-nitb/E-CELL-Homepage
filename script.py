import os
import subprocess

def convert_to_webp(input_path, output_path):
    try:
        # Run cwebp command using subprocess
        subprocess.run(['cwebp', input_path, '-o', output_path])

        # Remove the original file after successful conversion
        os.remove(input_path)
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

def convert_images_in_folder(folder_path):
    # Ensure the output folder exists
    if not os.path.exists(folder_path):
        print(f"Error: Folder '{folder_path}' does not exist.")
        return

    # Loop through files and subdirectories in the folder
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                input_path = os.path.join(root, filename)
                output_path = os.path.join(root, f"{os.path.splitext(filename)[0]}.webp")

                # Convert and replace the image using cwebp
                convert_to_webp(input_path, output_path)

def main():
    folder_path = input("Enter the folder path: ")
    convert_images_in_folder(folder_path)

if __name__ == "__main__":
    main()
