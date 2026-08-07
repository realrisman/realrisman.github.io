import assert from 'node:assert/strict';
import test from 'node:test';
import { syncGiscusTheme } from '../src/giscusTheme.ts';

test('retries the current theme after the Giscus iframe finishes loading', () => {
	let ready = false;
	let loadListener;
	const receivedMessages = [];
	const iframe = {
		contentWindow: {
			postMessage(message, targetOrigin) {
				if (ready) receivedMessages.push({ message, targetOrigin });
			}
		},
		addEventListener(event, listener) {
			if (event === 'load') loadListener = listener;
		}
	};

	syncGiscusTheme(iframe, () => true);
	assert.deepEqual(receivedMessages, [], 'the pre-load message should be treated as lost');

	ready = true;
	loadListener?.();

	assert.deepEqual(receivedMessages, [
		{
			message: { giscus: { setConfig: { theme: 'dark_dimmed' } } },
			targetOrigin: 'https://giscus.app'
		}
	]);
});
