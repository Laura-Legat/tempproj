export default function handler(req, res) {
    const raw = process.env.REASONS || "";
    const reasons = raw.split("|");

    const startDate = new Date("2025-10-08T00:00:00Z");
    const now = new Date();

    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceStart = Math.floor((now - startDate) / msPerDay);

    const index = daysSinceStart % reasons.length;
    const reason = reasons[index];

    res.status(200).json({ reason });
}
