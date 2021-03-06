#!/usr/bin/env node

import * as lib from "../lib";

function run(): void {
	let options = {
		root: "./",
		port: 8000
	};
	let found_unrecognized_argument = false;
	for (let arg of process.argv.slice(2)) {
		let parts: RegExpExecArray | null = null;
		if (false) {
		} else if ((parts = /^--root=(.+)$/.exec(arg)) !== null) {
			options.root = parts[1];
		} else if ((parts = /^--port=([0-9]+)$/.exec(arg)) !== null) {
			options.port = Number.parseInt(parts[1]);
		} else {
			found_unrecognized_argument = true;
			process.stderr.write(`Unrecognized argument "${arg}"!\n`);
		}
	}
	if (found_unrecognized_argument) {
		process.stderr.write(`Arguments:\n`);
		process.stderr.write(`	--root=string\n`);
		process.stderr.write(`		Set root directory for server.\n`);
		process.stderr.write(`	--port=number\n`);
		process.stderr.write(`		Set server port.\n`);
		process.exit(0);
	} else {
		lib.serve(options.root, options.port);
	}
};

run();
