function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (login.trim() == '' || !password) {
        alert('Укажите логин/пароль');
    } else if (login === 'beeline' || login === 'beeinterns' || login === 'bee') {
        alert('Логин занят');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать'); 
    } else if (!firstName) {
        alert('Введите имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else { 
        if (gender == 'male') {
            alert(`Уважаемый ${firstName}, заявка создана`);
        } else {
            alert(`Уважаемая ${firstName}, заявка создана`);
        }
    }
}
