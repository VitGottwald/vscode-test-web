import * as path from 'path';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		const extensionDevelopmentPath = path.resolve(__dirname, '../../../');

		// The path to module with the test runner and tests
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		const folderPath = path.resolve(__dirname, '../../../test-workspace');

		const attachArgName = '--waitForDebugger=';
		const waitForDebugger = process.argv.find(arg => arg.startsWith(attachArgName));

		// Start a web server that serves VSCode in a browser, run the tests
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
