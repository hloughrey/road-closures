FROM postgres:12.1

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD 'password123'
ENV POSTGRES_DB roads

RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip postgis postgresql-12-postgis-3 \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/

EXPOSE 5432
CMD ["postgres"]


