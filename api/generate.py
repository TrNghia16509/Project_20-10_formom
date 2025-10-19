# api/generate.py
# Vercel will run this as a Python serverless function.
# Endpoint: POST /api/generate


import json


def handler(request):
try:
body = request.json()
except Exception:
# fallback if request body not json
return {
'statusCode': 400,
'body': json.dumps({'error':'Bad request'})
}


name = body.get('name') or 'Mẹ yêu'
tone = body.get('tone') or 'warm'


title = name


if tone == 'warm':
message = f"{name}, con chúc mẹ một ngày 20/10 đầy yêu thương và bình an. Cảm ơn mẹ đã luôn bên con."
elif tone == 'funny':
message = f"{name}, mẹ đúng là siêu anh hùng – siêu nấu ăn, siêu chăm sóc và siêu yêu thương. Chúc mẹ ngày 20/10 thật vui!"
else:
message = f"{name}, như những cánh hoa hé nở, tình mẹ mãi thơm ngát trong tim con. Chúc mẹ 20/10 an nhiên."


return {
'statusCode': 200,
'headers': {'Content-Type': 'application/json'},
'body': json.dumps({'title': title, 'message': message})
}
