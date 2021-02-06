---
title: Get in Touch
img_path: images/contact.jpg
form_id: contactForm
form_action: /success
form_fields:
  - input_type: text
    name: name
    label: Name
    default_value: Your name
    is_required: true
  - input_type: tel
    name: tel
    label: Mobile
    default_value: Your mobile number
    is_required: true
  - input_type: select
    name: subject
    label: Subject
    default_value: Please select
    options:
      - Visit Flat
      - Purchase Flat
  - input_type: textarea
    name: message
    label: Message
    default_value: Your message
  - input_type: checkbox
    name: consent
    label: >-
      I understand that this form is storing my submitted information so I can
      be contacted.
submit_label: Send Message
template: contact
---

To get in touch fill the form below.
