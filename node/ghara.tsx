import satori from 'satori';
import Dashboard from './dashboard';

const font = Bun.file('Roboto-Black.ttf');
const fontData = await font.arrayBuffer();


async function generateImage() {  
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
  
  // console.log("Writing SVG to output.svg");
  // await Bun.write("output.svg", img)


  console.log("Spawning Python process");

  const python = Bun.spawn(["python3", "flash.py"], {
  cwd: "../python",
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

generateImage();