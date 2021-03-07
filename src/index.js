import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');
	const br = document.createElement('br');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'Click me and check the console!';

	element.appendChild(br);
	element.appendChild(btn);

	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
		const print = module.default;

		print();
	});

	return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(element);
		element = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(element);
	})
}
