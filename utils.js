function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function(){showToast('✅ 已复制：'+text);}).catch(function(){fallbackCopy(text);});
  } else { fallbackCopy(text); }
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');showToast('✅ 已复制：'+text);}
  catch(e){showToast('复制失败，请长按手动复制');}
  document.body.removeChild(ta);
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }