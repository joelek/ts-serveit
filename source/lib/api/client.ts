// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-client";
import * as shared from "./index";

export const makeClient = (options?: Partial<{
	urlPrefix: string,
	requestHandler: autoguard.api.RequestHandler
}>): autoguard.api.Client<shared.Autoguard.Requests, shared.Autoguard.Responses> => ({
	"getStaticContent": async (request) => {
		let guard = shared.Autoguard.Requests["getStaticContent"];
		guard.as(request, "request");
		let method = "GET";
		let components = new Array<string>();
		components.push(...autoguard.api.encodeComponents(request.options?.["filename"] ?? [], true));
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...["filename"], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = request.payload ?? [];
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let raw = await requestHandler({ method, components, parameters, headers, payload }, options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = raw.payload;
			let guard = shared.Autoguard.Responses["getStaticContent"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, true);
		}
	},
	"headStaticContent": async (request) => {
		let guard = shared.Autoguard.Requests["headStaticContent"];
		guard.as(request, "request");
		let method = "HEAD";
		let components = new Array<string>();
		components.push(...autoguard.api.encodeComponents(request.options?.["filename"] ?? [], true));
		let parameters = new Array<[string, string]>();
		parameters.push(...autoguard.api.encodeUndeclaredParameterPairs(request.options ?? {}, [...["filename"], ...parameters.map((parameter) => parameter[0])]));
		let headers = new Array<[string, string]>();
		headers.push(...autoguard.api.encodeUndeclaredHeaderPairs(request.headers ?? {}, headers.map((header) => header[0])));
		let payload = request.payload ?? [];
		let requestHandler = options?.requestHandler ?? autoguard.api.xhr;
		let raw = await requestHandler({ method, components, parameters, headers, payload }, options?.urlPrefix);
		{
			let status = raw.status;
			let headers: Record<string, autoguard.api.JSON> = {};
			headers = { ...headers, ...autoguard.api.decodeUndeclaredHeaders(raw.headers ?? {}, Object.keys(headers)) };
			let payload = raw.payload;
			let guard = shared.Autoguard.Responses["headStaticContent"];
			let response = guard.as({ status, headers, payload }, "response");
			return new autoguard.api.ServerResponse(response, true);
		}
	},
});
