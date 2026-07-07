# NexusM&A Analytics Setup

## Current status

The site has a privacy-safe analytics event helper at `components/analytics.jsx`.
It pushes events to `window.dataLayer` without sending form-entered personal information such as name, email, phone, company, or message.

Google Tag Manager is installed in the site HTML.

- GTM container ID: `GTM-PBWXLDXG`
- Site cache version: `20260707c`

GA4 tracking becomes active after a GA4 configuration tag and event tags are created and published inside GTM.

## Recommended setup

1. Create a GA4 property and web data stream for `https://sasa-eru.com/`.
2. In GTM, create a GA4 configuration tag.
3. In GTM, create custom event triggers for the events below.
4. Publish the GTM container.
5. Confirm events in GA4 DebugView / Realtime.

## DataLayer events

- `nexus_page_view`
  - SPA route/page view.
- `nexus_cta_click`
  - CTA click.
  - Parameters: `cta_label`, `cta_location`, `destination`.
- `nexus_pdf_click`
  - PDF click.
  - Parameters: `pdf_label`, `pdf_url`.
- `diagnosis_start`
  - 90-day diagnosis started.
- `diagnosis_restart`
  - 90-day diagnosis restarted.
- `diagnosis_complete`
  - 90-day diagnosis completed.
  - Parameters: `diagnosis_name`, `score`, `result_label`, `weakest_category`.
- `contact_form_view`
  - Contact form viewed.
  - Parameters: `source`, `prefilled`.
- `contact_form_submit_success`
  - Web3Forms submission succeeded.
  - Parameters: `role`, `source`, `inquiry_type`, `consultation_method`, `concern_count`.

## Privacy notes

Do not send the following values to GA4/GTM:

- Name
- Email
- Phone number
- Company name
- Position
- Free-text message / consultation details

The helper filters these keys by default.

## GTM custom events to mark as conversions in GA4

Recommended conversions:

- `contact_form_submit_success`
- `diagnosis_complete`
- `nexus_pdf_click` for important PDFs

Recommended micro conversions:

- `diagnosis_start`
- `contact_form_view`
- `nexus_cta_click`
