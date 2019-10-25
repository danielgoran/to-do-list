$(document).ready(function(){
	let addButton = $('.add-button');
	let field = $('.add-field');
	let tasks = $('.tasks')

	// Add task
	addButton.on('click', function(){
		let elem = `<li class="task">
					<div class="task-checked col-1">
						<input type="checkbox">
					</div>
					<div class="task-text col-2">${field.val()}</div>
					<task class="task-remove col-3"></task>
				</li>`;
		tasks.append(elem);
	})


});