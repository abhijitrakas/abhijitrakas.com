// /llms.txt: a plain Markdown summary for AI agents (see llmstxt.org).
// Generated from src/data/site.ts, so it always matches the page.
import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Turn the same phrases the page links into Markdown links.
const linkify = (text: string) =>
  Object.entries(site.autolinks).reduce((out, [phrase, href]) => out.replace(phrase, `[${phrase}](${href})`), text);

export const GET: APIRoute = () => {
  const home = `${site.url}/`;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${linkify(site.bio)}`,
    '',
    `- Role: ${site.jobTitle} at [${site.company.name}](${site.company.url})`,
    `- Skills: ${site.skills.join(', ')}`,
    `- Website: ${home}`,
    '',
    '## Beyond work',
    '',
    ...site.about.map((item) => `- **${item.label}:** ${linkify(item.text)}`),
    '',
    '## Profiles and contact',
    '',
    ...site.links.map((link) =>
      link.href.startsWith('mailto:') ? `- [Email](${link.href}): ${link.handle}` : `- [${link.label}](${link.href})`,
    ),
  ];
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
