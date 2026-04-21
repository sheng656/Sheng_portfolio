import { motion } from "framer-motion";
import { useState } from "react";
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
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});

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

				<form
					className="grid gap-4 rounded-2xl border border-base-border/80 bg-base-elevated/60 p-5"
					onSubmit={(event) => {
						event.preventDefault();
					}}
					aria-label={data.heading}
				>
					<label className="grid gap-1 text-sm text-muted" htmlFor="contact-name">
						{data.formLabels.name}
						<input
							id="contact-name"
							name="name"
							type="text"
							required
							value={formValues.name}
							onChange={(event) =>
								setFormValues((values) => ({
									...values,
									name: event.target.value,
								}))
							}
							className="rounded-xl border border-base-border bg-base-surface px-3 py-2 text-sm text-ink outline-none ring-accent-400 transition focus:ring-2"
						/>
					</label>

					<label className="grid gap-1 text-sm text-muted" htmlFor="contact-email">
						{data.formLabels.email}
						<input
							id="contact-email"
							name="email"
							type="email"
							required
							value={formValues.email}
							onChange={(event) =>
								setFormValues((values) => ({
									...values,
									email: event.target.value,
								}))
							}
							className="rounded-xl border border-base-border bg-base-surface px-3 py-2 text-sm text-ink outline-none ring-accent-400 transition focus:ring-2"
						/>
					</label>

					<label className="grid gap-1 text-sm text-muted" htmlFor="contact-message">
						{data.formLabels.message}
						<textarea
							id="contact-message"
							name="message"
							required
							rows={5}
							value={formValues.message}
							onChange={(event) =>
								setFormValues((values) => ({
									...values,
									message: event.target.value,
								}))
							}
							className="resize-none rounded-xl border border-base-border bg-base-surface px-3 py-2 text-sm text-ink outline-none ring-accent-400 transition focus:ring-2"
						/>
					</label>

					<button
						type="submit"
						className="mt-1 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-surface-950 transition hover:bg-accent-400 hover:shadow-glow"
					>
						{data.formLabels.submit}
					</button>
				</form>
			</div>
		</motion.section>
	);
}

export default Contact;
