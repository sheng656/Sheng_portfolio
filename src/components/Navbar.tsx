import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { NavbarData, ThemeMode } from "../types";

interface NavbarProps {
	data: NavbarData;
	mode: ThemeMode;
	onToggleTheme: () => void;
}

const themeToggleLabel = {
	dark: "Switch to light mode",
	light: "Switch to dark mode",
} as const;

function Navbar({ data, mode, onToggleTheme }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
			<div className="mx-auto max-w-7xl rounded-2xl border border-base-border/80 bg-base-surface/85 px-3 shadow-soft backdrop-blur-xl md:px-5">
				<div className="flex h-14 items-center justify-between gap-4">
					<a
						href="#hero"
						aria-label={data.brand}
						className="font-display text-lg font-semibold tracking-wide text-ink"
					>
						{data.brand}
					</a>

					<nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
						{data.items.map((item) => (
							<a
								key={item.id}
								href={`#${item.targetId}`}
								className="text-sm font-medium text-muted transition hover:text-ink"
							>
								{item.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={onToggleTheme}
							aria-label={themeToggleLabel[mode]}
							className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-base-border bg-base-elevated text-ink transition hover:border-accent-400/60 hover:text-accent-300"
						>
							{mode === "dark" ? (
								<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
									<path d="M12 18a6 6 0 1 1 5.62-8.07 1 1 0 0 0 1.88-.66A8 8 0 1 0 12 20a8.1 8.1 0 0 0 7.4-4.99 1 1 0 1 0-1.85-.76A6.02 6.02 0 0 1 12 18Z" />
								</svg>
							) : (
								<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
									<path d="M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm9 8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2ZM5 12a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2Zm11.07 5.66a1 1 0 0 1 1.41 0l1.42 1.41a1 1 0 0 1-1.42 1.42l-1.4-1.42a1 1 0 0 1 0-1.4ZM5.1 6.51a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41L5.1 7.92a1 1 0 0 1 0-1.41Zm13.8-1.42a1 1 0 0 1 0 1.42l-1.41 1.4a1 1 0 0 1-1.41-1.4l1.41-1.42a1 1 0 0 1 1.4 0ZM7.93 16.07a1 1 0 0 1 0 1.4l-1.41 1.42a1 1 0 0 1-1.42-1.41l1.42-1.41a1 1 0 0 1 1.41 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
								</svg>
							)}
						</button>

						<a
							href={`#${data.ctaTargetId}`}
							className="hidden rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-surface-950 transition hover:bg-accent-400 hover:shadow-glow sm:inline-block"
						>
							{data.ctaLabel}
						</a>

						<button
							type="button"
							className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-base-border bg-base-elevated text-ink md:hidden"
							aria-label="Toggle navigation menu"
							aria-expanded={isMenuOpen}
							onClick={() => setIsMenuOpen((open) => !open)}
						>
							<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none">
								<path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
							</svg>
						</button>
					</div>
				</div>

				<AnimatePresence>
					{isMenuOpen ? (
						<motion.nav
							aria-label="Mobile navigation"
							className="grid gap-1 border-t border-base-border/70 py-3 md:hidden"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.22, ease: "easeOut" }}
						>
							{data.items.map((item) => (
								<a
									key={item.id}
									href={`#${item.targetId}`}
									onClick={() => setIsMenuOpen(false)}
									className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-base-elevated hover:text-ink"
								>
									{item.label}
								</a>
							))}
							<a
								href={`#${data.ctaTargetId}`}
								onClick={() => setIsMenuOpen(false)}
								className="mt-1 rounded-lg bg-accent-500 px-3 py-2 text-sm font-semibold text-surface-950"
							>
								{data.ctaLabel}
							</a>
						</motion.nav>
					) : null}
				</AnimatePresence>
			</div>
		</header>
	);
}

export default Navbar;
