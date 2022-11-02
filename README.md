<div align="center">
    <img src="src/assets/z1-badge.png" width="96">
    <h1>Z1 Front-end Challenge</h1>
    <div>
        <a href="https://z1-front-end-challenge.netlify.app/">
            <img src="https://api.netlify.com/api/v1/badges/9d78ade2-9087-4631-b289-ba4380a4a7fd/deploy-status" alt="Netlify Status">
        </a>
    </div>
    <hr />
</div>

## 📥 Local setup

Firstable, clone the repository in your local machine and move to its folder

```shell
git clone https://github.com/thedaviddelta/z1-front-end-challenge
cd z1-front-end-challenge
```

Then, install the needed dependencies using the `yarn` package manager

```shell
yarn install
```

`npm` also works but would last more as there's no generated lockfile

```shell
npm install
```

Now you can run start a development server with Hot Reload

```shell
yarn dev
```

It may also be useful to isolatedly design components using storybook

```shell
yarn build-storybook
yarn storybook
```

When finished working, remember to run the integration test-suite

```shell
yarn test
```

And, optionally, the end-to-end tests too

```shell
yarn cy:open
```

If everything seems right, create a production build and run it

```shell
yarn build
yarn start
```


## 🧑‍💻 Development environment

This project was originally built in [Neovim](https://neovim.io/), thanks to its [built-in LSP](https://neovim.io/doc/user/lsp.html) and the [editorconfig.nvim](https://github.com/gpanders/editorconfig.nvim) plugin.

Nevertheless, it can be developed with any other environment, as long as it meets the following requirements:
+ It has a TypeScript language server (e.g. [VSCode/Neovim/Emacs' `tsserver`](https://github.com/typescript-language-server/typescript-language-server))
+ It supports Eslint formatting and linting (whether it's using a linter like [VSCode's plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Neovim's `null-ls`](https://github.com/jose-elias-alvarez/null-ls.nvim), or a whole language server like Neovim's built-in LSP)
+ Optionally, understands [`editorconfig`](https://editorconfig.org/), so it can follow some per-file configurations, but most of them are already covered by Eslint
+ Optionally, supports [Prettier](https://prettier.io/), but Eslint can take care of its rules as well
+ Optionally, it works with [`nvm`](https://github.com/nvm-sh/nvm), so the project can be run under the same NodeJS version, but if your globally-installed version has the same major it should work fine


## 🧮 Design decisions

+ The original project setup is respected as much as possible, not only its folder structure and Eslint rules, but also with the new folder's distribution and the new component's architecture decisions
+ The application pre-renders every song metadata in the compilation step, so the client shouldn't need to query outside the cache
+ The sidebar and the player aren't rendered on the server as their state is shared by every page in case of a client-side transition
+ The favourite button isn't rendered on the server either as it manages a client-stored information
+ The select component uses a design hack for it to get custom styling as well as a custom display value
+ The audio player makes use of the [Media Session API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API), so the supported browsers should be able to display custom media notifications on the host system
+ The `useEffect` hook is tried to be used only when directly addressing an imperative API, and not as a listener for value updates, but sometimes it has to also be used like that because of some hooks limitations
