FROM openjdk:8-alpine

COPY target/uberjar/vegas.jar /vegas/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/vegas/app.jar"]
