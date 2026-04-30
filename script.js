// 確保 DOM 完全載入後才執行腳本
document.addEventListener('DOMContentLoaded', () => {
    
    // 選取所有 href 屬性以 # 開頭的錨點連結
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // 防止預設的瞬間跳轉行為
            e.preventDefault();

            // 取得目標區塊的 id
            const targetId = this.getAttribute('href');
            
            // 如果 href 只有 "#"，則不執行（避免錯誤）
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 取得目標元素距離網頁頂部的距離，並扣除導覽列的高度 (約 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // 執行平滑滾動
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});