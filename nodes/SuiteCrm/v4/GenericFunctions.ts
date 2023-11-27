import type { IDataObject, IExecuteFunctions, IHookFunctions } from 'n8n-workflow';

import { OptionsWithUri } from 'request';

export interface IProduct {
	fields: {
		item?: object[];
	};
}

export async function suiteCrmApiRequest(
	this: IHookFunctions | IExecuteFunctions,
	resource: string,
	body: IDataObject,
): Promise<any> {
	const credentials = await this.getCredentials('suiteCrmV4Api');
	if (credentials === undefined) {
		throw new Error('Please provide credentials');
	}

	const data = {
		method: resource,
		input_type: 'JSON', // JSON/Serialize
		response_type: 'JSON', // JSON/Serialize
		rest_data: JSON.stringify(body),
	};

	const options: OptionsWithUri = {
		headers: {
			Authorization: '',
		},
		method: 'POST',
		uri: credentials.url as string,
		json: true,
		formData: data,
	};

	try {
		const responseData = await this.helpers.request(options);

		return responseData;
	} catch (error: any) {
		if (error.statusCode === 401) {
			// Return a clear error
			throw new Error('The Suite CRM credentials are not valid!');
		}

		// If that data does not exist for some reason return the actual error
		throw error;
	}
}