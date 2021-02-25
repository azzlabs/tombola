FROM node:15.5-alpine
RUN adduser --disabled-password app
COPY . /app
RUN mv /app/config.json.example /app/config.json
RUN chown -R app:app /app
USER app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm" ]
CMD ["start"]
