import {useRef} from "react";
import {motion, useReducedMotion, useScroll, useTransform,} from "motion/react";
import {ArrowUpRight, ChevronDown, Mail} from "lucide-react";
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube,} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const navigation = [
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Certifications", href: "#certifications"},
    {name: "Connect", href: "#connect"},
];

const socialLinks = [
    {
        name: "LinkedIn",
        username: "Gurtej Singh",
        url: "https://www.linkedin.com/in/gurtejsingh7121/",
        icon: FaLinkedin,
    },
    {
        name: "GitHub",
        username: "@YoGurt31",
        url: "https://github.com/YoGurt31",
        icon: FaGithub,
    },
    {
        name: "Email",
        username: "gurtejsingh7121@gmail.com",
        url: "mailto:gurtejsingh7121@gmail.com",
        icon: Mail,
    },
    {
        name: "YouTube",
        username: "@YoGurt317",
        url: "https://www.youtube.com/@YoGurt317",
        icon: FaYoutube,
    },
    {
        name: "X / Twitter",
        username: "@GurtejS317",
        url: "https://x.com/GurtejS317",
        icon: FaXTwitter,
    },
    {
        name: "Instagram",
        username: "@gurt3jyyy",
        url: "https://www.instagram.com/gurt3jyyy/",
        icon: FaInstagram,
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

function PlaceholderSection({id, number, title, description}) {
    return (
        <section
            id={id}
            className="relative min-h-[45vh] scroll-mt-24 border-t border-white/5 px-6 py-28"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={fadeUp}
                transition={{duration: 0.6}}
                className="mx-auto max-w-6xl"
            >
                <div className="mb-5 flex items-center gap-4">
          <span className="text-sm font-medium tracking-widest text-accent">
            {number}
          </span>

                    <div className="h-px w-12 bg-primary"/>
                </div>

                <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                    {title}
                    <span className="text-accent">.</span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                    {description}
                </p>
            </motion.div>
        </section>
    );
}

function Hero() {
    const heroRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const nameOpacity = useTransform(
        scrollYProgress,
        [0, 0.55, 0.85],
        [1, 1, 0]
    );

    const nameY = useTransform(
        scrollYProgress,
        [0, 0.85],
        [0, -130]
    );

    const nameScale = useTransform(
        scrollYProgress,
        [0, 0.85],
        [1, 0.85]
    );

    const descriptionOpacity = useTransform(
        scrollYProgress,
        [0, 0.4, 0.8],
        [1, 1, 0]
    );

    const descriptionY = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0, -65]
    );

    return (
        <main
            ref={heroRef}
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 sm:px-6"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--site-grid) 1px, transparent 1px), linear-gradient(90deg, var(--site-grid) 1px, transparent 1px)",
                    backgroundSize: "65px 65px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 10%, transparent 75%)",
                }}
            />

            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"/>

            <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
                <motion.div
                    style={
                        reduceMotion
                            ? undefined
                            : {
                                opacity: nameOpacity,
                                y: nameY,
                                scale: nameScale,
                            }
                    }
                >
                    <motion.h1
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 70,
                                    filter: "blur(12px)",
                                }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1.15,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-hero whitespace-nowrap text-[clamp(1.5rem,8vw,8rem)] font-bold leading-[1.1] tracking-[-0.035em] text-foreground"
                    >
                        GURTEJ SINGH
                    </motion.h1>
                </motion.div>

                <motion.div
                    style={
                        reduceMotion
                            ? undefined
                            : {
                                opacity: descriptionOpacity,
                                y: descriptionY,
                            }
                    }
                    className="mt-10"
                >
                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 25,
                                }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.65,
                        }}
                    >
                        <p className="font-body text-base font-medium text-secondary sm:text-lg md:text-xl">
                            Mechanical Engineering Student @ New York Institute of Technology
                        </p>

                        <p className="mt-5 font-heading text-xl font-bold tracking-[0.08em] text-accent sm:text-2xl md:text-[1.75rem]">
                            Jack Of All Trades
                        </p>
                    </motion.div>

                    <motion.div
                        initial={
                            reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 25,
                                }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.9,
                        }}
                        className="mt-12 flex items-center justify-center"
                    >
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_35px_var(--site-glow)]"
                        >
                            Explore My Work

                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                initial={reduceMotion ? false : {opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5}}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
                aria-label="Scroll to About"
            >
                <motion.div
                    animate={reduceMotion ? undefined : {y: [0, 8, 0]}}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                >
                    <ChevronDown size={25}/>
                </motion.div>
            </motion.a>
        </main>
    );
}

