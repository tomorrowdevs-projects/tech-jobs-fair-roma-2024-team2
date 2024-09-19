# Usa un'immagine base con Java 17 su amd64
FROM --platform=linux/amd64 eclipse-temurin:17-jdk-alpine

# Imposta la directory di lavoro
WORKDIR /app

# Copia il JAR dell'applicazione nella directory di lavoro
COPY moovt/target/moovt-0.0.1-SNAPSHOT.jar app.jar

# Espone la porta su cui l'applicazione sarà in ascolto
EXPOSE 8080

# Comando per eseguire l'applicazione
ENTRYPOINT ["java", "-jar", "app.jar"]
