const contatoBtn = document.getElementById('contatoBtn'); 
const closeBtn = document.getElementById('closeBtn');
const enviarBtn = document.getElementById('enviarBtn');
const popupContato = document.getElementById('popupContato');
const inputNome = document.getElementById('inputNome');
const inputEmail = document.getElementById('inputEmail');
const inputTelefone = document.getElementById('inputTelefone');
const sobreBtn = document.getElementById('sobreBtn');

contatoBtn.addEventListener('click', () => {
  popupContato.classList.add('open');
});

closeBtn.addEventListener('click', function() {
  popupContato.classList.remove('open');
  inputNome.value = "";
  inputEmail.value = "";
  inputTelefone.value = "";
});

enviarBtn.addEventListener('click', function() {
  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();
  const telefone = inputTelefone.value.trim();
  if (nome === "" || email === "" || telefone === "") {
    alert("Por favor, preencha todos os campos.");
  } else if (nome.length < 3) {
    alert("Preencha um nome válido.");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Preencha um email válido.");
  } else if (!/^\d+$/.test(telefone)) {
    alert("Preencha um telefone válido.");
  } else if (telefone.length < 10 || telefone.length > 11) {
    alert("Preencha um telefone válido.");
  } else {
    console.log(nome, email, telefone);
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";

    popupContato.classList.remove('open');
  }
});

inputTelefone.addEventListener('input', function() {

  this.value = this.value.replace(/\D/g, '');
  
  if (this.value.length > 11) {
    this.value = this.value.slice(0, 11);
  }
});

sobreBtn.addEventListener('click', function() {
  alert("Calculadora de IMC - Desenvolvida por Mateus");
});

const bolaMedidor = document.getElementById('bolaMedidor');
const inputPeso = document.getElementById('inputPeso');
const inputAltura = document.getElementById('inputAltura');
const btnCalcular = document.getElementById('btnCalcular');
const cardResultado = document.getElementById('cardResultado');
const valorIMC = document.getElementById('valorIMC');
const textoStatus = document.getElementById('textoStatus');

btnCalcular.addEventListener('click', function() {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  const imc = peso / (altura * altura);
  const imcFinal = imc.toFixed(1);
  valorIMC.textContent = imcFinal;

  if (imcFinal < 18.5) {
    textoStatus.textContent = "Abaixo do peso";
    cardResultado.style.backgroundColor = "#87CEEB";
    cardResultado.style.color = "#ffffff";
  } else if (imcFinal >= 18.5 && imcFinal < 25) {
    textoStatus.textContent = "Peso normal";
    cardResultado.style.backgroundColor = "#32CD32";
    cardResultado.style.color = "#ffffff";
  } else if (imcFinal >= 25 && imcFinal < 30) {
    textoStatus.textContent = "Sobrepeso";
    cardResultado.style.backgroundColor = "#FFA500";
    cardResultado.style.color = "#ffffff";
  } else if (imcFinal >= 30 && imcFinal < 100) {
    textoStatus.textContent = "Obesidade";
    cardResultado.style.backgroundColor = "#FF4500";
    cardResultado.style.color = "#ffffff";
  }

  const minIMCVisual = 15;
  const maxIMCVisual = 40;

  let imcClamped = Math.max(minIMCVisual, Math.min(maxIMCVisual, imcFinal));

  let porcentagemPosicao = ((imcClamped - minIMCVisual) / (maxIMCVisual - minIMCVisual)) * 100;

  bolaMedidor.style.left = porcentagemPosicao + '%';
});