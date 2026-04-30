FROM node:25.9-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig.json ./
COPY src ./src

CMD ["pnpm", "exec", "tsx", "src/main.ts"]
