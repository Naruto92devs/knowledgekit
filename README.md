This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository using HTTPS, SSH, or GitHub CLI according to your system setup:

```bash
# Clone the repository
git clone https://github.com/example/example.git

# Change into the project directory
cd example

# Install dependencies
npm install

```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you want 
to run the project on your local network, first check your IP address using the terminal or command prompt:

```bash
# For Windows
ipconfig

# For macOS and Linux
ifconfig

```

Look for the en0 or en1 interface for wired or wireless connections, respectively, and find the inet entry, which is your IP address. After finding your IP address, you can access the project on your local network by navigating to http://<your-ip>:3000 in your browser (e.g., http://192.168.0.1:3000).

## Contributing

## Creating a Branch

To contribute, create your branch using this example template:

```bash
# Create a new branch
git branch dev_example

# Switch to your branch
git checkout dev_example

```

## Making Your First Commit

Make your first commit by adding your name to the `contributors.md` file and push the changes to your branch:


```bash
# Check the status of your changes
git status

# Add all the changes you made
git add .

# Commit changes with a message
git commit -m "Add my name to contributors file"

# Push your changes to your branch
git push

```

## Creating a Pull Request

After pushing your changes, go to the GitHub repository and create a pull request. Wait for any contributor to review your changes and approve them.

## Start Editing

You can start editing the page by modifying `app/page.js` or start adding pages to `app` folder by creating a folder for the page you want. For Example if you want to create page for route `http://localhost:3000/about`, you can create a folder in `app` folder like this `about/page.js` and the page auto-updates as you edit the file. You can also create components in the `src/components` folder.

## Project Design

you will need a design file to follow the instructions to create components and pages, here is the figma design file link:
[https://www.figma.com/design/Hg1SxbALE8SUQt1Jd7Jqoq/Knowledgekit?node-id=0-1&t=LEkkaJGU1PsyDdtU-1](https://www.figma.com/design/Hg1SxbALE8SUQt1Jd7Jqoq/Knowledgekit?node-id=0-1&t=LEkkaJGU1PsyDdtU-1)

## Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. You can also add custom fonts by adding font file to `src/fonts` folder.

## Important

Your pull request cannot be directly merged with main branch untill it's not reviewd and approved by any contributer or admin, so please wait for someone to approve your changes, it will help everyone to make sure there are no conflicts. Thanks for your contribution!
