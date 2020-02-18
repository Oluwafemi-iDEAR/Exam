function register(){

	let firstname = document.getElementById('firstname_id').value;
	let lastname = document.getElementById('lastname_id').value;
	let username = document.getElementById('email_id').value;	
	//
	let user_object = {

			'firstname' : firstname, 
			'lastname' : lastname,
			'email' : email, 
		}

		if (firstname.length == 0) {
		alert("Please enter your firstname");
	}else if (lastname.length == 0) {
		alert("Please input your lastname");
	}else if (email.length == 0) {
		alert("You haven't entered any email");
	}else{
		
	//check if the user is registered already
	let stored_users = localStorage.getItem('users');

		if(stored_users == null || stored_users == undefined){
			//No user has been registered
			
			let users_array = [];

			users_array.push(user_object);

			users_array = JSON.stringify(users_array);

			localStorage.setItem('users', users_array);

			document.getElementById('register_info').innerHTML = "The user has been registered successfully";

		}else{

			//check the email against the email input 
			stored_users = JSON.parse(stored_users);

			let success = [];

			for(let i = 0; i < stored_users.length; i++){
				if(stored_users[i]['email'] == email){
					//the user exists already
					success.push(0);
				}else{
					//no match.. the user does not xist 
					success[0] = user_object;
				}
			}

			if(success.includes(0)){
				document.getElementById('register_info').innerHTML = "The user has been registered already";
			}else{

				let user = success[0];

				stored_users.push(user);

				stored_users = JSON.stringify(stored_users);

				localStorage.setItem('users', stored_users);
				document.getElementById('register_info').innerHTML = "User registered successfully!";
			}
		}
}


function submit_id(){
	let email = document.getElementById('email_id').value;
		email = email.trim();

	if (email.length == 0) {
		alert("You haven't entered any email");
	}else if (feedback.length == 0) {
		alert("No feedback entered");
	}else{
		//check if user exists already 
	let stored_users = localStorage.getItem('users');
		stored_users = JSON.parse(stored_users);
		let success = [];
		for(let i = 0; i < stored_users.length; i++){
			if(stored_users[i]['email_id'] == email && stored_users[i]['feedback_id'] == feedback){
				//we have matched the user
				success.push(stored_users[i]);	
			}
		}
		if(success.length == 0){
			//there is no user
			document.getElementById('email_id').innerHTML = "<strong>Email not found. Have you registered?</strong>";
		}else{
			//there is a user
			localStorage.setItem('stored_users', firstname);
			window.location.href = "welcome.html";
		}
}
/*
	let feedback = document.getElementById('feedback_id').value;
		feedback = feedback.trim();*/




		/*let feedback_object = {
			"email": email,
			"feedback": feedback,
		}

}
	
	//check if feedback is stored in to the localStorage 
	let email = localStorage.getItem('feedback_object');

	if(email != null || email != undefined){
		//no user is logged in
		alert("You are yet to register");
		window.location.href='register.html';
	}*/



	/*if (email.length == 0) {
		alert("You haven't entered any email");
	}else if (feedback.length == 0) {
		alert("No feedback entered");
	}else{
		let stored_feedback = localStorage.getItem("stored_feedback");
	}
	console.log("stored_feedback");*/





/*
function register_form(){
	let firstname = document.getElementById('name_id').value;
	let email = document.getElementById('email_id').value;
	let password = document.getElementById('password').value;
	let feedback = document.getElementById('feedback').value;

		email = email.trim();
		password = password.trim();
		feedback = feedback.trim();


	if (firstname.length == 0) {
		alert("Please enter your firstname");
	}else if (email.length == 0) {
		alert("You haven't entered any email");
	}else if (password.length == 0) {
		alert("Please input your password");
	}else if (feedback.length == 0) {
		alert("No feedback entered");
	}else{
		
	}

}*/