let messageIndex = 0;
const messages = ["Are u sure?", "Thui mòooo?", "Đừng bấm không nữa màaa?"
                ,"Ua bbi oiii!", "Dunt make me sad bbi...", "Yeu emm!", "Chjt chjtt"
                ,"Khong bam co la khong xong voi anh dau!", "Moah~!", "Yeu emm!", "Yeueuu", "Ngoan anh thương"];
function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize= `${currentSize * 1.5}px`;
    }
    
    function handleYesClick() {
    window.location.href = "Yeuem.html";
    }

