document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginContainer');
    const loginLink = document.getElementById('loginLink');
 
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        if (username === 'user' && password === '123') {
            alert('Đăng nhập thành công!');
            // Thực hiện các hành động sau khi đăng nhập thành công
            // Ví dụ: chuyển hướng đến trang chủ hoặc hiển thị nội dung đăng nhập
            
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index-user.html';
           
        } else {
            alert('Thông tin đăng nhập không chính xác. Vui lòng thử lại.');
            // Xử lý trường hợp đăng nhập không thành công
        }
    });
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
    loginLink.innerHTML = `
    <div style="position: relative; display: inline-block; overflow: hidden; border-radius: 50%; width: 28px; height: 28px; margin-right: 49.5px;">
    <img src="./assets/images/capypara.jpg" alt="Log in" style="width: 100%; height: 100%; object-fit: cover; padding-bottom: 0.2rem">
</div>     
`;
    }
});
