const init = () =>{
	const input_email = document.querySelector('input[type="email"]');
	const input_senha = document.querySelector('input[type="password"]');
	const btn_submit = document.querySelector('.login_submit');

	const errorHandler = () =>{
		btn_submit.classList.remove('sucess');
		btn_submit.classList.add('error');
		btn_submit.textContent = "Erro :("
	}
	const sucessHandler = () =>{
		btn_submit.classList.remove('error');
		btn_submit.classList.add('sucess');
		btn_submit.textContent = "Logado :)"
	}

	if(btn_submit){
		btn_submit.addEventListener('click', (event) =>{
			event.preventDefault();

			btn_submit.textContent = "...carregando";

			fetch('https://reqres.in/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: input_email.value,
					password: input_senha.value,	
				})
			}).then((response)=>{
				if(response.status !== 200){
					errorHandler();
				}else{
					sucessHandler();
				}
			}).then((data)=>{
				console.log(data)
			})
		})
	}
}

window.onload = init;