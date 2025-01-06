#!/bin/bash

# Esperar a que Kafka esté listo
sleep 10

# Crear tópicos
kafka-topics --create --topic user.registration --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
kafka-topics --create --topic user.login --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1

echo "Tópicos creados: user.registration, user.login"
