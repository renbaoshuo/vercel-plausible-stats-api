import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (request: VercelRequest, response: VercelResponse) => {
    const TOKEN = process.env.PLAUSIBLE_TOKEN || '';
    const API = new URL('/api/v1/stats/aggregate', process.env.PLAUSIBLE_DOMAIN || 'https://plausible.io').toString();
    const SITE = request.query.site || '';

    if (!TOKEN) {
        response
            .status(401)
            .json({ error: 'Missing token, see: https://github.com/renbaoshuo/vercel-plausible-stats-api' });
        return;
    }

    if (!SITE) {
        response.status(400).json({ error: 'Missing site param' });
        return;
    }

    const params = new URLSearchParams();

    params.set('site_id', SITE as string);
    params.set('period', 'custom');
    params.set('date', `1970-01-01,${new Date(new Date().getTime() + 60 * 60 * 24).toISOString().slice(0, 10)}`);
    params.set('metrics', 'visitors,pageviews');

    fetch(`${API}?${params.toString()}`, {
        headers: {
            'User-Agent': 'VercelPlausibleStatsAPI/0.0.1 ( https://github.com/renbaoshuo/vercel-plausible-stats-api )',
            Authorization: `Bearer ${TOKEN}`,
        },
    })
        .then((res) => res.json())
        .then((data) => ({ pageviews: data.results.pageviews.value, visitors: data.results.visitors.value }))
        .then((data) => response.json(data))
        .catch((e) => response.status(500).json({ error: e.message }));
};
