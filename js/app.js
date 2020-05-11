import Ajax from './Ajax.js'

const uri = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
const ajax = new Ajax(uri, 'GET')
ajax.getOpen((x)=> {
  console.log(x.length /)
  x.forEach( (item, i) => {
    let p = parseFloat(item.price).toFixed(2)
    p = monetarioBr(p)
    add(item.property_type, item.name, item.photo,  p, "#")
  });
})

const creatElemt = (type) => {
  return document.createElement(type)
}
const setText = (text) => {
  return document.createTextNode(text)
}
const setHtml = (el, html)=> {
  el.innerHTML = html
}
const setAttribut = (el, type, val) => {
  el.setAttribute(type, val)
  // return el
}
const addChild = (el, child) => {
  el.appendChild(child)
  // return el
}
const addElemet = (id, el) => {
  document.getElementById(id).appendChild(el)
}
const monetarioBr = (val) => {
  let st = typeof val != 'string' ? val.toString() : val
  return st.replace('.',',')

}
const add = (title, text, photo, price, url) =>  {
  let a = creatElemt("a")
  setAttribut(a, "href", url)
  let a2 = creatElemt("a")
  setAttribut(a2, "href", url)
  setAttribut(a2, "class", 'color-grayBlack')

  let divTitle = creatElemt("div")
  setAttribut(divTitle, "class", "card-title")
  let span = creatElemt("span")
  setAttribut(span, "class", "hat color-gray")
  addChild(span, setText(title))

  addChild(divTitle, span)
  let divInf = creatElemt("div")
  setAttribut(divInf, "class", "inf")
  // addChild(picture, a)

  let newDiv = creatElemt("div")
  setAttribut(newDiv, "class", "card-theme card-in")
  let img = creatElemt("img")
  setAttribut(img, "class", "img-fluid")
  setAttribut(img, "src", photo)
  let picture = creatElemt("picture")
  addChild(a, img)
  addChild(picture, a)
  addChild(newDiv, picture)
  addChild(newDiv, divTitle)
  setHtml(a2, `${text}<br /><b>R$: ${price}</b>`);
  addChild(divInf, a2)
  addChild(newDiv, divInf)
  // addChild(a, newDiv)

  // console.log(newDiv);
  addElemet("body-all", newDiv)

}
