import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "🐱‍👤 ZaoDocs",
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/custom.css",
			],
			social: {
				github: "https://github.com/Meursault0110",
			},
			sidebar: [
				{ label: "Home", link: "/home" },
				{
					label: "ASIR Notes",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/asir-notes/overview" },
						{
							label: "ISO",
							collapsed: true,
							items: [],
						},
						{
							label: "FHW",
							collapsed: true,
							items: [],
						},
						{
							label: "OSs",
							collapsed: true,
							items: [],
						},
						{
							label: "Bases de Datos",
							collapsed: true,
							items: [],
						},
						{
							label: "Redes",
							collapsed: true,
							items: [],
						},
						{
							label: "Lenguajes de Marcas",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "IT Fundamentals",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/it-fundamentals/overview" },
						{
							label: "Computer Fundamentals",
							collapsed: true,
							items: [
								{
									label: "Architecture && Organization",
									collapsed: true,
									items: [],
								},
								{
									label: "Hardware",
									collapsed: true,
									items: [],
								},
								{
									label: "Operating Systems",
									collapsed: true,
									items: [],
								},
							],
						},
						{
							label: "Networking (CCNA)",
							collapsed: true,
							items: [
								{
									label: "Network Fundamentals",
									collapsed: true,
									items: [],
								},
								{
									label: "Network Access",
									collapsed: true,
									items: [],
								},
								{
									label: "IP Connectivity",
									collapsed: true,
									items: [],
								},
								{
									label: "IP Services",
									collapsed: true,
									items: [],
								},
								{
									label: "Security Fundamentals",
									collapsed: true,
									items: [],
								},
								{
									label: "Automation & Progammability",
									collapsed: true,
									items: [],
								},
							],
						},
						{
							label: "IT Security (CISSP)",
							collapsed: true,
							items: [
								{
									label: "Security and Risk Management",
									collapsed: true,
									items: [],
								},
								{
									label: "Asset Security",
									collapsed: true,
									items: [],
								},
								{
									label: "Security Architecture and Engineering",
									collapsed: true,
									items: [],
								},
								{
									label: "Communication and Network Security",
									collapsed: true,
									items: [],
								},
								{
									label: "Identity and Access Management (IAM)",
									collapsed: true,
									items: [],
								},
								{
									label: "Security Assessment and Testing",
									collapsed: true,
									items: [],
								},
								{
									label: "Security Operations",
									collapsed: true,
									items: [],
								},
								{
									label: "Software Development Security",
									collapsed: true,
									items: [],
								},
							],
						},
					],
				},
				{
					label: "Programación",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/programming/overview" },
						{
							label: "Fundamentos",
							collapsed: true,
							items: [
								{
									label: "Data Structures",
									collapsed: true,
									items: [],
								},
								{
									label: "Algorithms",
									collapsed: true,
									items: [],
								},
								{
									label: "Git && GitHub",
									collapsed: true,
									items: [
										{
											label: "Git",
											items: [],
										},
										{
											label: "GitHub",
											items: [],
										},
									],
								},
							],
						},
						{
							label: "Lenguajes",
							collapsed: true,
							items: [
								{
									label: "Python",
									collapsed: true,
									items: [],
								},
								{
									label: "C",
									collapsed: true,
									items: [],
								},
								{
									label: "Java",
									collapsed: true,
									items: [],
								},
							],
						},
					],
				},
				{
					label: "Privacidad && OPSEC",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/privacy-opsec/overview" },
						{
							label: "Privacy",
							collapsed: true,
							items: [],
						},
						{
							label: "OPSEC",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "OSs Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/os-pentesting/overview" },
						{
							label: "Linux Privesc",
							collapsed: true,
							items: [],
						},
						{
							label: "Windows Privesc",
							collapsed: true,
							items: [],
						},
						{
							label: "Active Directory",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "Networking Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/net-pentesting/overview" },
					],
				},
				{
					label: "Web Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/web-pentesting/overview" },
						{
							label: "Web Vulns",
							collapsed: true,
							items: [],
						},
						{
							label: "Networking Pentesting",
							collapsed: true,
							items: [],
						},
						{
							label: "Web Tech Pentesting",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "Wireless Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/wireless-pentesting/overview" },
						{
							label: "Web Vulns",
							collapsed: true,
							items: [],
						},
						{
							label: "Networking Pentesting",
							collapsed: true,
							items: [],
						},
						{
							label: "Web Tech Pentesting",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "Mobile Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/mobile-pentesting/overview" },
					],
				},
				{
					label: "Low Level Pentesting",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/low-level-pentesting/overview" },
						{
							label: "Binary Exploitation",
							collapsed: true,
							items: [],
						},
						{
							label: "Reverse Engineering",
							collapsed: true,
							items: [],
						},
						{
							label: "Malware Dev",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "Others ( Pentesting )",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/others-pentesting/overview" },
						{
							label: "Car Pentesting",
							collapsed: true,
							items: [],
						},
						{
							label: "CI/CD Pentesting",
							collapsed: true,
							items: [],
						},
						{
							label: "Cloud Pentesting",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "OSINT && Social Engineering",
					collapsed: true,
					items: [
						{ label: "Overview", link: "/osint-se/overview" },
					],
				},
				{
					label: "Desarrollo Web",
					collapsed: true,
					items: [
						{ label: "Web-Dev Overview", link: "/web-dev/overview" },
						{
							label: "Frontend",
							collapsed: true,
							items: [
								{
									label: "HTML",
									collapsed: true,
									items: [],
								},
								{
									label: "CSS",
									collapsed: true,
									items: [
										{
											label: "PostCSS",
											collapsed: true,
											items: [],
										},
										{
											label: "TailwindCSS",
											collapsed: true,
											items: [],
										},
									],
								},
								{
									label: "JavaScript",
									collapsed: true,
									items: [],
								},
								{
									label: "React",
									collapsed: true,
									items: [],
								},
							],
						},
						{
							label: "Backend",
							collapsed: true,
							items: [
								{
									label: "Node.js (Express)",
									collapsed: true,
									items: [],
								},
								{
									label: "PHP && MYSQL",
									collapsed: true,
									items: [],
								},
								{
									label: "Java (Spring)",
									collapsed: true,
									items: [],
								},
							],
						},
					],
				},
			],
		}),
	],
});
