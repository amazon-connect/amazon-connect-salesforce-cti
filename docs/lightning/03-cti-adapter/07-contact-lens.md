---
id: 07-contact-lens
title: Contact Lens
---

CTI Adapter now gives you access to your post-call Contact Lens data on your Salesforce instance. To configure this feature, you must have installed and configure the AWS Serverless application.

Three or four minutes after the call, a new Contact Channel Analytics record is created with the recording url with only the call recording. In another three minutes, this record is updated with Contact Lens recording, transcript and other metadata.

<img src="/img/lightning/cca-contact-lens-01.png" />

The new record is also associated automatically with a Case and Contact through their Amazon Connect contact id. This means that you will be able to configure your case record page with a related list that lists all the calls related to a case.

### Configuring Related Transcripts List for Case Object

1. Go to the "Setup" section.

2. Search for "Object Manager" in Quick Find.

3. Go into "AC Contact Channel Analytics" object.

4. Click on "Fields & Relationships"

5. Select the "Case" field.

6. Click on "Set Field-Level Security" button.

7. In the "Field-Level Security for Profile" panel, select "Visible" for all the profiles where this field should appear.

8. Click "Save"

9. Click "View Field Accessibility" button.

10. Select "Case" field from "Field accessibility for Field" dropdown.

11. Select the profile for which you want to enable this field.

12. Mark "Field-Level Security" of the field as "Visible" and save.

13. Go to a Case record page.

14. Click on "Edit Page" under the gear button on upper right corner of the page.

15. Select "Related List - Single" from left sidebar, and drop it into "Related" section.

16. Click on the item you just droppped to focus on it.

17. In the right sidebar, select "Case Layout (previewed)"

18. Click on "Related Lists" and find "Transcripts" field in the panel.

<img src="/img/lightning/cca-related-list-05.png" />

19. Drag "Transcripts" into the "Related Lists" section on the body of the page.

20. Click "Save" and return to the page editor.

21. Focus on the item you droppped in step 15 again.

22. In the right sidebar, under the "Related List" dropdown, find and select "Transcripts" field.

23. Click "Save" to save the page layout.

24. Click "Activation..."

25. Go into "App Default." Click on "Assign as App Default."

<img src="/img/lightning/cca-related-list-10.png" />

26. Select the apps you'd like the related list to appear. Click "Next" twice, and then finally click "Save."

Now your related transcripts should appear on the Case record page.

Whenever you update the Amazon Connect contact id of this case, the related list will be updated to associate the transcripts associated with your contact.

Follow the same steps above for Contact.
