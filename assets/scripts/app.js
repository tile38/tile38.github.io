function toggleVisibility (element) {
	var s = document.getElementById(element);

    if (s.classList.contains('in')) {
        s.classList.remove('in');
        s.classList.add('out');
    }
    else {
        s.classList.remove('out');
        s.classList.add('in');
    }
}

