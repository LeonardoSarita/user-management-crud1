let users = [];
let editIndex = null;

const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const message = document.getElementById('message');
const userTableBody = document.getElementById('userTableBody');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const lastname = lastnameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !lastname || !email || !phone) {
    showMessage('Todos los campos son obligatorios.');
    return;
  }

  const userData = { name, lastname, email, phone };

  if (editIndex === null) {
    users.push(userData);
    showMessage('Usuario agregado exitosamente.');
  } else {
    users[editIndex] = userData;
    showMessage('Usuario actualizado exitosamente.');
    editIndex = null;
  }

  userForm.reset();
  renderTable();
});

function renderTable() {
  userTableBody.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.lastname}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>
        <button class="action-btn edit" onclick="editUser(${index})">Editar</button>
        <button class="action-btn delete" onclick="deleteUser(${index})">Eliminar</button>
      </td>
    `;
    userTableBody.appendChild(row);
  });
}

function editUser(index) {
  const user = users[index];
  nameInput.value = user.name;
  lastnameInput.value = user.lastname;
  emailInput.value = user.email;
  phoneInput.value = user.phone;
  editIndex = index;
}

function deleteUser(index) {
  if (confirm('¿Estás seguro de eliminar este usuario?')) {
    users.splice(index, 1);
    showMessage('Usuario eliminado.');
    renderTable();
  }
}

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    message.textContent = '';
  }, 2000);
}

// Datos de acceso (puedes cambiarlos)
const validUser = "Leonardo";
const validPass = "1234";

const loginForm = document.getElementById('loginForm');
const loginUser = document.getElementById('loginUser');
const loginPass = document.getElementById('loginPass');
const loginMessage = document.getElementById('loginMessage');
const loginView = document.getElementById('loginView');
const crudView = document.getElementById('crudView');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const user = loginUser.value.trim();
  const pass = loginPass.value.trim();

  if (user === validUser && pass === validPass) {
    loginView.style.display = 'none';
    crudView.style.display = 'block';
  } else {
    loginMessage.textContent = 'Usuario o contraseña incorrectos.';
    setTimeout(() => loginMessage.textContent = '', 2000);
  }
});
