import satori from 'satori';

const font = Bun.file('Roboto-Black.ttf');
const fontData = await font.arrayBuffer();


async function generateImage() {

  
  const img = await satori(
    <div style={{ color: 'black' }}>hello, world</div>,
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
  
  await Bun.write("output.svg", img)

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