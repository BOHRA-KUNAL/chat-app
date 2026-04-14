export function createWelcomeEmailTemplate(name, email) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to ChatFlow</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background-color: #F4F2EE;
      font-family: 'DM Sans', sans-serif;
      color: #1A1A1A;
      padding: 40px 16px;
    }

    .email-wrapper {
      max-width: 580px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .header {
      background-color: #0F1F3D;
      padding: 20px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-icon {
      width: 36px;
      height: 36px;
      background-color: #C9A84C;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 600;
      color: #0F1F3D;
    }

    .brand-name {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .header-tag {
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #C9A84C;
      font-weight: 400;
    }

    /* ── Hero ── */
    .hero {
      background-color: #FFFFFF;
      padding: 44px 32px 36px;
      border-left: 3px solid #C9A84C;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #C9A84C;
      margin-bottom: 14px;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 32px;
      font-weight: 600;
      color: #0F1F3D;
      line-height: 1.25;
      margin-bottom: 18px;
    }

    .hero-title em {
      font-style: normal;
      color: #C9A84C;
    }

    .hero-body {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.8;
      color: #555555;
      margin-bottom: 28px;
      max-width: 460px;
    }

    /* ── Chat preview ── */
    .chat-preview {
      background-color: #F4F2EE;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 28px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .msg {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }

    .msg.right {
      flex-direction: row-reverse;
    }

    .avatar {
      width: 30px;
      height: 30px;
      min-width: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 500;
    }

    .av-blue { background-color: #E6F1FB; color: #0C447C; }
    .av-gold { background-color: #FAEEDA; color: #633806; }

    .bubble-wrap {
      display: flex;
      flex-direction: column;
    }

    .msg.right .bubble-wrap {
      align-items: flex-end;
    }

    .bubble {
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13px;
      line-height: 1.5;
      max-width: 280px;
    }

    .bubble-in {
      background-color: #FFFFFF;
      color: #1A1A1A;
      border: 1px solid #E8E4DC;
      border-bottom-left-radius: 4px;
    }

    .bubble-out {
      background-color: #0F1F3D;
      color: #FFFFFF;
      border-bottom-right-radius: 4px;
    }

    .msg-meta {
      font-size: 10px;
      color: #AAAAAA;
      margin-top: 4px;
      padding: 0 2px;
    }

    .typing-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #1D9E75;
      margin-right: 4px;
      vertical-align: middle;
    }

    /* ── CTA ── */
    .cta-button {
      display: inline-block;
      background-color: #0F1F3D;
      color: #FFFFFF;
      text-decoration: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 32px;
      border-radius: 6px;
    }

    /* ── Divider ── */
    .divider {
      background-color: #FFFFFF;
      padding: 0 32px;
    }

    .divider-line {
      height: 1px;
      background-color: #EEEBE3;
    }

    /* ── Features ── */
    .features {
      background-color: #FFFFFF;
      padding: 28px 32px 32px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #AAAAAA;
      margin-bottom: 20px;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .feat {
      background-color: #F7F5F0;
      border-radius: 8px;
      padding: 16px 14px;
    }

    .feat-icon {
      width: 30px;
      height: 30px;
      border-radius: 6px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fi-blue  { background-color: #E6F1FB; }
    .fi-teal  { background-color: #E1F5EE; }
    .fi-amber { background-color: #FAEEDA; }

    .feat-title {
      font-size: 12px;
      font-weight: 500;
      color: #0F1F3D;
      margin-bottom: 4px;
    }

    .feat-desc {
      font-size: 11px;
      font-weight: 300;
      color: #777777;
      line-height: 1.55;
    }

    /* ── Getting started steps ── */
    .steps {
      background-color: #FFFFFF;
      padding: 0 32px 32px;
    }

    .step-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .step-num {
      width: 28px;
      height: 28px;
      min-width: 28px;
      border: 1.5px solid #0F1F3D;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      color: #0F1F3D;
      margin-top: 1px;
    }

    .step-title {
      font-size: 13px;
      font-weight: 500;
      color: #0F1F3D;
      margin-bottom: 3px;
    }

    .step-desc {
      font-size: 12px;
      font-weight: 300;
      color: #777777;
      line-height: 1.6;
    }

    /* ── Contact bar ── */
    .contact-bar {
      background-color: #0F1F3D;
      padding: 24px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .ct-label {
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #C9A84C;
      margin-bottom: 6px;
    }

    .ct-name {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      color: #FFFFFF;
      margin-bottom: 3px;
    }

    .ct-role {
      font-size: 12px;
      color: #8A9BB5;
      font-weight: 300;
    }

    .ct-email {
      font-size: 12px;
      font-weight: 500;
      color: #C9A84C;
      text-decoration: none;
      border-bottom: 1px solid rgba(201, 168, 76, 0.35);
      padding-bottom: 2px;
      white-space: nowrap;
    }

    /* ── Footer ── */
    .footer {
      background-color: #F4F2EE;
      padding: 28px 32px;
      text-align: center;
    }

    .footer-social {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 16px;
    }

    .social-link {
      width: 26px;
      height: 26px;
      border: 1px solid #CCCCCC;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 500;
      color: #888888;
      text-decoration: none;
    }

    .footer p {
      font-size: 11px;
      font-weight: 300;
      color: #AAAAAA;
      line-height: 1.9;
    }

    .footer a {
      color: #888888;
      text-decoration: none;
      border-bottom: 1px solid #DDDDDD;
    }

    /* ── Responsive ── */
    @media (max-width: 480px) {
      .header, .hero, .features, .steps, .contact-bar, .footer, .divider {
        padding-left: 20px;
        padding-right: 20px;
      }
      .hero-title { font-size: 24px; }
      .feature-grid { grid-template-columns: 1fr; }
      .contact-bar { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>

<div class="email-wrapper">

  <!-- Header -->
  <div class="header">
    <div class="brand">
      <div class="brand-icon">C</div>
      <div class="brand-name">ChatFlow</div>
    </div>
    <div class="header-tag">Welcome ${name}</div>
  </div>

  <!-- Hero -->
  <div class="hero">
    <div class="eyebrow">Your account is ready</div>
    <h1 class="hero-title">Start your first<br/><em>conversation.</em></h1>
    <p class="hero-body">
      Your ChatFlow workspace is live. Connect with your team, share files, and stay organised — all in one place. Here's a taste of what's waiting for you.
    </p>

    <!-- Chat bubble preview -->
    <div class="chat-preview">

      <div class="msg">
        <div class="avatar av-blue">SM</div>
        <div class="bubble-wrap">
          <div class="bubble bubble-in">Hey! Welcome to the team 👋</div>
          <div class="msg-meta">Sarah · 9:41 am</div>
        </div>
      </div>

      <div class="msg right">
        <div class="avatar av-gold">You</div>
        <div class="bubble-wrap">
          <div class="bubble bubble-out">Thanks! Excited to be here.</div>
          <div class="msg-meta">9:42 am &nbsp;&#10003;&#10003;</div>
        </div>
      </div>

      <div class="msg">
        <div class="avatar av-blue">SM</div>
        <div class="bubble-wrap">
          <div class="bubble bubble-in">
            <span class="typing-dot"></span>Sarah is typing...
          </div>
        </div>
      </div>

    </div>

    <a href="https://chatflow.io/login" class="cta-button">Open ChatFlow</a>
  </div>

  <!-- Divider -->
  <div class="divider"><div class="divider-line"></div></div>

  <!-- Features -->
  <div class="features">
    <div class="section-label">Everything you need</div>
    <div class="feature-grid">

      <div class="feat">
        <div class="feat-icon fi-blue">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="14" height="10" rx="2" stroke="#185FA5" stroke-width="1.5"/>
            <path d="M5 14h6" stroke="#185FA5" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="feat-title">Channels</div>
        <div class="feat-desc">Organise by team, project, or topic</div>
      </div>

      <div class="feat">
        <div class="feat-icon fi-teal">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="5" r="3" stroke="#0F6E56" stroke-width="1.5"/>
            <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#0F6E56" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="feat-title">Direct messages</div>
        <div class="feat-desc">1-on-1 and group threads</div>
      </div>

      <div class="feat">
        <div class="feat-icon fi-amber">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" stroke="#854F0B" stroke-width="1.5"/>
            <path d="M8 4v4l2.5 1.5" stroke="#854F0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="feat-title">Message history</div>
        <div class="feat-desc">Searchable, forever archived</div>
      </div>

    </div>
  </div>

  <!-- Divider -->
  <div class="divider"><div class="divider-line"></div></div>

  <!-- Getting started steps -->
  <div class="steps">
    <div class="section-label" style="padding-top: 28px;">Getting started</div>
    <div class="step-list">

      <div class="step">
        <div class="step-num">1</div>
        <div>
          <div class="step-title">Complete your profile</div>
          <div class="step-desc">Add a photo and display name so your teammates can recognise you instantly.</div>
        </div>
      </div>

      <div class="step">
        <div class="step-num">2</div>
        <div>
          <div class="step-title">Create or join a channel</div>
          <div class="step-desc">Browse existing channels or create a new one for your project. It takes seconds.</div>
        </div>
      </div>

      <div class="step">
        <div class="step-num">3</div>
        <div>
          <div class="step-title">Invite your team</div>
          <div class="step-desc">Send invites by email and get your whole team connected in one workspace.</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Contact bar -->
  <div class="contact-bar">
    <div>
      <div class="ct-label">Your success manager</div>
      <div class="ct-name">Sarah Mitchell</div>
      <div class="ct-role">Senior Client Success · ChatFlow</div>
    </div>
    <a href="mailto:sarah@chatflow.io" class="ct-email">sarah@chatflow.io</a>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-social">
      <a class="social-link" href="#">in</a>
      <a class="social-link" href="#">tw</a>
      <a class="social-link" href="#">yt</a>
    </div>
    <p>
      &copy; 2026 ChatFlow Inc. All rights reserved.<br/>
      123 Business Avenue, Suite 400, New York, NY 10001<br/>
      <a href="#">Unsubscribe</a> &nbsp;&middot;&nbsp; <a href="#">Privacy Policy</a> &nbsp;&middot;&nbsp; <a href="#">Terms of Use</a>
    </p>
  </div>

</div>
</body>
</html>
    `;
}
