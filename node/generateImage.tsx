import satori from 'satori';
import Dashboard from './dashboard';
import { join } from 'node:path';

export async function generateImage() { 
 const fontPath = join(import.meta.dir, 'Roboto-Black.ttf'); 
  const font = Bun.file(fontPath);
  const fontData = await font.arrayBuffer();

  console.log("Generating SVG using Satori");

  const img = await satori(
    <Dashboard />,
    {
      width: 800,
      height: 480,
      fonts: [
        {
          name: 'Roboto',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
    
  )

  if(process.env.ENVIROMENT === "DEV") {
        console.log("Writing SVG to output.svg");
        await Bun.write("output.svg", img)
        return;
    }


  console.log("Spawning Python process");

const pythonDir = join(import.meta.dir, "../python");

const venvPython = "/home/parth/ghara/python/.venv/bin/python3";

const python = Bun.spawn([venvPython, join(pythonDir, "flash.py")], {
  cwd: pythonDir,
  stdin: "pipe",
  stderr: "pipe",
  stdout: "pipe",
});

python.stdin.write(img);

python.stdin.end();

if (python.stderr) {
  const stderrText = await new Response(python.stderr).text();
  if (stderrText.trim()) {
    console.error(`[Python Err]: ${stderrText.trim()}`);
  }
}

const code = await python.exited;
console.log(`[Pipeline] Driver exited with code ${code}`);
}