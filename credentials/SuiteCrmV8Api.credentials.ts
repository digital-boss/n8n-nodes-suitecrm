import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class SuiteCrmV8Api implements ICredentialType {
	name = 'suiteCrmV8Api';
	displayName = 'Suite CRM API';
	properties: INodeProperties[] = [
		{
			displayName: 'Suite CRM URL',
			name: 'suiteCrmUrl',
			type: 'string',
			placeholder: 'https://www.suitecrm.yourdomain.com',
			default: '',
			required: true,
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			placeholder: 'c6151bf0-71ec-e14c-e927-5e7bf2fcbce6',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			placeholder: 'hfa!mfmn213/}hio&fajkn´1123#123;132',
			default: '',
			required: true,
		},
	];
}