const btn = document.querySelector('.button');
const userName = document.querySelector('#name');
const photo = document.querySelector('#avatarLink');
const input = document.querySelector('.textarea');
const field = document.querySelector('.comments')


btn.onclick = () => {
  let newPhoto = document.createElement('img')
  let newName = document.createElement('h3')
  let newComm = document.createElement('p');
  newComm.className = 'commWrapper'
  newName.className = 'nameWrap'
  newPhoto.className = 'photowrap'
  newComm.innerText = input.value
  newName.innerText = userName.value
  newPhoto.src = photo.value;
  input.value = ''
  field.appendChild(newPhoto)
  field.appendChild(newName)
  field.appendChild(newComm)
  }