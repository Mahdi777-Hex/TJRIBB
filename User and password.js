function getUserCredentials() {
    var correctUsername = "Sh4Ko"; // اسم المستخدم الصحيح
    var correctPassword = "@SH4ko1_KING"; // كلمة المرور الصحيحة

    while (true) {
        var username = prompt("𝘌𝘯𝘵𝘦𝘳 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 :");
        var password = prompt("𝘌𝘯𝘵𝘦𝘳 𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥 :");

        if (username && password) {
            if (username === correctUsername && password === correctPassword) {
                alert("Walcom To Panel Sh4kO ⇰ (1 DAY ) ");
                break; // الخروج من الحلقة إذا كانت المدخلات صحيحة
            } else {
                alert("The Passwoord Or Username is Error");
            }
        } else {
            alert("You Didn't Enter Passwoord Or Username ");
        }
    }
}

getUserCredentials();
