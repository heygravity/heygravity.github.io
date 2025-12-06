// Redirect helper: send /the-office-games -> /fg
(function() {
	try {
		// Normalize pathname by removing trailing slashes
		const pathname = window.location.pathname.replace(/\/+$|^$/g, '') || '/';
		// Remove trailing slash for comparison
		const normalized = pathname.replace(/\/+$/, '');

		if (normalized === '/the-office-games' || normalized === 'the-office-games') {
			const search = window.location.search || '';
			const hash = window.location.hash || '';
			const target = `${window.location.origin}/fg${search}${hash}`;
			// Use replace so the redirect doesn't create an extra history entry
			window.location.replace(target);
		}
	} catch (e) {
		// Fail silently on older browsers or unexpected environments
		console.error('Redirect script error:', e);
	}
})();

