#!/bin/bash

# Run tailwindcss in watch mode and Zola serve in parallel
tailwindcss -i ./static/app.css -o ./static/main.css && zola serve
