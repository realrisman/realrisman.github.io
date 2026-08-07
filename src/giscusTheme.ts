interface GiscusThemeFrame {
	contentWindow: {
		postMessage(message: unknown, targetOrigin: string): void;
	} | null;
	addEventListener(event: 'load', listener: () => void, options: { once: true }): void;
}

const observedFrames = new WeakSet<GiscusThemeFrame>();

export const syncGiscusTheme = (iframe: GiscusThemeFrame, isDark: () => boolean) => {
	const postTheme = () => {
		if (!iframe.contentWindow) return;

		const theme = isDark() ? 'dark_dimmed' : 'light';
		iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
	};

	if (!observedFrames.has(iframe)) {
		observedFrames.add(iframe);
		iframe.addEventListener('load', postTheme, { once: true });
	}

	postTheme();
};
