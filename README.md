# about

coming soon

# todo

- handle quota exceeded error for indexeddb and cache api

# License

The GNU Affero General Public License (AGPL) allows anyone to view, use, and modify the code, emphasizing openness and collaboration, with the condition that any modifications or derivatives must also be distributed under the AGPL, ensuring continued open source availability. 🚀✨

# a11y guidelines

- links in text blocks will be underlined
- provide light and dark mode with enough contrast

# style guide

## dark mode

- [dark mode guide](https://www.youtube.com/watch?v=6U9iC-c15AI)
- for readability don't use pure black on white (or vice versa) since it can make the text blurry to read, even though it's a high contrast combination. instead use a dark grey on white or a light grey on black
- instead of just box shadow use a border and some gradients in dark mode since normal shadows don't work as well there
- for dark mode we usually don't use vivid colors, but try to make them muted (a bit darker and less saturated)
- minimalism: don't use too many colors if you don't need to. use gaussian blurs, border effects or backgrounds with big text for heroes and keep normal text blocks simple
- use a lot of white space to make the content more readable
- lighter backgrounds make something "pop" more than darker ones

# tech

## tech stack

this project uses a minimal tech stack with sveltekit to get components and a page-based routing system without shipping a framework to the client. it purposfully does not use tailwindcss to avoid a complicated settings file (even though it's great for saving characters on common utilities) - instead it uses css variables (with [open-props](https://open-props.style/) as a starting point) for the design system to keep it simple and use regular css for styling. styles are scoped to the component by default. it also uses [postcss](https://postcss.org/) for some convenience features like custom media queries.

all styles use layers to be easily overridable by the user if they wish to customize

this project will switch from node to [bun](https://bun.sh/) once it's [ready for windows](https://bun.sh/docs/installation#windows)

## custom media queries

Currently one step ahead of [the CSS spec](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media), this project already uses custom media queries by transforming them via postcss. all of them are defined in a single file and can be used in any component or style file. the idea is from open-props, but we redefine the queries to be able to change them instead of importing fixed values.

## icons

uses icons from [iconify](https://icon-sets.iconify.design/). they are downloaded to make them available offline as well. they do not use iconify for svelte to avoid using the iconify api because of its [downsides](https://iconify.design/docs/icons/icon-data).

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
