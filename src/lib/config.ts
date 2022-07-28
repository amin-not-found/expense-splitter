import { browser } from '$app/env';

export class Config {
	config: Map<string, unknown> = new Map();

	get darkTheme() {
		if (!browser) return false;
		const dark = localStorage.getItem('dark');
		if (dark && dark === 'true') {
			return true;
		} else {
			return false;
		}
	}
	toggleTheme() {
		localStorage.setItem('dark', (!this.darkTheme).toString());
	}
}
