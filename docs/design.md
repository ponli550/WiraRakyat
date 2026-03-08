<!-- 3D Interactive Hub -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Warung Wira | Future SME Hub</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#06f9f9",
                        "background-light": "#f5f8f8",
                        "background-dark": "#0f2323",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: rgba(15, 35, 35, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(6, 249, 249, 0.1);
        }
        .neon-glow {
            box-shadow: 0 0 15px rgba(6, 249, 249, 0.3);
        }
        .map-container {
            background: radial-gradient(circle at center, #1a3a3a 0%, #0f2323 100%);
        }
        .ripple {
            animation: pulse-red 2s infinite;
        }
        @keyframes pulse-red {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(3); opacity: 0; }
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-hidden">
<!-- Hero Interface Container -->
<div class="relative h-screen w-full flex flex-col overflow-hidden">
<!-- Background 3D Map Visualization -->
<div class="absolute inset-0 z-0 map-container">
<div class="absolute inset-0 opacity-30" data-alt="Dark starry void background pattern" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiMJBxfTT7Wd3CEBPlDlGLRU33UuFY9DrcWUQ-_st33jATVk2lOCUb8rrU9YqSWAtCdXp69Sq7Pd81r0WO5gsbw5aS-YO4mJg7KTA0HWDbqWajcCD-HL8l9oEG5qqOHRBPeomHRaC3LsZnORHay1bLEiZ_JduxNgbtgztDqpl3SQlc5CE3xfPJnojO9wFHPdMJ6ZVlSRBbl5LdvxQMavYaginT81t2Htzo-Zv9t29shlg3qaJhkT9xkA5LdvHWrbhh4vWIB5MK1uqe');"></div>
<!-- Central Map Representation -->
<div class="relative w-full h-full flex items-center justify-center">
<div class="relative w-[80%] h-[60%] opacity-80" data-alt="3D map of Malaysia with neon cyan batik outlines" data-location="Malaysia" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-O1iuYBAWN8fq35p092pES1OfehbU51SrFiXsDLzM8GOVbqZn7ouT3a1FyItCfO7FECz3yc8mVwcuer3IRIPtR7uxj62dkdTH3V71a5A0efFJdOCUCVZ_pjUgCb2aruMEMEgI_UySnRLT5MequwO9Fpw3vWDt_bQEGKchrYuVQtKHpSPq0qQSSD0fXVdoe_7RlR4pCWd2hsmvw56fu4pT_5bb8suDAE0CJHq1YhawyHF4CUc-Mp0nmpjK67pxdShCxNv417I_1_cb'); background-size: contain; background-repeat: no-repeat; background-position: center;">
<!-- SME Markers (Glowing Orbs) -->
<div class="absolute top-1/2 left-1/3 w-3 h-3 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_10px_#facc15]"></div>
<div class="absolute top-[40%] left-[45%] w-3 h-3 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_10px_#facc15]"></div>
<div class="absolute top-[60%] left-[20%] w-3 h-3 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_10px_#facc15]"></div>
<div class="absolute top-[55%] left-[80%] w-3 h-3 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_10px_#facc15]"></div>
<!-- Flood Alert Ripple -->
<div class="absolute top-[45%] left-[28%] flex items-center justify-center">
<div class="absolute w-8 h-8 bg-red-500/30 rounded-full ripple"></div>
<div class="absolute w-8 h-8 bg-red-500/30 rounded-full ripple" style="animation-delay: 0.5s"></div>
<div class="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
</div>
</div>
</div>
</div>
<!-- Top Navigation Bar -->
<header class="relative z-20 flex items-center justify-between px-8 py-6">
<div class="flex items-center gap-3">
<div class="p-2 bg-primary rounded-lg text-background-dark">
<span class="material-symbols-outlined text-2xl font-bold">grid_view</span>
</div>
<div>
<h1 class="text-2xl font-bold tracking-tight text-slate-100">Warung Wira</h1>
<p class="text-primary text-xs font-medium tracking-widest uppercase">Future SME Hub</p>
</div>
</div>
<div class="flex items-center gap-4">
<div class="hidden md:flex glass-panel rounded-xl px-2 py-1 gap-1">
<button class="px-4 py-1.5 rounded-lg bg-primary text-background-dark text-sm font-bold transition-all">EN</button>
<button class="px-4 py-1.5 rounded-lg hover:bg-white/10 text-slate-400 text-sm font-medium transition-all">MS</button>
</div>
<button class="glass-panel p-2.5 rounded-xl text-slate-100 hover:text-primary transition-colors">
<span class="material-symbols-outlined">public</span>
</button>
</div>
</header>
<!-- Main UI Overlay -->
<main class="relative z-10 flex-1 flex flex-col justify-between p-8">
<div class="flex flex-col lg:flex-row justify-between items-start gap-8">
<!-- Sidebar Navigation -->
<nav class="glass-panel rounded-2xl p-3 flex flex-col gap-2 w-full lg:w-64">
<a class="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-medium text-sm">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="font-medium text-sm">SME Network</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all relative" href="#">
<span class="material-symbols-outlined text-red-400">notifications_active</span>
<span class="font-medium text-sm">Alerts</span>
<span class="absolute top-3 right-4 w-2 h-2 bg-red-500 rounded-full"></span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-medium text-sm">Settings</span>
</a>
</nav>
<!-- Search and Stats -->
<div class="flex-1 w-full max-w-xl flex flex-col gap-6">
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="w-full glass-panel border-none rounded-2xl py-4 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Search SME markers or regions..." type="text"/>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="glass-panel p-6 rounded-2xl border-l-4 border-primary">
<p class="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Active SMEs</p>
<div class="flex items-end justify-between">
<h3 class="text-3xl font-bold text-slate-100">1,284</h3>
<span class="text-green-400 text-sm font-bold flex items-center mb-1">
<span class="material-symbols-outlined text-sm">trending_up</span> 12%
                                </span>
</div>
</div>
<div class="glass-panel p-6 rounded-2xl border-l-4 border-red-500">
<p class="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Risk Zones</p>
<div class="flex items-end justify-between">
<h3 class="text-3xl font-bold text-slate-100">1 Active</h3>
<span class="text-red-400 text-sm font-bold mb-1">High Alert</span>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Controls -->
<div class="flex justify-between items-end">
<div class="glass-panel p-4 rounded-2xl flex flex-col gap-4">
<div class="flex flex-col gap-1">
<button class="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-100 transition-colors">
<span class="material-symbols-outlined">add</span>
</button>
<button class="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-100 transition-colors">
<span class="material-symbols-outlined">remove</span>
</button>
</div>
<button class="p-2 bg-primary text-background-dark rounded-lg neon-glow">
<span class="material-symbols-outlined">near_me</span>
</button>
</div>
<div class="max-w-md w-full glass-panel p-6 rounded-2xl hidden lg:block border-t-2 border-primary/30">
<div class="flex items-start gap-4">
<div class="p-3 bg-red-500/20 text-red-500 rounded-xl">
<span class="material-symbols-outlined">warning</span>
</div>
<div>
<h4 class="text-slate-100 font-bold mb-1">Emergency: Flood Alert</h4>
<p class="text-slate-400 text-xs leading-relaxed">
                                Rhythmic red ripples detected in Terengganu district. 14 SMEs advised to activate contingency protocols.
                            </p>
</div>
</div>
</div>
</div>
</main>
<!-- Decorative Glows -->
<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>
</div>
</body></html>

<!-- Warung Digitizer -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Warung Digitizer - AI Menu Scanner</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#06f9f9",
              "background-light": "#f5f8f8",
              "background-dark": "#0f2323",
            },
            fontFamily: {
              "display": ["Space Grotesk"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .glass-panel {
            background: rgba(15, 35, 35, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(6, 249, 249, 0.2);
        }
        .scanner-line {
            height: 2px;
            background: linear-gradient(90deg, transparent, #06f9f9, transparent);
            box-shadow: 0 0 15px #06f9f9;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen">
<div class="relative flex h-full w-full flex-col overflow-hidden">
<header class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-background-dark/80 to-transparent">
<div class="flex items-center gap-3">
<div class="bg-primary p-1.5 rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-background-dark text-2xl font-bold">document_scanner</span>
</div>
<h1 class="text-xl font-bold tracking-tight text-white uppercase italic">Warung Digitizer</h1>
</div>
<div class="flex gap-3">
<button class="flex items-center justify-center rounded-full size-10 bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
<span class="material-symbols-outlined text-white">flashlight_on</span>
</button>
<button class="flex items-center justify-center rounded-full size-10 bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
<span class="material-symbols-outlined text-white">help</span>
</button>
</div>
</header>
<main class="relative flex-1 flex flex-col items-center justify-center p-4">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center" data-alt="A photograph of a physical Malaysian food menu on a wooden table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDODVUX4ilEldiGv8Z-z2IGhSevhMEogCosVL1KIISQj94KrYIQKg_L1ZOvGfw86w3uZk2Jbgujmbymypcg5pfoBn7qGV7EZP40UWZelXjC1a0duEBXjfNXtKnScusDqGnqdY6e9vBw8u6K6E4_fTOf2KJmohEHde9yitM7QjxRBcbeEvTQj1wo8qGhzlZdQxsSZwbj8oeHmYCC_YQ-uPz6IbtdbZhJyfDuJUJpWiBLlW09_UxAkak_THULHK0Gk44glC2Z6UrGPo3R");'>
</div>
<div class="absolute inset-0 bg-black/30"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 border-2 border-primary/50 rounded-xl">
<div class="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
<div class="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
<div class="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
<div class="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
<div class="absolute top-1/4 left-0 w-full scanner-line opacity-80"></div>
</div>
</div>
<div class="absolute bottom-8 left-4 right-4 md:right-auto md:left-8 md:bottom-auto md:top-24 z-40 w-full max-w-sm">
<div class="glass-panel p-6 rounded-xl shadow-2xl flex flex-col gap-6">
<div>
<div class="flex justify-between items-end mb-2">
<span class="text-primary text-xs font-bold uppercase tracking-widest">System Status</span>
<span class="text-white text-lg font-bold">Scanning... 72%</span>
</div>
<div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary shadow-[0_0_10px_rgba(6,249,249,0.8)]" style="width: 72%;"></div>
</div>
<p class="text-slate-400 text-[10px] mt-2 italic font-medium">Analyzing typography &amp; pricing structures</p>
</div>
<div class="flex flex-col gap-3">
<div class="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5 animate-pulse">
<div class="size-12 rounded-lg bg-cover bg-center shrink-0 border border-primary/30" data-alt="Close up photo of Nasi Lemak Ayam Berempah" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnO4jrX-tkK0XbBGaPMx2KQ2aXnYEGGf9rBywKW0Ma_Ep4na9Hv89wB9JxnfJ0r18k5GIFsIfWrEjG4Rj53Ip6_SC3i5bpcLcZV3TpU8KkTdF5YtvdJt1uGsztjycbaXNfThrDL_9h8HPDsKT9YojTGWXOo1ssWY8QWR0QhLornnfdfTr-mjDMC5LzHEsUiCBtvoMx2uH79mzZlV09DDRHFK_OQY7n9zdr2txzCsDRjWQyys6VE76YX_PP3vUhh3RidiIh9gD2wWOG");'></div>
<div class="flex-1 min-w-0">
<p class="text-xs text-primary font-semibold">ITEM DETECTED</p>
<p class="text-sm font-bold text-white truncate">Nasi Lemak Ayam Berempah</p>
<p class="text-xs text-slate-400">RM 12.50</p>
</div>
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
</div>
<div class="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
<div class="size-12 rounded-lg bg-cover bg-center shrink-0" data-alt="Teh Tarik image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8SrHMNaxOFgI_5B2ZurmPkdjs24WM_Z1LI5ZkZBWugDijnchc2-EhqtjbUtaHRXiRHTLIIqPRNbZtl0qtqsQOAipjXjClunTEfW2o6pVP89Vs2wvvhR16UlK078hWA3fv0DVqQUn71Fi73qVo_SjsFGZqNLak9GVLvBaaJNv6d5OFR-arZOH0iMc71YIXFlHviMYat9NSN4iFKTXSYVY-kd_c9CQ_9dDVPyXxr4csjDqYN9PKYohMgyILWfc1XuEoP5qD7mkYeTMP");'></div>
<div class="flex-1 min-w-0">
<p class="text-xs text-slate-400 font-semibold">VERIFIED</p>
<p class="text-sm font-bold text-white truncate">Teh Tarik Kaw</p>
<p class="text-xs text-slate-400">RM 3.50</p>
</div>
<span class="material-symbols-outlined text-primary text-sm">verified</span>
</div>
</div>
<div class="pt-2 border-t border-white/10">
<p class="text-primary text-sm font-medium leading-relaxed italic">
                            "Fuyoo, AI tengah tolong korang digitize menu ni! Tunggu kejap eh, bagi dia settle scan semua..."
                        </p>
</div>
<div class="flex gap-2">
<button class="flex-1 py-3 bg-primary text-background-dark font-bold rounded-lg text-sm transition-transform active:scale-95 flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-lg">save</span>
                            CONFIRM LIST
                        </button>
<button class="px-3 bg-white/10 text-white rounded-lg border border-white/20 transition-transform active:scale-95">
<span class="material-symbols-outlined py-3">refresh</span>
</button>
</div>
</div>
</div>
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8">
<button class="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-white text-3xl">image</span>
<span class="text-[10px] text-white font-bold uppercase tracking-tighter">Gallery</span>
</button>
<button class="relative size-20 rounded-full border-4 border-white/30 p-1 flex items-center justify-center group">
<div class="size-full rounded-full bg-white group-active:scale-90 transition-transform"></div>
<div class="absolute -top-2 -right-2 bg-primary text-background-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">AUTO</div>
</button>
<button class="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-white text-3xl">history</span>
<span class="text-[10px] text-white font-bold uppercase tracking-tighter">Recent</span>
</button>
</div>
</main>
<footer class="absolute bottom-0 left-0 right-0 h-1 hidden md:block bg-gradient-to-t from-black/50 to-transparent"></footer>
</div>
</body></html>

<!-- Banjir-Alert Lens -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff6b00",
                        "background-light": "#f5f8f8",
                        "background-dark": "#0f1414",
                        "hazard-red": "#ff3b30",
                        "hazard-orange": "#ff9500",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glow-subtle {
            box-shadow: 0 0 15px rgba(255, 107, 0, 0.3);
        }
        .icon-glow {
            text-shadow: 0 0 8px rgba(255, 107, 0, 0.6);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<header class="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
<div class="flex items-center gap-3">
<div class="flex items-center justify-center size-10 rounded-lg bg-primary/20">
<span class="material-symbols-outlined text-primary text-2xl icon-glow">flood</span>
</div>
<h2 class="text-slate-100 text-xl font-bold tracking-tight">Banjir-Alert</h2>
</div>
<div class="flex gap-3">
<button class="flex size-10 items-center justify-center rounded-xl bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="flex size-10 items-center justify-center rounded-xl bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
<main class="flex-1 max-w-[960px] mx-auto w-full p-4 space-y-6">
<section class="flex flex-col gap-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary" data-alt="Profile picture of a verified user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqYDUR232FNG305ttmjvqKd7Z1cUDg_1vux-DkBahKBIX6z_fddx-K_GMTk5y_tRZ5lgEnhJvjVjch_Tt4utQjcsP8Bjs-DQ1WZqt2CfQQ5b2RQlYBS7fRWymxKxRXCGCg9ajN9qSzsSBr5n9LkBYoB6-ZQqECHUdN1jiMeOYrNWH0xY25UdahiqWc_bNfvzBGTWrYk8KgibecQsFmlX9P313pYUimUk9nObZ4aDgUt0anUKIj-Mo4JzuUMTKi1hDk5f2q6LRSRs4W");'></div>
<div class="flex flex-col">
<h1 class="text-slate-100 text-lg font-bold leading-none">Wira User</h1>
<p class="text-primary text-xs font-medium mt-1">Verified Responder</p>
</div>
</div>
<div class="px-3 py-1 bg-hazard-red/20 border border-hazard-red/50 rounded-full">
<span class="text-hazard-red text-xs font-bold uppercase tracking-widest flex items-center gap-1">
<span class="material-symbols-outlined text-sm">warning</span> Live Mode
                            </span>
</div>
</div>
</section>
<div class="@container">
<div class="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
<div class="w-full h-[280px] bg-center bg-cover" data-alt="Flooded residential street with dark clouds above" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqNDe4RU4XjuZoxfch3vq_HsPjBQ_j5s2Y5wZKah5GiS44VO2SmCTwPkhkwlleFtKlxtkf0DsgDGlH8jHZLo-Sw9Cth60VQzOGHzGDovi-hdk5TZTAayUhZszaFKw8L-hdTOrhguWxhiu0gTBvP7RLsEPGLMSTMdwxyZItbrDncoeJEwSl8pmLnMEWhec8jeaXfe_jbrd6zc1CblfZIryV9nKCF8Qc2jFgizOjE1oSUyh0o1lBRe63hJgj7xhHp_yNnVmWrBubmhL3");'></div>
<div class="absolute bottom-0 left-0 p-6 z-20 w-full">
<div class="flex items-center justify-between gap-4">
<div>
<span class="text-primary text-sm font-bold tracking-[0.2em] uppercase">Emergency Status</span>
<h2 class="text-white text-3xl font-bold mt-1">High Risk Detected</h2>
</div>
<div class="bg-hazard-red text-white px-4 py-2 rounded-lg font-black text-xl shadow-lg glow-subtle">
                                    HIGH
                                </div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-1 @md:grid-cols-2 gap-4">
<div class="p-5 rounded-xl bg-slate-800/40 border border-white/5 flex flex-col gap-3">
<span class="material-symbols-outlined text-primary icon-glow">water_damage</span>
<p class="text-slate-400 text-xs font-bold uppercase tracking-tighter">Water Level</p>
<div class="flex items-baseline gap-2">
<p class="text-3xl font-bold text-slate-100">1.2m</p>
<p class="text-hazard-orange font-medium">+0.4m rise</p>
</div>
</div>
<div class="p-5 rounded-xl bg-slate-800/40 border border-white/5 flex flex-col gap-3">
<span class="material-symbols-outlined text-primary icon-glow">umbrella</span>
<p class="text-slate-400 text-xs font-bold uppercase tracking-tighter">Precipitation</p>
<div class="flex items-baseline gap-2">
<p class="text-3xl font-bold text-slate-100">45mm</p>
<p class="text-slate-400 font-medium">Heavy Rain</p>
</div>
</div>
</div>
<div class="space-y-4">
<h3 class="text-slate-100 text-sm font-bold uppercase tracking-widest px-1">Navigation</h3>
<nav class="grid grid-cols-4 gap-2">
<a class="flex flex-col items-center justify-center p-4 rounded-xl bg-primary text-background-dark glow-subtle transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined font-bold">home</span>
<span class="text-[10px] font-bold mt-1 uppercase">Home</span>
</a>
<a class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700 transition-colors" href="#">
<span class="material-symbols-outlined">warning</span>
<span class="text-[10px] font-bold mt-1 uppercase">Alerts</span>
</a>
<a class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700 transition-colors" href="#">
<span class="material-symbols-outlined">map</span>
<span class="text-[10px] font-bold mt-1 uppercase">Map</span>
</a>
<a class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700 transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-bold mt-1 uppercase">Setup</span>
</a>
</nav>
</div>
<div class="pt-6 pb-12 sticky bottom-0 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent px-2">
<button class="w-full flex items-center justify-center gap-4 bg-primary text-background-dark h-20 rounded-full glow-subtle hover:bg-orange-400 transition-all active:scale-[0.98]">
<div class="bg-background-dark/20 p-2 rounded-full">
<span class="material-symbols-outlined text-3xl font-black">broadcast_on_home</span>
</div>
<span class="text-2xl font-black uppercase tracking-tighter">Wira Alert</span>
</button>
<p class="text-center text-slate-500 text-[10px] font-bold uppercase mt-4 tracking-widest">Tap and hold for emergency broadcast</p>
</div>
</main>
</div>
</div>
</body></html>
