class Abstrata {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class CadastroDeUsuarioUm extends Abstrata {
  constructor(nome, idade, senha, email) {
    super(nome, idade);
    this.senha = senha;
    this.email = email;
  }
}

class CadastroDeUsuarioDois extends CadastroDeUsuarioUm {
  constructor(nome, idade, senha, email, cpf, rg, endereço) {
    super(nome, idade, senha, email);
    this.cpf = cpf;
    this.rg = rg;
    this.endereço = endereço;
  }
}

const primeiroUsuario = new CadastroDeUsuarioUm(
  "Helena martins",
  28,
  123321,
  "helenamatins@gmail.com"
);
const segundoUsuario = new CadastroDeUsuarioDois(
  "Thiago gomes",
  18,
  78945,
  "thiagooficial@gmail.com",
  789954,
  52156,
  "Rua:Cometa numero: 10 "
);
const terceiroUsuario = new CadastroDeUsuarioDois(
  "Brenda oliveira",
  30,
  66457892,
  "oliveirabrenda@gmail.com",
  74562100,
  842210036,
  "Rua:Tão tão distante numero:56"
);

console.log(segundoUsuario);
