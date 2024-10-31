import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'IT Fundamentals',
					collapsed: true,
					items: [
						{
							label: 'Computer Fundamentals',
							items: [
								{
									label: 'Architecture && Organization',
									items: [
									],
								},
								{
									label: 'Hardware',
									items: [
									],
								},
								{
									label: 'OSs',
									items: [
									],
								},
							],
						},
						{
							label: 'Networking (CCNA)',
							collapsed: true,
							items: [
								{
									label: 'Network Fundamentals',
									items: [
									],
								},
								{
									label: 'Network Access',
									items: [
									],
								},
								{
									label: 'IP Connectivity',
									items: [
									],
								},
								{
									label: 'IP Services',
									items: [
									],
								},
								{
									label: 'Security Fundamentals',
									items: [
									],
								},
								{
									label: 'Automation & Progammability',
									items: [
									],
								},
							],
						},
						{
							label: 'IT Security (CISSP)',
							collapsed: true,
							items: [
								{
									label: 'Security and Risk Management',
									items: [
									],
								},
								{
									label: 'Asset Security',
									items: [
									],
								},
								{
									label: 'Security Architecture and Engineering',
									items: [
									],
								},
								{
									label: 'Communication and Network Security',
									items: [
									],
								},
								{
									label: 'Identity and Access Management (IAM)',
									items: [
									],
								},
								{
									label: 'Security Assessment and Testing',
									items: [
									],
								},
								{
									label: 'Security Operations',
									items: [
									],
								},
								{
									label: 'Software Development Security',
									items: [
									],
								},
							],
						}
					],
				},
				{
					label: 'Programación',
					collapsed: true,
					items: [
						{
							label: 'Fundamentos',
							items: [
								{
									label: 'Data Structures',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'Algorithms',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'Git && GitHub',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								}
							],
						},
						{
							label: 'Lenguajes',
							items: [
								{
									label: 'Python',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'C && C++',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'Java',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								}
							],
						},
					],
				},
				{
					label: 'Desarrollo Web',
					collapsed: true,
					items: [
						{
							label: 'Frontend',
							items: [
								{
									label: 'HTML',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'CSS',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'JavaScript',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'React',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'XML',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
							],
						},
						{
							label: 'Backend',
							items: [
								{
									label: 'Node.js (Express)',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'PHP && MYSQL',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								},
								{
									label: 'Java (Spring)',
									items: [
										{
											label: 'Architecture && Organization',
											items: [
											],
										},
										{
											label: 'Hardware',
											items: [
											],
										},
										{
											label: 'OSs',
											items: [
											],
										},
									],
								}
							],
						},
					],
				},
				{
					label: 'Privacidad && OPSEC',
					collapsed: true,
					items: [
					],
				},
				{
					label: 'Pentesting / Hacking',
					collapsed: true,
					items: [

					],
				},
				{
					label: 'OSINT && Social Engineering',
					collapsed: true,
					items: [
					],
				},],
}),
	],
});
