FROM node:18.18.0-alpine AS builder

WORKDIR /app

COPY package*.json .
RUN cat package.json
COPY pnpm-lock.yaml .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY vite.config.ts .
COPY svelte.config.js .
COPY postcss.config.js .

RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

RUN ls -la build

FROM node:18.8.0-alpine AS deployer

WORKDIR /app


COPY --from=builder /app/build build/
COPY --from=builder /app/package.json /app/pnpm-lock.yaml .
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "node", "build" ]