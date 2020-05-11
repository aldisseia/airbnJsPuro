import Ajax from './Ajax.js'
const data = { d:0, start:0, end:5 }
const uri = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
const ajax = new Ajax(uri, 'GET')
ajax.getOpen((x)=> {
  data.d = x
  pagination(data.start, data.end, data.d)
})

const pagination = (start, end, arr) => {
  if(end > data.d.length) return false
  for (start; start <= end;  start++) {
    let p = parseFloat(arr[start].price).toFixed(2)
    p = monetarioBr(p)
    add(arr[start].property_type, arr[start].name, arr[start].photo,  p, "#")
  }
  data.start += 1
  data.end += 5
}

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
  addElemet("body-all", newDiv)
}

document.addEventListener('scroll', () => {
  let x = document.getElementById('fim')
  x = x.getBoundingClientRect().top;
  const bodyHeight = document.body.offsetHeight;
  // console.log(bodyHeight, x );
  if (bodyHeight >= x) {
    pagination(data.start, data.end, data.d)
  }
});
