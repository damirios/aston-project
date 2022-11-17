export function formValidity(form) {
    const response = {
        login: 'valid',
        password: 'valid',
        confirm: 'valid'
    };
    
    const formData = new FormData(form);
    const login = formData.get('login');
    const password = formData.get('password');
    const confirm = formData.get('confirm');
    
    // если есть пустые поля
    if (login.trim() === '' || password.trim() === '' || confirm.trim() === '') {
        if (login.trim() === '') {
            response.login = 'empty';
        }
        if (password.trim() === '') {
            response.password = 'empty';
        }
        if (confirm.trim() === '') {
            response.confirm = 'empty';
        }
    } else if (password !== confirm) {
        response.password = 'doesNotMatch';
        response.confirm = 'doesNotMatch';
    } 
    
    return response;
}