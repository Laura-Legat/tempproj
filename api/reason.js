export default function handler(req, res) {
    const raw = process.env.REASONS || "";
    const reasons = raw.split("|");

    console.log(reasons);

    const startDate = new Date("2025-10-07T00:00:00Z");
    const now = new Date();

    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceStart = Math.max(0, Math.floor((now - startDate) / msPerDay));
    console.log(daysSinceStart);

    const index = daysSinceStart % reasons.length;
    console.log(index);
    const reason = reasons[index];

    console.log(reason);
    res.status(200).json({ reason });
}
