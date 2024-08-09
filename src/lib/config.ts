import { browser } from '$app/environment';

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
	get currentEvent() {
		const eventId = parseInt(localStorage.getItem('current-event') ?? '-1');
		return eventId ? eventId : -1;
	}

	setCurrentEvent(eventID: number) {
		localStorage.setItem('current-event', eventID.toString());
	}

	toggleTheme() {
		localStorage.setItem('dark', (!this.darkTheme).toString());
	}
}
