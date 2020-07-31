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
