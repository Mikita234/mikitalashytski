# Conversion tracking

The site sends lightweight conversion events through `trackEvent`.

## Analytics target

- Plausible: `window.plausible(event, { props })`
- Microsoft Clarity: `Clarity.event(event)` plus session recordings and heatmaps
- Optional GTM/GA bridge: `window.dataLayer.push({ event, ...props })`
- Development: events are logged to the browser console

No form message, name, email, phone or free-text content is sent as analytics props.

## Events

- `Order Click`: user clicks an `/order` CTA
- `Order Submit`: order form submit attempt
- `Order Success`: order form was accepted by `/api/contact`
- `Order Error`: contact endpoint or network failed
- `Order Mailto Fallback`: form fell back to `mailto:`
- `Telegram Click`: user clicks Telegram
- `Email Click`: user clicks email link
- `Market Page Click`: user opens an EU/PL/UA/RB market landing page
- `Service Click`: user opens a service page
- `Case Click`: user opens a case page
- `Guide Click`: user opens a guide page
- Existing component-specific events remain active, for example `CTA Click`

## Common props

- `from`: current path
- `href`: target path or external destination
- `label`: visible link text, trimmed
- `service`, `budget`, `timeline`: selected order form values where applicable
- `reason`: error reason for failed order submissions

## Setup

Set `NEXT_PUBLIC_CLARITY_PROJECT_ID` in production to enable Microsoft Clarity.
Get the project ID in Clarity: Project settings -> Overview.

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in production to enable Plausible.
It can stay empty if Clarity is the only analytics tool.

If a tag manager is added later, define `window.dataLayer = window.dataLayer || []`
before user interaction; events will be pushed automatically.
