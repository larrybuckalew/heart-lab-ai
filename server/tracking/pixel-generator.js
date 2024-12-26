const crypto = require('crypto');

class PixelGenerator {
    generateTrackingPixel(emailId) {
        const trackingId = this.generateTrackingId(emailId);
        return `<img src="/track/pixel/${trackingId}" width="1" height="1" />}`;
    }

    generateTrackingLinks(html, emailId) {
        const linkRegex = /<a([^>]*)href=["']([^"']*)["']/g;
        return html.replace(linkRegex, (match, attrs, url) => {
            const trackingId = this.generateTrackingId(emailId);
            return `<a${attrs}href="/track/link/${trackingId}?url=${encodeURIComponent(url)}"`;
        });
    }

    generateTrackingId(emailId) {
        return crypto
            .createHash('sha256')
            .update(`${emailId}_${Date.now()}`)
            .digest('hex');
    }
}

module.exports = new PixelGenerator();