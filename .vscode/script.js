function toggleNode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classlist.contains("light")) {
    //se tiver light mode,adicionar a imagem light
    img.setAttribute("src", "./assets/golden_retriever.png")
  } else {
    //se tiver sem light mode,manter a imagem normal
  }
}
