/*
 * much nicer injection than what extensions like tampermonkey offer us
 * great against stack traces (VM:XX rather than ..extension/script.js or userscript..)
 * sandboxed environment (unmodified native functions)
 * faster than tamper monkeys "document_start"
 * injects into all frames with high priority
*/

try {
	(ttap)(hrt);
} catch(e) {
	try {
		let recursing = e.stack.match(/chairloader/g).length > 1;
		if (!recursing) {
			// must be synchronous to force execution before other scripts
			// note: we fetch the same code for each iframe
			let chair_req = new XMLHttpRequest();
			chair_req.open('GET', 'https://raw.githubusercontent.com/hrt/WheelChair/master/wheelchair.min.js', false);
			chair_req.send(null);
			if (chair_req.status != 200) {
				console.error('Error GET wheelchair: ' + chair_req.status);
			}

			let patch_req = new XMLHttpRequest();
			patch_req.open('GET', 'https://raw.githubusercontent.com/hrt/WheelChair/master/patch_world.min.js', false);
			patch_req.send(null);
			if (patch_req.status != 200) {
				console.error('Error GET patch_world: ' + patch_req.status);
			}

			const unique_string = chrome.runtime.getURL('').match(/\/\/(\w{9})\w+\//)[1];

			// inject our code into a new iframe to avoid using hooks placed by anti cheat
			let frame = document.createElement('iframe');
			frame.setAttribute('style', 'display:none');
			document.documentElement.appendChild(frame);
			let child = frame.contentDocument || frame.contentWindow.document;
			let chair = document.createElement('script');
			chair.innerHTML = chair_req.responseText.replace(/ttap#4547/g, unique_string);;
			child.documentElement.append(chair);
			child.documentElement.remove(chair);
			document.documentElement.removeChild(frame);

			let patch = document.createElement('script');
			patch.innerHTML = patch_req.responseText.replace(/ttap#4547/g, unique_string);
			document.documentElement.appendChild(patch);
			document.documentElement.removeChild(patch);
		}
	} catch (e) {
		if (e instanceof DOMException) {
			// expected for sandboxed iframes
			console.warn(e);
		} else {
			throw e;
		}
	}
}