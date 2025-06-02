FROM node:18

WORKDIR /app

COPY package.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY vite.config.js ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "dist"]
