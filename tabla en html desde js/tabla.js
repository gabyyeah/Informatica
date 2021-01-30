let sagas= [
    {nombre:"Percy Jackson", año:2005, autor: "Rick Riordan", imagen: "https://clubboks112631102.files.wordpress.com/2018/01/imagengfgdh1.jpg"},
    {nombre:"Los Juegos del hambre", año:2008, autor: "Suzanne Collins", imagen: "https://4.bp.blogspot.com/-UJAMmRJwPIw/VsTlWV4yPaI/AAAAAAAAA6k/TbxZz4CMXvs/s1600/ljdh_libros.jpg"},
    {nombre:"La quinta ola", año:2013, autor: "Rick Yancey", imagen:"https://1.bp.blogspot.com/-SZ5ekN9U_rA/XyBliGOvMYI/AAAAAAAAa4s/uOFgB9q4Hp0yTXTg-Kkfb0MdoMkG5SahQCLcBGAsYHQ/s1080/7736d7b1c72690a094cbbd7359ee8b90.jpg"},
    {nombre:"Miss peregrine", año:2011, autor: "Ransom Riggs", imagen:"https://bookfortoday.com/wp-content/uploads/2020/06/EPArwBNVGPk.jpg"},
    {nombre:"La trilogía de la niebla", año:2007, autor: "Carlos Ruiz Zafón", imagen:"https://i0.wp.com/gbook.store/wp-content/uploads/2019/11/TRILOGIA-LA-NIEBLA.png?fit=544%2C264&ssl=1"},
    {nombre:"Crepúsculo", año:2005, autor: "Stephenie Meyer", imagen:"https://i.pinimg.com/originals/fd/4a/95/fd4a95b14388739331bf8d3c16c44ade.jpg"},
    {nombre:"Los héroes del Olimpo", año:2010, autor: "Rick Riordan", imagen:"https://static.wixstatic.com/media/0331d3_cdcdaff46b604acbb6e49e1de7958ec7~mv2.jpg/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01/0331d3_cdcdaff46b604acbb6e49e1de7958ec7~mv2.jpg"}
]

let tabla=document.querySelector('#sagas')

let contenidoTabla= '<tr><th>Nombre</th><th>Año</th><th>Autor</th><th>Imagen</th></tr>'

for (saga of sagas){
    contenidoTabla+= `<tr><td>${saga.nombre}</td><td>${saga.año}</td><td>${saga.autor}</td><td><img width="500px" height= "400px" src="${saga.imagen}"></td></tr>`
}

tabla.innerHTML=contenidoTabla