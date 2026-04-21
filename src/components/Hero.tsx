import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { HeroData } from "../types";

interface HeroProps {
	data: HeroData;
}

const particles = [
	{ left: 8, top: 18, size: 38, delay: 0, duration: 13 },
	{ left: 20, top: 62, size: 56, delay: 1.4, duration: 16 },
	{ left: 34, top: 30, size: 28, delay: 2.2, duration: 15 },
	{ left: 56, top: 68, size: 44, delay: 3.5, duration: 17 },
	{ left: 72, top: 22, size: 35, delay: 2.8, duration: 14 },
	{ left: 84, top: 58, size: 52, delay: 1.1, duration: 18 },
];

const roleJoiner = "|";

function Hero({ data }: HeroProps) {
	const roles = data.roles;
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		setRoleIndex(0);
		setCharIndex(0);
		setIsDeleting(false);
	}, [roles.join(roleJoiner)]);

	useEffect(() => {
		if (roles.length === 0) {
			return;
		}

		const activeRole = roles[roleIndex] ?? "";
		const atStart = charIndex === 0;
		const atEnd = charIndex === activeRole.length;

		let timeoutDuration = isDeleting ? 42 : 86;
		if (!isDeleting && atEnd) {
			timeoutDuration = 1250;
		}
		if (isDeleting && atStart) {
			timeoutDuration = 350;
		}

		const timeoutId = window.setTimeout(() => {
			if (!isDeleting && atEnd) {
				setIsDeleting(true);
				return;
			}
			if (isDeleting && atStart) {
				setIsDeleting(false);
				setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
				return;
			}

			setCharIndex((currentIndex) => currentIndex + (isDeleting ? -1 : 1));
		}, timeoutDuration);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [charIndex, isDeleting, roleIndex, roles]);

	const typedRole = useMemo(() => {
		if (roles.length === 0) {
			return "";
		}
		const activeRole = roles[roleIndex] ?? "";
		return activeRole.slice(0, charIndex);
	}, [charIndex, roleIndex, roles]);

	return (
		<section
			id={data.id}
			aria-labelledby="hero-heading"
			className="section-anchor relative isolate flex min-h-screen items-center overflow-hidden rounded-3xl border border-base-border/70 bg-base-surface/50 px-5 py-16 md:px-10"
		>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-mesh opacity-80" />
				<div className="hero-grid absolute inset-0 opacity-60" />
				{particles.map((particle, index) => {
					const particleStyles: CSSProperties = {
						left: `${particle.left}%`,
						top: `${particle.top}%`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						["--float-delay" as string]: `${particle.delay}s`,
						["--float-duration" as string]: `${particle.duration}s`,
					};

					return <span key={index} className="hero-particle" style={particleStyles} />;
				})}
			</div>

			<motion.div
				className="relative z-10 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<p className="font-mono text-sm uppercase tracking-[0.24em] text-accent-300/90">{data.intro}</p>
				<h1 id="hero-heading" className="mt-4 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
					{data.name}
				</h1>
				<p className="mt-4 h-8 font-mono text-base text-accent-200 sm:text-lg" aria-live="polite">
					{typedRole}
					<span aria-hidden="true" className="ml-1 inline-block w-2 animate-blink text-accent-300">
						|
					</span>
				</p>
				<p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{data.summary}</p>

				<div className="mt-9 flex flex-wrap gap-3">
					{data.actions.map((action) => {
						const href = action.targetId ? `#${action.targetId}` : action.href ?? "#";
						const isPrimary = action.variant === "primary";
						const shouldDownload = Boolean(action.href) && action.label.toLowerCase().includes("download");

						return (
							<a
								key={action.label}
								href={href}
								download={shouldDownload}
								className={
									isPrimary
										? "rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-surface-950 transition hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-glow"
										: "rounded-full border border-base-border bg-base-elevated px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent-400/70 hover:text-accent-200"
								}
							>
								{action.label}
							</a>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}

export default Hero;
