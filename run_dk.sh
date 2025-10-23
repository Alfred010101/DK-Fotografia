#!/bin/bash

echo "Iniciando proyecto DK Fotografía..."

# Abrir terminal para el frontend
gnome-terminal -- bash -c "
  echo 'Ejecutando FRONTEND...';
  cd front/fotografia || exit;
  npm run dev;
  exec bash
"

# Abrir terminal para el backend
gnome-terminal -- bash -c "
  echo 'Ejecutando BACKEND...';
  cd back/fotografia || exit;
  ./gradlew bootRun;
  exec bash
"

