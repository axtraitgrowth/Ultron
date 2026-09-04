# Production Deployment Guide

## 1. Docker Compose Production Deployment
The platform includes a containerized infrastructure configuration:

```bash
cd infrastructure/docker
docker-compose up -d --build
```

This provisions:
1. **`ultron-postgres`**: PostgreSQL 16 on port 5432 with persistent volume `postgres_data`.
2. **`ultron-redis`**: Redis 7 on port 6379 with persistent volume `redis_data`.
3. **`ultron-api`**: Production-built NestJS container on port 3001.

## 2. Production Environment Checklist
- [ ] Set unique `JWT_SECRET` and `JWT_REFRESH_SECRET`.
- [ ] Configure production PostgreSQL database connection string in `DATABASE_URL`.
- [ ] Configure production Redis cluster in `REDIS_URL`.
- [ ] Restrict `CORS_ORIGIN` to production domain.
- [ ] Run database migrations with `npm run db:migrate`.
- [ ] Execute initial seed with `npm run db:seed`.
