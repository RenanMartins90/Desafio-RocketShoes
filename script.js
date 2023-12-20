const bigImg = document.getElementById('imagemAmpliada')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
function trocaImg(id) {
  bigImg.setAttribute('src', document.getElementById(id).getAttribute('src'))
  img2.classList.remove('selectedImg')
  document.getElementById(id).classList.add('selectedImg')
  console.log(id)
  if (id == 'img1') {
    img2.classList.remove('selectedImg')
    img3.classList.remove('selectedImg')
  } else if (id == 'img2') {
    img1.classList.remove('selectedImg')
    img3.classList.remove('selectedImg')
  } else if (id == 'img3') {
    img1.classList.remove('selectedImg')
    img2.classList.remove('selectedImg')
  }
}
