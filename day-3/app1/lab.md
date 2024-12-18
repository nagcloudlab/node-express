

curl -X POST http://localhost:5000/api/login \
-H "Content-Type: application/json" \
-d '{"username": "admin", "password": "admin123"}'


curl -X GET http://localhost:5000/api/admin \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NTIwNDc2LCJleHAiOjE3MzQ1MjQwNzZ9.Rk62dYIBMgqfREuHNZ-iKg_OY6IPWNqU5ulkL5n4rTo"
