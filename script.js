document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Data login sementara
    const validUsername = "nefultra";
    const validPassword = "101010";

    // Ambil input user
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validasi login
    if (username === validUsername && password === validPassword) {
        alert("Login berhasil");
        window.location.href = "dashboard.html"; // Redirect ke dashboard
    } else {
        document.getElementById("message").textContent = "Coba lagi, Bro.";
        document.getElementById("message").style.color = "red";
    }
});
