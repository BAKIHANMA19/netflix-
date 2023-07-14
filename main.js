const addItems = document.querySelectorAll('.tab-item');
const addContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    this.classList.add('tab-border');
}

tabItems.forEach(item => item.addEventListener('click',selectItem));

