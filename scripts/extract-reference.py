"""Extract the supplied archive into a local visual-comparison baseline."""
from email import policy
from email.parser import BytesParser
from pathlib import Path

source = Path(__file__).resolve().parents[1] / 'reference/nexct_09242026.mhtml'
output = Path('/tmp/nexct-reference')
output.mkdir(parents=True, exist_ok=True)
archive = BytesParser(policy=policy.default).parsebytes(source.read_bytes())
for part in archive.walk():
    content_type = part.get_content_type()
    payload = part.get_payload(decode=True)
    if content_type == 'text/html':
        html = payload.decode()
    elif content_type == 'text/css':
        (output / 'styles.css').write_bytes(payload)
    elif content_type == 'image/png':
        (output / 'hero.png').write_bytes(payload)
base = 'https://nexct-collaboration.christine-le-5582.chatgpt.site/'
html = html.replace(base + '#', '#')
html = html.replace(base + 'assets/styles.css', 'styles.css')
html = html.replace(base + 'assets/nexct-collaboration-hero.png', 'hero.png')
(output / 'index.html').write_text(html)
