// Small script to set a friendly greeting based on local time
(function(){
  try{
    const el = document.getElementById('greeting');
    if(!el) return;
    const h = new Date().getHours();
    let text = '你好！';
    if(h >= 5 && h < 12) text = '早上好';
    else if(h >= 12 && h < 18) text = '下午好';
    else if(h >= 18 && h < 22) text = '晚上好';
    else text = '深夜好';
    el.textContent = text + '，欢迎来到我的网站。';
  }catch(e){console.warn(e)}
})();
