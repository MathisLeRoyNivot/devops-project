FROM python:3.7-slim as builder

WORKDIR /usr/src/devops-project/plc-python
COPY . .

RUN pip install -r requirements.txt

FROM builder
WORKDIR /usr/src/devops-project-prod
COPY --from=builder /usr/src/devops-project/plc-python /usr/src/devops-project-prod

ENTRYPOINT [ "python3", "main.py" ]