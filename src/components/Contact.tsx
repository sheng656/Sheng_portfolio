import { motion } from "framer-motion";
import type { ContactData } from "../types";
import IconGlyph from "./IconGlyph";

interface ContactProps {
	data: ContactData;
}

const socialIconByLabel: Record<string, string> = {
	linkedin: "linkedin",
	github: "github",
	email: "email",
};

function Contact({ data }: ContactProps) {
	const headingId = `${data.id}-heading`;

	return (
		<motion.section
			id={data.id}
			aria-labelledby={headingId}
			className="section-anchor rounded-3xl border border-base-border/70 bg-base-surface/65 p-6 shadow-soft md:p-10"
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
				<div>
					<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
						{data.heading}
					</h2>
					<p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{data.description}</p>

					<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-elevated px-3 py-1.5 text-sm font-medium text-ink">
						<span
							aria-hidden="true"
							className={
								data.availability.isOpenToWork
									? "h-2.5 w-2.5 rounded-full bg-success-500"
									: "h-2.5 w-2.5 rounded-full bg-warning-500"
							}
						/>
						{data.availability.statusText}
					</div>

					<ul className="mt-5 grid gap-2 sm:max-w-sm">
						{data.socialLinks.map((social) => {
							const iconName = socialIconByLabel[social.label.toLowerCase()] ?? "link";

							return (
								<li key={social.label}>
									<a
										href={social.href}
										target="_blank"
										rel="noreferrer"
										className="inline-flex w-full items-center gap-3 rounded-xl border border-base-border bg-base-elevated/60 px-3 py-2 text-sm text-muted transition hover:border-accent-400/60 hover:text-ink"
									>
										<IconGlyph name={iconName} className="h-4 w-4 text-accent-300" />
										{social.label}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="rounded-2xl border border-base-border/80 bg-base-elevated/60 p-5">
					<p className="text-sm font-semibold text-ink">Best way to reach me</p>
					<p className="mt-2 text-sm leading-relaxed text-muted">
						Send me a message directly by email. I usually reply faster there than through social platforms.
					</p>
					<a
						href={`mailto:${data.emailAddress}`}
						className="mt-5 inline-flex rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-surface-950 transition hover:bg-accent-400 hover:shadow-glow"
					>
						Email me
					</a>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
