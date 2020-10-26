# Tinindo API

API de interação com o front-end. Faz a comunicação entre a view e a camada de banco de dados.

## Autenticação:
A autenticação é feita via um token JWT, que é fornecido ao usuário fazer login via API.
Para fazer login, é necessário enviar uma requisição **POST** para o endpoint **/sessions** com o seguinte conteúdo no corpo da requisição:

```json
{
    "email": "gabriel.moura@gmail.com",
    "password": "123456"
}
```

Na resposta da requisição retornará o token gerado para a sessão, junto com as principais informações do usuário.
O token é válido durante o período de 1 dia. Esse é um exemplo de resposta de requisição:

```json
{
    "user": {
        "user_id": 8,
        "first_name": "Gabriel",
        "last_name": "Moura",
        "email": "gabriel.moura@gmail.com",
        "whatsapp": "40028922",
        "document": "1111111111",
        "birth_date": "2000-05-26T00:00:00.000Z",
        "is_provider": false,
        "active": true,
        "avatar": null,
        "created_at": "2020-10-25T17:34:01.731Z",
        "updated_at": "2020-10-25T17:34:01.731Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19wcm92aWRlciI6ZmFsc2UsImlhdCI6MTYwMzc0ODA0OSwiZXhwIjoxNjAzODM0NDQ5LCJpc3MiOiJhcGktanVwaXRlciIsInN1YiI6IjgifQ.u8blwRPeLOAjho2Oae498LRj3LmxAn3jbxABLUI7SF8"
}
```

## Endpoints:
### POST - /users
Cria usuários com as informações enviadas no corpo da requisição. Esse endpoint não necessita de autenticação.
Exemplo de payload:

```json
{
	"first_name": "Gabriel",
	"last_name": "Moura",
	"password": "123456",
	"whatsapp": "40028922",
	"email": "gabriel.moura@gmail.com",
	"document": "1111111111",
	"is_provider": false,
    "avatar": "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG",
	"birth_date": "2000-05-26T13:00:00"
}
```


### GET - /users
Lista usuários ativos cadastrados, mostrando apenas informações principais.
Os parâmetros limit e offset para o controle de paginação são opcionais.

**Requisição**:
```json
{
  "headers": {"Authorization": "Bearer ${token}"},
  "query": {
    "limit": 20,
    "offset": 0
  }
}
```
**Resposta**:
```json
[
    {
        "user_id": 4,
        "first_name": "Teste",
        "last_name": "Dev",
        "email": "teste.dev@gmail.com",
        "whatsapp": "40028922",
        "document": "1111111111",
        "birth_date": "2000-05-26T03:00:00.000Z",
        "is_provider": null,
        "active": true,
        "avatar": null,
        "created_at": "2020-10-25T16:09:11.880Z",
        "updated_at": "2020-10-25T16:09:11.880Z",
        "score": null
    },
    {
        "user_id": 2,
        "first_name": "Marivalda",
        "last_name": "Silva",
        "email": "marivalda.silva@gmail.com",
        "whatsapp": "40028922",
        "document": "1111111111",
        "birth_date": "2000-05-26T03:00:00.000Z",
        "is_provider": null,
        "active": true,
        "avatar": null,
        "created_at": "2020-10-22T10:58:17.809Z",
        "updated_at": "2020-10-22T10:58:17.809Z",
        "score": "4.3333333333333333"
    },
    {
        "user_id": 8,
        "first_name": "Gabriel",
        "last_name": "Moura",
        "email": "gabriel.moura@gmail.com",
        "whatsapp": "40028922",
        "document": "1111111111",
        "birth_date": "2000-05-26T03:00:00.000Z",
        "is_provider": false,
        "active": true,
        "avatar": null,
        "created_at": "2020-10-25T17:34:01.731Z",
        "updated_at": "2020-10-25T17:34:01.731Z",
        "score": "4.0000000000000000"
    }
]
```

### GET - /users/{user_id}
Encontra detalhes do usuário pelo ID. Necessário enviar o token no cabeçalho da requisição
**Requisição**:
```json
{
    "headers": {"Authorization": "Bearer ${token}"
}
```
**Resposta**:
```json
{
    "user_id": 8,
    "first_name": "Gabriel",
    "last_name": "Moura",
    "email": "gabriel.moura@gmail.com",
    "whatsapp": "40028922",
    "document": "1111111111",
    "birth_date": "2000-05-26T00:00:00.000Z",
    "is_provider": false,
    "active": true,
    "avatar": null,
    "created_at": "2020-10-25T17:34:01.731Z",
    "updated_at": "2020-10-25T17:34:01.731Z",
    "score": "4.0000000000000000",
    "properties": [
        {
            "property_id": 4,
            "postal_code": "11702220",
            "number": "123",
            "complement": "apto. 11",
            "street": "Rua Ciro Carneiro",
            "neighborhood": "Guilhermina",
            "city": "Praia Grande",
            "state": "SP",
            "country": "Brasil",
            "latitude": "-24.011644",
            "longitude": "-46.4314386,16z",
            "rooms_quantity": 3,
            "bathrooms_quantity": 2,
            "living_rooms_quantity": 1,
            "kitchens_quantity": 1,
            "garages_quantity": 1,
            "user_id": 8,
            "created_at": "2020-10-26T22:33:28.583Z",
            "updated_at": "2020-10-26T22:33:28.583Z"
        }
    ]
}
```