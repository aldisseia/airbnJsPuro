// para "novos" navegadores usando "suga script"
export default class Ajax {
  constructor(url, verb) {
    this.utl = url
    this.verb = verb
    this.xhr = new XMLHttpRequest();
  }
  getOpen(fn)  {
    const xhr = this.xhr;
    xhr.open(this.verb, this.utl, true);
    xhr.onreadystatechange = ()=> {
      if (xhr.readyState == 4) {
        xhr.status == 200 ? fn(JSON.parse(xhr.responseText)) : fn(xhr.status)
      }
    }
    this.xhr = xhr
    this.setSend()
  }
  setSend() {
    this.xhr.send();
  }
}
