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
							items: [
								{label: "1. Intro to OSs", link: "asir-notes/iso/os-intro"},
								{label: "2. Intro to Virtualization", link: "asir-notes/iso/vm-intro"},
							],
						},
						{
							label: "FHW",
							collapsed: true,
							items: [
								{label: "1. Numeritos", link: "#"},
								{label: "2. Computer Architecture", link: "asir-notes/fhw/computer-arch"},
							],
						},
						{
							label: "Databases",
							collapsed: true,
							items: [
								{
									label: "Design DBs",
									collapsed: true,
									items: [
										{label: "1. Information Storage", link: "asir-notes/gdb/1-info-storage"},
										{label: "2. DataBases Systems", link: "asir-notes/gdb/2-db-systems"},
										{label: "3. Relational DataBases", link: "asir-notes/gdb/3-relational-databases"},
										{label: "4. Relational Models", link: "asir-notes/gdb/4-relational-model"},
										],
								},
							],
						},
						{
							label: "Lenguajes de Marcas (XML)",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "📒 Cheatsheets 🎇",
					collapsed: true,
					items: [
						{label: "🔶 Git", link: "cheatsheets/git-cs"},
						{label: "🔐 ssh", link: "cheatsheets/ssh-cs"},
						{label: "🐳 Docker", link: "cheatsheets/docker-cs"},
						{label: "🦈 WireShark / Tshark", link: "cheatsheets/tshark-cs"},
						{
							label: "CMS Tools",
							collapsed: true,
							items: [
								{label: "WPscan (WordPress)", link: "#"},
								{label: "CMSeeK", link: "#"},
								{label: "Joomscan (Joomla)", link: "#"},
								{label: "Droopescan (Drupal)", link: "#"},
								{label: "Magescan (Magento)", link: "#"},
							],
						},
						{
							label: "DataBases",
							collapsed: true,
							items: [
								{label: "SQL", link: "#"},
								{label: "MySQL", link: "#"},
								{label: "PostgreSQL", link: "#"},
								{label: "SQLite", link: "#"},
								{label: "MongoDB", link: "#"},
							],
						},
						{
							label: "Linux-Tools",
							collapsed: true,
							items: [
								{label: "find", link: "cheatsheets/linux-tools/find-cs"},
								{label: "awk", link: "cheatsheets/linux-tools/awk-cs"},
								{label: "grep", link: "cheatsheets/linux-tools/grep-cs"},
								{label: "sed", link: "cheatsheets/linux-tools/sed-cs"},
							],
						},
						{
							label: "Pentesting",
							collapsed: true,
							items: [
								{label: "Sqlmap", link: "cheatsheets/pentesting/sqlmap-cs"},
								{label: "Metasploit", link: "cheatsheets/pentesting/metasploit-cs"},
								{label: "Aircrack-ng", link: "cheatsheets/pentesting/aircrackng-cs"},
								{label: "Nmap", link: "cheatsheets/pentesting/nmap-cs"},
							],
						},
						{
							label: "Fuzzing",
							collapsed: true,
							items: [
								{label: "Wfuzz", link: "cheatsheets/fuzzing/wfuzz-cs"},
								{label: "Gobuster", link: "cheatsheets/fuzzing/gobuster-cs"},
								{label: "fuff", link: "cheatsheets/fuzzing/fuff-cs"},
							],
						},
					],
				},
				{
					label: "🎯 IT Fundamentals 🔰",
					collapsed: true,
					items: [
						{
							label: "🖥 Computer Fundamentals",
							collapsed: true,
							items: [
								{
									label: "🧱 COA",
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
												{label: "⚙ System", link: "it-fundamentals/it-essentials/os/linux/system"},
												{label: "🈺 Scripting", link: "it-essentials/os/linux/scripting"},
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
							label: "🌐 Networking (CCNA 200-301)", link: "it-fundamentals/networking/index-net"
						},
						{
							label: "🛡 IT Sec (CompTIA Sec+-701)", link: "it-fundamentals/it-security/index-sec"
						},
					],
				},
				{
					label: "🛢 DataBases 🧨", 
					collapsed: true,
					items: [
						{
							label: "Introduction to DBs", link: "#"
						},
						{
							label: "Design DBs", link: "#"
						},
						{
							label: "Programming DBs", 
							collapsed: true,
							items: [
								{label: "SQL", link: "#"},
								{label: "MySQL", link: "#"},
								{label: "PostgreSQL", link: "#"},
								{label: "NOSQL", link: "#"},
							]
						},
						{
							label: "Interacting with Data (Python)", link: "#"

						},
					],
				},
				{
					label: "⛩ Programación 🔰",
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
											items: [
												{label: "Introducción", link: "#"},
												{label: "Configuración Inicial", link: "#"},
												{label: "Básico", link: "#"},
												{label: "Avanzado", link: "#"},
											],
										},
										{
											label: "GitHub",
											items: [
												{label: "Introducción", link: "#"},
												{label: "Creación y Configuración de repositorio", link: "#"},
												{label: "Básico", link: "#"},
												{label: "Avanzado", link: "#"},
											],
										},
									],
								},
							],
						},
						{
							label: "🎲 Lenguajes",
							collapsed: true,
							items: [
								{label: "Python", link: "programming/programming-languages/python/python-index"},
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
					label: "🔐 Privacidad && OPSEC 🛑",
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
							items: [
								{label: "Introduction", link: "privacy-opsec/opsec/0-introduction"},
								{label: "Securing the OS (Hardening)", link: "privacy-opsec/opsec/2-securing-os"},
								{label: "🐧 Linux Hardening 🧨", link: "#"},
								{label: "⏹ Windows Hardening 🧨", link: "#"},
								{label: "🍏 macOS Hardening 🧨", link: "#"},
								{label: "Hardware Spoofing", link: "privacy-opsec/opsec/3-hardware-spoofing"},
								{label: "Encryption", link: "privacy-opsec/opsec/4-encryption"},
								{label: "VMs (Qubes, Whonix, etc.)", link: "privacy-opsec/opsec/5-vms"},
								{label: "VPSs, RDP & VPNs", link: "privacy-opsec/opsec/6-vps-rdp-vpn"},
								{label: "Anonymous Crypto", link: "privacy-opsec/opsec/7-anon-crypto"},
								{label: "Using PGP", link: "privacy-opsec/opsec/8-use-pgp"},
								{label: "Anonymous Emails", link: "privacy-opsec/opsec/9-anon-mails"},
								{label: "END", link: "privacy-opsec/opsec/10-final"},
							],
						},
					],
				},
				{
					label: "👥 OSINT 🧨",
					collapsed: true,
					items: [
						{label: "0. OSINT Bookmark", link: "/osint-se/osint/0-bookmarks"},
						{label: "1. Introduction", link: "/osint-se/osint/1-introduction"},
						{label: "2. Search Engines", link: "/osint-se/osint/2-search-engines"},
						{label: "3. Specializad Tools", link: "/osint-se/osint/3-specialized-tools"},
						{label: "4. Social Avenues", link: "/osint-se/osint/4-social-avenues"},
						{label: "5. Data Breaches", link: "/osint-se/osint/5-data-breaches"},
						{label: "6. Dark Web", link: "/osint-se/osint/6-dark-web"},
					],
				},
				{
					label: "🎭 Social Engineering 🧨",
					collapsed: true,
					items: [
						{label: "0. Introduction", link: "#"},
						{label: "1. OSINT", link: "#"},
						{label: "2. Profiling/DISC", link: "#"},
						{label: "3. Pretexting", link: "#"},
						{label: "4. Robin Dreeke", link: "#"},
						{label: "5. Robert Cialdini", link: "#"},
						{label: "6. ", link: "#"},
						{label: "7. ", link: "#"},
						{label: "8. ", link: "#"},
						{label: "9. ", link: "#"},
						{label: "10. ", link: "#"},
					],
				},
				{
					label: "🌀 General Pentesting 🔰",
					collapsed: true,
					items: [
						{label: "Pentesting Methodology", link: "#"},
						{label: "Enumeration Fundamentals", link: "#"},
						{label: "Explotation Fundamentals", link: "#"},
					],
				},
				{
					label: "⚙ OSs Pentesting 🔰",
					collapsed: true,
					items: [
						{
							label: "Linux Privesc",
							collapsed: true,
							items: [
								{ label: "Abusing Sudoers Privileges", link: "#" },
								{ label: "Abusing SUID Privileges", link: "#" },
								{ label: "Detection and exploitation of Cron tasks", link: "#" },
								{ label: "PATH Hijacking", link: "#" },
								{ label: "Python Library Hijacking", link: "#" },
								{ label: "Abuse of incorrectly implemented permissions", link: "#" },
								{ label: "Detection and exploitation of Capabilities", link: "#" },
								{ label: "Kernel Exploitation", link: "#" },
								{ label: "Abuse of special user groups", link: "#" },
								{ label: "Abuse of internal system services", link: "#" },
								{ label: "Abuse of specific binaries", link: "#" },
								{ label: "Hijacking the library of dynamically linked shared objects", link: "#" },
								{ label: "Docker Breakout", link: "#" },
							],
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
					label: "👽 Networking Pentesting 🔰",
					collapsed: true,
					items: [
					],
				},
				{
					label: "🕸 Web Pentesting 🔰",
					collapsed: true,
					items: [
						{
							label: "Web Vulns",
							collapsed: true,
							items: [
								{ label: "Cross-site-Scripting", link: "#" },
								{ label: "File Inclusion/Path Traversal", link: "#" },
								{ label: "Remote File Inclusion", link: "#" },
								{ label: "Log Poisoning", link: "#" },
								{ label: "Cross Site Request Forgery", link: "#" },
								{ label: "Server Side Request Forgery", link: "#" },
								{ label: "Server Side Template Injection", link: "#" },
								{ label: "Client Side Server Injection", link: "#" },
								{ label: "Type Jugling Attack", link: "#" },
								{ label: "XML External Entity Injection", link: "#" },
								{ label: "SQL Injection", link: "web-pentesting/web-vulns/sqli" },
								{ label: "NOSQL Injection", link: "#" },
								{ label: "Header Injection", link: "#" },
								{ label: "LDAP Injection", link: "#" },
								{ label: "LaTeX Injection", link: "#" },
								{ label: "XPath Injection", link: "#" },
								{ label: "File Uploads", link: "#" },
								{ label: "Padding Oracle Attack", link: "#" },
								{ label: "Deserialization Attacks", link: "#" },
								{ label: "Prototype Pollution", link: "#" },
								{ label: "Full Zone Transfer Attack", link: "#" },
								{ label: "Mass Assignment Attack", link: "#" },
								{ label: "Open Redirect", link: "#" },
								{ label: "ShellShock Attack", link: "#" },
								{ label: "IDOR", link: "#" },
								{ label: "CORS", link: "#" },
								{ label: "SQL Truncation", link: "#" },
								{ label: "Session Puzzling", link: "#" },
								{ label: "Race Condition", link: "#" },
								{ label: "CSS Injection", link: "#" },
							],
						},
						{
							label: "API Pentesting",
							collapsed: true,
							items: [],
						},
						{
							label: "Web Tech Pentesting",
							collapsed: true,
							items: [
								
							],
						},
					],
				},
				{
					label: "📻 Wireless Pentesting",
					collapsed: true,
					items: [
						{
							label: "Wifi",
							collapsed: true,
							items: [
								{ label: "0, Introduction", link: "#" },
								{ label: "1. Required Wifi Hardware", link: "#" },
								{ label: "2. Pre-Requisites", link: "#" },
								{ label: "3. Hacking Wifi Networks", link: "#" },
								{ label: "4. Unable to hack Wifi", link: "#" },
								{ label: "5. Increase the POWER", link: "#" },
								{ label: "6. Locating the Access Point", link: "#" },
								{ label: "7. WPA3 Networks", link: "#" },
							],
						},
						{
							label: "Bluetooth 🧨",
							collapsed: true,
							items: [],
						},
						{
							label: "SDR 🧨",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "📱 Mobile Pentesting 🧨",
					collapsed: true,
					items: [
						{
							label: "🟢 Android",
							collapsed: true,
							items: [],
						},
						{
							label: " 🔵 IOS",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "🎱 Low Level Pentesting 🧨",
					collapsed: true,
					items: [
						{
							label: "Buffer Overflow",
							collapsed: true,
							items: [],
						},
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
					label: "🧩 Others ( Pentesting ) 🧨",
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
					label: "🔷 Blue Team 🛑",
					collapsed: true,
					items: [
						{
							label: "Malware Analysis",
							collapsed: true,
							items: [],
						},
					],
				},
				{
					label: "🎇 Desarrollo Web 🔰",
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
									label: "PHP",
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
				{
					label: "🎩 English",
					collapsed: true,
					items: [
						{
							label: "English for IT",
							collapsed: true,
							items: [],
						},
						{
							label: "English (General)",
							collapsed: true,
							items: [],
						},
					],
				},
			],
		}),
	],
});
