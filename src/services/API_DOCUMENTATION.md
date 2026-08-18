# NAMASTE EHR Backend API Documentation

## Base URL

http://127.0.0.1:5000

---

## 1. Health Check

### GET `/`

Checks whether the backend server is running.

Response:

```json
{
  "success": true,
  "message": "NAMASTE EHR Backend is running"
}