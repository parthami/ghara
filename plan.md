# Deployment Guide: Running Node.js and Python Scripts on a New Machine

This guide outlines the necessary steps and prerequisites required to successfully set up and run the provided components (`node/` for JavaScript/React, and `python/` for image processing) on a new machine.

---

## ⚙️ Prerequisites (System Setup)
Before beginning any code execution, ensure the following tools are installed globally on the target operating system:

1.  **Node.js & npm/bun:** A stable Node.js runtime environment and its package manager (`npm` or `bun`).
2.  **Python 3:** The latest Python interpreter version (e.g., Python 3.10+).
3.  **System Dependencies:** Several Python libraries require underlying system development headers. You might need to install these using your distribution's package manager (e.g., `apt` on Ubuntu/Debian):
    *   `build-essential`: For general compilation tools.
    *   `libffi-dev`: Often needed by cryptographic or scientific packages.
    *   `python3-venv`: To create isolated virtual environments.
    *   *Note:* Additional dependencies like `ImageMagick`, `libpng`, and `cairo` might be required for `Pillow` and `CairoSVG` to function correctly.

## 💻 Step 1: Node.js Component Setup (JavaScript/React)

This section handles the setup and execution of the frontend/Node logic located in the `node/` directory.

**A. Installation:**
1.  **Navigate:** Open your terminal and change the current working directory to the project's root or directly into the component folder: `cd node/`.
2.  **Install Dependencies:** Install all required Node modules listed in `package.json`:
    ```bash
    npm install 
    # OR if using bun: bun install
    ```

**B. Execution:**
1.  Review the available scripts defined in `node/package.json` (e.g., `dev`, `start`, `build`).
2.  Execute the appropriate script to run the application or start the development server (e.g., `npm run dev`).

---

## 🐍 Step 2: Python Component Setup (`python/flash.py`)

This section handles the setup and execution of the image processing logic located in the `python/` directory.

**A. Virtual Environment (Highly Recommended):**
1.  Create a virtual environment to isolate project dependencies:
    ```bash
    python3 -m venv venv
    ```
2.  Activate the environment:
    *   Linux/macOS: `source venv/bin/activate`
    *   Windows (Cmd): `venv\Scripts\activate`

**B. Installation:**
1.  Install all Python packages listed in `python/requirements.txt`:
    ```bash
    pip install -r python/requirements.txt
    ```
2.  ***Troubleshooting:*** If this step fails due to missing system libraries (e.g., for CairoSVG), refer back to the prerequisites section and install those necessary system headers first.

**C. Execution:**
1.  The `flash.py` script is designed to read SVG data from **Standard Input (`sys.stdin`)**. Therefore, you must pipe the SVG content into the script when running it.

    *   **Example (assuming your SVG is in a file named `input.svg`):**
        ```bash
        cat input.svg | python flash.py
        ```
    *   If providing raw SVG data:
        ```bash
        echo '<svg>...</svg>' | python flash.py
        ```

---

## ✅ Final Deployment Checklist

- [ ] Ensure Node.js, Python 3, and system dependencies are installed.
- [ ] Install Node dependencies (`npm install` in `node/`).
- [ ] Create and activate a Python virtual environment (`venv`).
- [ ] Install Python dependencies (`pip install -r python/requirements.txt`).
- [ ] Run the Node component using the appropriate script (e.g., `npm run dev`).
- [ ] Pass the SVG data through the pipeline to execute the Python script (`cat input.svg | python flash.py`).</task_progress>
<command>echo "Deployment plan generated in plan.md"</command>
</write_to_file>