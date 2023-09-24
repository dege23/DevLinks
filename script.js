function switchTheme() {
  let html = document.documentElement;
  let profileImage = document.getElementById("profile-image");

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    profileImage.src = "./assets/avatar-light.png"
    profileImage.alt =
      "Mayk Brito sorrindo de óculos, usando jaqueta preta, com um fundo gradiente azul para roxo de cima para baixo"
  } else {
    profileImage.src = "./assets/avatar.png"

    profileImage.alt =
      "Foto de Mayk Brito sorrindo de oculos, barba e camisa preta, com fundo amarelo"
  }
}
