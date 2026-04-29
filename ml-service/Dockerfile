FROM python:3.9-slim

WORKDIR /app

# Copy and install only what we need
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code (including predict_api.py and model.pkl)
COPY . .

# EXPOSE port 8000 for Render
EXPOSE 8000

# We point gunicorn to 'predict_api' file and the 'app' variable inside it
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "predict_api:app"]