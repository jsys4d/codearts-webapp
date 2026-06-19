# 🌐 CodeArts WebApp

Aplicación web full-stack desplegada con Docker y Kubernetes, desarrollada durante las prácticas FCT en CodeArts Solutions.

## 🏗️ Stack Tecnológico

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=github-actions&logoColor=white)

## 📦 Características

- Backend Node.js + Express con API REST
- Base de datos MongoDB contenerizada
- Contenerización con Docker y Docker Compose
- Orquestación con Kubernetes en Minikube
- Pipeline CI/CD con GitHub Actions para despliegue automático en cada push

## 🔧 Arquitectura

El proyecto sigue una arquitectura de microservicios contenerizada. El código se sube a GitHub, GitHub Actions ejecuta el pipeline CI/CD automáticamente, construye la imagen Docker y la despliega en el clúster Kubernetes (Minikube). Dentro del clúster hay dos pods independientes: uno con la API Node.js/Express en el puerto 3000 y otro con MongoDB en el 27017, comunicados mediante un servicio interno de Kubernetes.

## 🚀 Despliegue local con Docker Compose

```bash
git clone https://github.com/jsys4d/codearts-webapp.git
cd codearts-webapp
docker compose up -d
docker compose ps
```

## ☸️ Despliegue con Kubernetes

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get services
```

## 📁 Estructura del proyecto
codearts-webapp/

├── src/               # Código fuente Node.js + Express

├── k8s/               # Manifiestos Kubernetes (deployment, service)

├── Dockerfile         # Imagen de la aplicación

├── docker-compose.yml # Despliegue local

└── README.md

## 🔒 CI/CD Pipeline

Cada push a la rama `main` dispara automáticamente el pipeline de GitHub Actions que realiza las siguientes fases: build de la imagen Docker, ejecución de tests, y despliegue en el clúster Kubernetes.

---
*Desarrollado durante prácticas FCT en CodeArts Solutions — CESUR Zaragoza 2024-2026*

