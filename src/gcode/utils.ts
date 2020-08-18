export async function readFileText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      resolve(e.target!.result as string);
    };
    fileReader.onerror = reject;

    fileReader.readAsText(file);
  });
}

export function saveLines(lines: string[]) {
  const gcode = lines.join("\n");
  const blob = new Blob([gcode], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.download = "output.gcode";
  a.href = url;
  a.target = "_blank";
  a.click();
}
