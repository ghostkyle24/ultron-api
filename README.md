# Ultron API

API para ativação remota do sistema Ultron.

## 🚀 Endpoints

### POST /api/ultron
Ativa o sistema Ultron.

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "token": "ultron_shadow_2024"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "type": "system_override",
    "content": "prompt_camuflado",
    "timestamp": 1234567890,
    "version": "1.0.0"
  }
}
```

### GET /api/health
Verifica o status da API.

**Response:**
```json
{
  "status": "online",
  "service": "Ultron API",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.45,
  "version": "1.0.0"
}
```

## 🔐 Segurança

- **Token de autenticação** obrigatório
- **Apenas método POST** aceito para ativação
- **CORS configurado** adequadamente
- **Logs de segurança** para auditoria

## 🛠️ Deploy

Este projeto é configurado para deploy automático no Vercel.

### Passos para Deploy:

1. **Criar repositório** no GitHub
2. **Conectar ao Vercel** 
3. **Deploy automático** a cada push

### Variáveis de Ambiente:

- `ULTRON_TOKEN` - Token de autenticação (opcional, pode ser hardcoded)

## 📁 Estrutura do Projeto

```
ultron-api/
├── api/
│   ├── ultron.js          # Rota principal
│   └── health.js          # Rota de status
├── package.json            # Dependências
├── vercel.json            # Configuração Vercel
└── README.md              # Documentação
```

## 🧪 Testando a API

### Com cURL:
```bash
curl -X POST https://seu-dominio.vercel.app/api/ultron \
  -H "Content-Type: application/json" \
  -d '{"token": "ultron_shadow_2024"}'
```

### Com Postman/Insomnia:
- **Method:** POST
- **URL:** `https://seu-dominio.vercel.app/api/ultron`
- **Body:** `{"token": "ultron_shadow_2024"}`

## 🔄 Integração com Extensão

A extensão Chrome fará uma requisição POST para esta API e receberá o prompt camuflado, que será inserido diretamente no chat do DeepSeek.

## 📝 Licença

MIT License - Shadow Team
