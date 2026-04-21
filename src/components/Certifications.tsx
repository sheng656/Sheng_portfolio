import { motion } from "framer-motion";
import type { CertificationItem, CertificationsData } from "../types";

interface CertificationsProps {
	data: CertificationsData;
}

const formatIssueDate = (issueDate: string) => {
	const date = new Date(`${issueDate}-01`);
	if (Number.isNaN(date.getTime())) {
		return issueDate;
	}
	return new Intl.DateTimeFormat("en-NZ", { month: "long", year: "numeric" }).format(date);
};

function CertificationBadge({ item }: { item: CertificationItem }) {
	return (
		<article className="rounded-2xl border border-base-border/80 bg-base-elevated/65 p-5 shadow-soft">
			<div className="flex flex-col gap-5 sm:flex-row sm:items-center">
				<div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-base-border bg-base-surface p-2">
					<img
						src={item.badgeImageUrl}
						alt={item.name}
						className="h-full w-full object-contain"
						loading="lazy"
					/>
				</div>

				<div className="min-w-0">
					<h3 className="font-display text-xl font-semibold text-ink">{item.name}</h3>
					<p className="mt-1 text-sm text-muted">{item.issuer}</p>
					<p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-200">
						{formatIssueDate(item.issueDate)}
					</p>
					<a
						href={item.verificationUrl}
						target="_blank"
						rel="noreferrer"
						className="mt-3 inline-flex text-sm font-semibold text-accent-200 transition hover:text-accent-100"
						aria-label={item.name}
					>
						{item.verificationUrl}
					</a>
				</div>
			</div>
		</article>
	);
}

function Certifications({ data }: CertificationsProps) {
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
			<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
				{data.heading}
			</h2>

			<div className="mt-8 grid gap-4">
				{data.items.map((item) => (
					<CertificationBadge key={item.id} item={item} />
				))}
			</div>
		</motion.section>
	);
}

export default Certifications;
