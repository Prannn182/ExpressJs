import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const dir = "C:\\Users\\A\\web\\ExpressJs\\assignment";

const files = await fs.readdir(dir);

for (const file of files) {
    const ext = file.split('.').pop(); // get extension
    const extPath = `${dir}\\${ext}`;
 
    // Create folder if it doesn't exist
    if (!fsn.existsSync(extPath)) {
        await fs.mkdir(extPath);
    }

    // Move file
    await fs.rename(`${dir}\\${file}`, `${extPath}\\${file}`);
    console.log(`Moved ${file} to folder ${ext}`);
}
