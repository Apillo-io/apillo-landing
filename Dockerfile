# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static files
RUN mkdir -p .next && \
    cp -r /app/.next/static ./.next/ 2>/dev/null || true && \
    cp -r /app/public ./public 2>/dev/null || true

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]