/* ==========================================================================
   NEWS DATA + SHARED HELPERS
   Used by pages/news.html and pages/news-detail.html.
   Newest first. Images are relative to the site root.
   Optional fields: date (YYYY-MM-DD), time, location, content (array of paragraphs).
   When Supabase is connected, replace window.NEWS with a fetch from the news table.
   ========================================================================== */
window.NEWS = [
  {
    id: 1, type: 'News',
    title: 'Youth leaders convene for a community peace dialogue',
    summary: 'Young people and local leaders came together to discuss peace and cooperation in their communities.',
    image: 'assets/images/NewsandEvents/DSC07074.jpg',
    date: '', location: '',
    content: [
      'Young people and local leaders came together to discuss peace and cooperation in their communities.'
      /* Add more paragraphs here, one string per paragraph. */
    ]
  },
  {
    id: 2, type: 'News',
    title: 'Tree planting drive supports local climate action',
    summary: 'Volunteers planted trees together with the Department of Climate Change to restore local land.',
    image: 'assets/images/NewsandEvents/DSC07107.jpg',
    date: '', location: '',
    content: [
      'Volunteers planted trees together with the Department of Climate Change to restore local land.'
    ]
  },
  {
    id: 3, type: 'Event',
    title: 'Youth leadership workshop',
    summary: 'A hands-on training on leadership, civic participation and community projects.',
    image: 'assets/images/NewsandEvents/DSC07167.jpg',
    date: '', time: '', location: 'Lilongwe, Malawi',
    content: [
      'A hands-on training on leadership, civic participation and community projects.'
    ]
  }
];

window.esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

window.fmtDate = d => {
  if (!d) return '';
  const x = new Date(d + 'T00:00:00');
  return isNaN(x) ? '' : x.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

/* Card markup (same look as the home page cards). Pages live in /pages/. */
window.renderNewsCard = n => `
  <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
    <article class="news-card">
      <a href="news-detail.html?id=${encodeURIComponent(n.id)}" class="news-card-link">
        <img class="news-card-img" src="../${esc(n.image)}" alt="${esc(n.title)}" loading="lazy">
        <div class="news-card-body">
          <span class="news-tag">${esc(n.type)}</span>
          <div class="news-card-content">
            <h3 class="news-card-title">${esc(n.title)}</h3>
            <p class="news-card-text">${esc(n.summary)}</p>
            ${n.type === 'Event' && n.location ? `<span class="news-meta"><i class='bx bx-map'></i> ${esc(n.location)}</span>` : ''}
            <span class="news-more">${n.type === 'Event' ? 'Learn more' : 'Read more'}</span>
          </div>
        </div>
      </a>
    </article>
  </div>`;