function ConnectSection() {
    return (
        <section
            id="connect"
            className="relative scroll-mt-24 border-t border-white/5 px-6 py-28"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={fadeUp}
                    transition={{duration: 0.6}}
                >
                    <div className="mb-5 flex items-center gap-4">
            <span className="text-sm font-medium tracking-widest text-accent">
              06
            </span>

                        <div className="h-px w-12 bg-primary"/>
                    </div>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        Connect With Me
                        <span className="text-accent">.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">
                        Whether you're interested in collaborating, discussing,<br/>
                        or just connecting, feel free to reach out.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;

                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target={social.name === "Email" ? undefined : "_blank"}
                                rel={
                                    social.name === "Email"
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.06,
                                }}
                                whileHover={{y: -3}}
                                className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-surface px-5 py-5 transition-all duration-300 hover:border-primary hover:bg-surface-hover"
                            >
                                <div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/20 text-accent transition-colors duration-300 group-hover:bg-primary/30 group-hover:text-accent-light">
                                    <Icon size={23}/>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-heading text-base font-semibold text-foreground">
                                        {social.name}
                                    </h3>

                                    <p className="mt-1 break-words text-sm text-secondary">
                                        {social.username}
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                                />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
            <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5">
                    <a
                        href="#home"
                        className="flex shrink-0 items-center"
                        aria-label="Gurtej Singh — Home"
                    >
                        <img
                            src="/logo.svg"
                            alt="GS Logo"
                            className="h-11 w-11 object-contain transition-transform duration-300 hover:scale-110"
                        />
                    </a>

                    <div className="hidden items-center gap-7 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm text-secondary transition-colors duration-300 hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#about"
                        className="text-sm text-secondary transition-colors hover:text-foreground md:hidden"
                    >
                        About
                    </a>
                </nav>
            </header>

            <Hero/>

            <PlaceholderSection
                id="about"
                number="01"
                title="About Me"
                description="Passionate engineering and computer science student with a love for technology and innovation. Detail-oriented problem solver and natural leader with strong communication skills. Experienced in leading teams, fostering collaboration, and applying knowledge to real-world situations."
            />

            <PlaceholderSection
                id="experience"
                number="02"
                title="Experience"
                description="My professional experience, technical leadership, robotics mentoring, and STEM education."
            />

            <PlaceholderSection
                id="skills"
                number="03"
                title="Technical Skills"
                description="The trades I be jacking."
            />

            <PlaceholderSection
                id="projects"
                number="04"
                title="Projects"
                description="A collection of projects, each with its own detailed page documenting the development process."
            />

            <PlaceholderSection
                id="certifications"
                number="05"
                title="Certifications"
                description="Professional certifications and technical credentials earned throughout my engineering journey."
            />

            <ConnectSection/>

            <footer className="border-t border-white/10 px-6 py-8">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                    <a
                        href="#home"
                        className="flex shrink-0 items-center"
                        aria-label="Gurtej Singh — Home"
                    >
                        <img
                            src="/logo.svg"
                            alt="GS Logo"
                            className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
                        />
                    </a>

                    <p className="text-right text-sm text-muted">
                        © {new Date().getFullYear()} Gurtej Singh
                    </p>
                </div>
            </footer>
        </div>
    );
}