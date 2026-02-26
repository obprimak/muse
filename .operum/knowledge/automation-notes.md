# Automation Notes — Muse by Noran Shine

## Image Deletion Workflow (build when creating issue #12 / Supabase automation)

When a client's gallery reaches the 5-month mark, trigger the following:

### 1. Email to Client (via Resend)
- Sent at: 5 months after gallery delivery date
- Subject: "Your Muse gallery will be deleted in 30 days"
- Content: Warm, on-brand reminder that images will be permanently deleted in 30 days. Encourage any final orders. Provide gallery link. Offer to answer questions.
- Tone: Match brand voice — this should feel caring, not automated/corporate.

### 2. Email/Notification to Olga (studio owner)
- Sent at: same time as client email (5 months)
- Content: "Client [name]'s gallery is scheduled for permanent deletion on [date]. Their session was [date]. No action needed unless they request an extension."
- Also send a final confirmation notification when deletion actually occurs (at 6 months).

### 3. Deletion at 6 Months
- Automated deletion of all image files from storage (Supabase Storage or wherever hosted)
- Mark client record in database as `images_deleted: true` with timestamp
- Send final confirmation email to client: "Your gallery has been permanently deleted as promised."
- Send confirmation notification to Olga.

### Implementation Notes
- Deletion timeline stored per client in Supabase (field: `gallery_delivery_date`)
- Scheduled job (Supabase cron or Vercel cron) checks daily for galleries approaching 5/6 month mark
- Do NOT auto-delete if client has an open/pending order — check order status first

## Other Automation Reminders
- (Add more here as they come up during build planning)
