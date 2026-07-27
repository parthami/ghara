import satori from 'satori';

const font = Bun.file('node/Roboto-Black.ttf');
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

  const python = Bun.spawn(["python3", "display_driver.py"], {
  stdin: "pipe",
  stderr: "pipe",
  stdout: "pipe",
});

// 1. Write string/Uint8Array directly to python.stdin (FileSink)
python.stdin.write(img);

// 2. Flush and close stdin stream (signals EOF to Python)
python.stdin.end();

// 3. Read stderr output
if (python.stderr) {
  const stderrText = await new Response(python.stderr).text();
  if (stderrText.trim()) {
    console.error(`[Python Err]: ${stderrText.trim()}`);
  }
}

// 4. Await process termination
const code = await python.exited;
console.log(`[Pipeline] Driver exited with code ${code}`);
}

generateImage();