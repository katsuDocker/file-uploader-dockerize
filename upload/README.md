# file-uploader

This's a file uploader stuff based on `express.js` (and some HTML + CSS Stuff) to upload (un)necessary thing to my old PC server (which is I called it sub NAS Service).

### Installation

For the installation

```zsh
git clone https://github.com/dethMastery/file-uploader.git
cd ./file-uploader
yarn
```

or use `npm` or `pnpm` to install the package. :D

### Usage

This project is based on `express.js` which use node.js as engine. After installation don't forget to set up env file before start (this one use split file cdn server (which I really prefer [9001/copyparty](https://github.com/9001/copyparty) because it's easier than setup express file listing :3 )) To set `.env` file just copy [.env.example](./.env.example) and change the config before run the below code

```zsh
yarn start
```

And like the above. It's okay to use `npm` or `pnpm`.

### Too lazy?

Are you too lazy to set-up everything? For my recommend to use DockerFile from [katsuDocker](https://github.com/katsuDocker/file-uploader-dockerize) instead :D
