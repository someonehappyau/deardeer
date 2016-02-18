$('.ui.form')
	.form({
		on:'submit',
		onSuccess:function(events,fields){
			events.preventDefault();
			console.log(fields);

			$('.ui.form').addClass('loading');

			$.post('/action/aboutus/leavemessage/',
					fields,
					function(data){
						console.log(data);
					})
					.done(function(){
						$('.ui.form').form('reset');
						$('.ui.page.dimmer.success').dimmer('show');
						setTimeout(function(){
							$('.ui.page.dimmer.success').dimmer('hide');
						},3000);
					})
					.fail(function(){
						$('.ui.page.dimmer.error').dimmer('show');
						setTimeout(function(){
							$('.ui.page.dimmer.error').dimmer('hide');
						},3000);
					})
					.always(function(){
						$('.ui.form').removeClass('loading');
					});
		},
		fields:{
			firstname:{
				identifier:'firstname',
				rules:[
					{
						type:'empty',
						prompt:'Please enter your first name'
					}
				]
			},
			lastname:{
				identifier:'lastname',
				rules:[
					{
						type:'empty',
						prompt:'Please enter your last name'
					}
				]
			},
			email:{
				identifier:'email',
				rules:[
					{
						type:'email',
						prompt:'Please enter an valid email address'
					}
				]
			},
			contactnumber:{
				identifier:'contactnumber',
				rules:[
					{
						type:'minLength[8]',
						prompt:'Contact number should not be shorter than 8'
					},
					{
						type:'maxLength[10]',
						prompt:'Contact number should not be longer than 10'
					}
				]
			},
			message:{
				identifier:'message',
				rules:[
					{
						type:'empty',
						prompt:'Please enter a message'
					}
				]
			}
		}
	});


