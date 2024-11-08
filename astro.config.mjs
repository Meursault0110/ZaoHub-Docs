import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "ZaoDocs",
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
					label: "🎯 IT Fundamentals",
					collapsed: true,
					items: [
						{
							label: "🖥 Computer Fundamentals",
							collapsed: true,
							items: [
								{
									label: "🧱 Architecture",
									collapsed: true,
									items: [],
								},
								{
									label: "🔌 Hardware",
									collapsed: true,
									items: [],
								},
								{
									label: "🕹 Operating Systems",
									collapsed: true,
									items: [
										{
											label: "🐧 Linux",
											collapsed: true,
											items: [
												{
													label: "⚙ System",
													collapsed: true,
													items: [],
												},
												{
													label: "🈺 Scripting",
													collapsed: true,
													items: [],
												},
											],
										},
										{
											label: "🖼 Windows",
											collapsed: true,
											items: [
												{
													label: "⚙ System",
													collapsed: true,
													items: [],
												},
												{
													label: "#️⃣ Scripting",
													collapsed: true,
													items: [],
												},
											],
										},
									],
								},
							],
						},
						{
							label: "🌐 Networking (CCNA 200-301)", link: "#"
						},
						{
							label: "🛡 IT Sec (CompTIA Sec+-701)", link: "#"
						},
					],
				},
				{
					label: "⛩ Programación",
					collapsed: true,
					items: [
						{
							label: "🎯 Fundamentos",
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
							label: "🎲 Lenguajes",
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
									label: "Golang",
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
					label: "🔐 Privacidad && OPSEC",
					collapsed: true,
					items: [
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
					label: "⚙ OSs Pentesting",
					collapsed: true,
					items: [
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
					label: "👽 Networking Pentesting",
					collapsed: true,
					items: [
					],
				},
				{
					label: "🕸 Web Pentesting",
					collapsed: true,
					items: [
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
					label: "📻 Wireless Pentesting",
					collapsed: true,
					items: [
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
					label: "📱 Mobile Pentesting",
					collapsed: true,
					items: [
					],
				},
				{
					label: "🎱 Low Level Pentesting",
					collapsed: true,
					items: [
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
					label: "🧩 Others ( Pentesting )",
					collapsed: true,
					items: [
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
					label: "👥 OSINT",
					collapsed: true,
					items: [
					],
				},
				{
					label: "🎭 Social Engineering",
					collapsed: true,
					items: [
					],
				},
				{
					label: "🎇 Desarrollo Web",
					collapsed: true,
					items: [
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
