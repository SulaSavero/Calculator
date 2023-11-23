function insert(num){
  document.form.textarea.value = document.form.textarea.value + num;

}

function equal() {
  var textarea = document.form.textarea;
  textarea.value = eval(textarea.value);
}

function percentage() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil + "/100");
}

function clean() {
  document.form.textarea.value = "";
}

function back() {
  var textarea = document.form.textarea;
  textarea.value = textarea.value.slice(0, -1);
}