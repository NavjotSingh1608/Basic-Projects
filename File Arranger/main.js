import fs from "fs/promises";
import fsN from "fs";
import path from "path";

async function organizeFiles() {
    // provide your file path to be arranged
    // example = "D:\\Codes\\Graphs"
    const fpath = "";

    try {
        let files = await fs.readdir(fpath);

        for (const item of files) {
            let ext = item.split(".")[item.split(".").length - 1];

            if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
                let extDir = path.join(fpath, ext);

                if (!fsN.existsSync(extDir)) {
                    await fs.mkdir(extDir, { recursive: true });
                }

                await fs.rename(path.join(fpath, item), path.join(extDir, item));
            }
        }
    } catch (err) {
        console.error("Error organizing files:", err);
    }
}

organizeFiles();
