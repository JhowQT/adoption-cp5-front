# 🐾 Animal Adoption API - Guia Completo (H2 + Testes)

Este projeto é uma API Java (Spring Boot) para gerenciamento de adoção de animais.

Aqui você vai aprender:

✔ Como rodar a API
✔ Como acessar o banco H2
✔ Como visualizar os dados de teste
✔ Como testar os endpoints (Animal e User)
✔ Como conectar com o front-end

---

# 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/JhowQT/animal-adoption-system.git
cd animal-adoption-system
```

---

### 2. Rode a aplicação

Com Maven:

```bash
mvn spring-boot:run
```

Ou pela sua IDE (IntelliJ / VS Code)

---

# 🗄️ Acessando o banco H2 (IMPORTANTE)

A aplicação usa banco em memória (H2), então os dados são gerados automaticamente ao subir o projeto.

---

## 🔹 User Service (porta 8081)

Acesse no navegador:

👉 http://localhost:8081/h2-console

Use exatamente essas configurações:

* **JDBC URL:** `jdbc:h2:mem:userdb`
* **User:** `sa`
* **Password:** *(deixe vazio)*

---

## 🔹 Animal Service (porta 8082)

Acesse:

👉 http://localhost:8082/h2-console

Use:

* **JDBC URL:** `jdbc:h2:mem:animaldb`
* **User:** `sa`
* **Password:** *(deixe vazio)*

---

## ⚠️ Importante

* O banco só existe **enquanto a aplicação estiver rodando**
* Se reiniciar o projeto → os dados são recriados

---

# 📊 Dados de teste (Animais)

O sistema já possui dados pré-carregados automaticamente.

Tabela: `tb_animal`

Exemplo de dados inseridos:



---

### 🔎 Como consultar no H2

Depois de conectar:

```sql
SELECT * FROM tb_animal;
```

Você verá animais como:

* Rex (Labrador)
* Luna (Poodle)
* Thor (Pitbull)
* Mia (Siamese)
* Bella (Golden Retriever)

---

# 🔗 Endpoints da API

## 🐶 Animal Service (porta 8082)

### Listar animais

```http
GET http://localhost:8082/animals
```

---

### Buscar por ID

```http
GET http://localhost:8082/animals/1
```

---

### Criar animal

```http
POST http://localhost:8082/animals
```

Exemplo JSON:

```json
{
  "nmAnimal": "Bolt",
  "dsSpecies": "Dog",
  "dsBreed": "Mixed",
  "nrAge": 2,
  "dsSize": "Medium",
  "dsTemperament": "Friendly",
  "dsEnergyLevel": "High",
  "flRequiresYard": true,
  "flGoodWithKids": true,
  "dsAdoptionStatus": "AVAILABLE",
  "dsDescription": "Muito ativo"
}
```

---

## 👤 User Service (porta 8081)

### Listar usuários

```http
GET http://localhost:8081/users
```

---

### Criar usuário

```http
POST http://localhost:8081/users
```

---

# 🧪 Testando a API

Use ferramentas como:

* Insomnia
* Postman

---

## ✔ Teste rápido

1. Suba a aplicação
2. Acesse:

```http
GET http://localhost:8082/animals
```

3. Você deve ver a lista de animais do banco H2

---

# 🌐 Integração com o Front-end

Repositório do front:

👉 https://github.com/JhowQT/adoption-cp5-front

---

## ⚙️ Configurar API no Angular

No arquivo environment.ts:

```ts
export const environment = {
  apiUrl: 'http://localhost:8082'
};
```

---

## 🔄 Fluxo completo

1. Front chama `/animals`
2. API consulta banco H2
3. Retorna JSON
4. Front renderiza na tela

---

# 📁 Estrutura do projeto

```bash
src/main/java
 ├── controller
 ├── service
 ├── repository
 ├── entity
 ├── dto
 └── config
```

---

# ⚠️ Problemas comuns

### ❌ Não conecta no H2

✔ Verifique se está usando a porta correta
✔ Verifique o JDBC URL
✔ Não coloque senha

---

### ❌ API não responde

✔ Verifique se a aplicação está rodando
✔ Veja o console do Spring Boot

---

# 👨‍💻 Autor

Jhonatan Quispe Torrez
FIAP - Análise e Desenvolvimento de Sistemas

---

# 📌 Observação final

Este projeto é acadêmico e tem como objetivo demonstrar:

* Arquitetura em microserviços
* Integração front + back
* Uso de banco em memória (H2)
* Organização em camadas (Controller, Service, Repository)

---

## 📊 Dados de teste (Animais)

O sistema pode já carregar dados automaticamente, mas caso queira inserir manualmente, use os comandos abaixo no H2 Console.

Tabela: `tb_animal`

---

### 🐾 Inserts para teste

Copie e cole no H2:

```sql
INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Rex', 'Dog', 'Labrador', 3, 'Large', 'Friendly', 'High', true, true, 'AVAILABLE', 'Cachorro muito amigável');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Luna', 'Dog', 'Poodle', 2, 'Small', 'Calm', 'Medium', false, true, 'AVAILABLE', 'Ideal para apartamentos');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Thor', 'Dog', 'Pitbull', 4, 'Medium', 'Protective', 'High', true, false, 'AVAILABLE', 'Precisa de dono experiente');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Mia', 'Cat', 'Siamese', 1, 'Small', 'Playful', 'Medium', false, true, 'AVAILABLE', 'Gosta de atenção');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Nina', 'Cat', 'Persian', 5, 'Small', 'Calm', 'Low', false, true, 'AVAILABLE', 'Muito tranquila');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Bob', 'Dog', 'Bulldog', 6, 'Medium', 'Lazy', 'Low', false, true, 'AVAILABLE', 'Perfeito para famílias');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Max', 'Dog', 'German Shepherd', 3, 'Large', 'Alert', 'High', true, true, 'AVAILABLE', 'Ótimo cão de guarda');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Mel', 'Cat', 'Mixed', 2, 'Small', 'Friendly', 'Medium', false, true, 'AVAILABLE', 'Resgatada da rua');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Bella', 'Dog', 'Golden Retriever', 3, 'Large', 'Friendly', 'High', true, true, 'AVAILABLE', 'Ama crianças');

INSERT INTO tb_animal (nm_animal, ds_species, ds_breed, nr_age, ds_size, ds_temperament, ds_energy_level, fl_requires_yard, fl_good_with_kids, ds_adoption_status, ds_description)
VALUES ('Simba', 'Cat', 'Maine Coon', 2, 'Medium', 'Calm', 'Low', false, true, 'AVAILABLE', 'Muito peludo');
```

---

### 🔎 Consultar os dados

```sql
SELECT * FROM tb_animal;
```

---

### 💡 Dica

Se não aparecer nada:

* Verifique se conectou no banco correto (`animaldb`)
* Rode os INSERTs novamente
* Atualize a tela do H2

---



# AdoptionCp5Front

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
