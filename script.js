const nameInput = document.getElementById('name')
const toneSelect = document.getElementById('tone')
const generateBtn = document.getElementById('generate')
const previewTitle = document.getElementById('card-title')
const previewMsg = document.getElementById('card-msg')
const downloadBtn = document.getElementById('download')


async function generate(){
const name = nameInput.value.trim() || 'Mẹ yêu'
const tone = toneSelect.value
// gọi API serverless Python
try{
const res = await fetch('/api/generate',{
method:'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify({name,tone})
})
const data = await res.json()
previewTitle.textContent = data.title
previewMsg.textContent = data.message
}catch(e){
previewTitle.textContent = name
previewMsg.textContent = 'Chúc mẹ một ngày 20/10 thật vui vẻ!'
}
}


generateBtn.addEventListener('click', generate)


// Tải ảnh (chụp vùng preview làm ảnh PNG)
downloadBtn.addEventListener('click', async ()=>{
// sử dụng html2canvas nếu muốn — nhưng để đơn giản, mở hộp in ảnh
window.print()
})
