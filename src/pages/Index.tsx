import React, { useState } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import EmailList from '../components/InboxView/EmailList';
import EmailPreview from '../components/InboxView/EmailPreview';
import { type Email } from '../components/InboxView/EmailItem';

/**
 * The main index page for the Email Client application.
 * This page assembles the primary inbox view, which consists of an email list and a preview pane.
 * It manages the state for the selected email and passes data down to the respective components,
 * creating the classic three-pane email client layout (Sidebar, Email List, Email Preview).
 */
const IndexPage: React.FC = () => {
  // State to track the currently selected email. Initialized to null.
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  /**
   * Handles the selection of an email from the list.
   * This function is passed as a prop to the EmailList component.
   * @param email The email object that was selected.
   */
  const handleSelectEmail = (email: Email) => {
    setSelectedEmail(email);
  };

  return (
    <MainAppLayout>
      <div className="grid h-full grid-cols-[450px_1fr]">
        {/* 
          The list of emails. It receives:
          - onSelectEmail: A callback to update the page's state when an email is clicked.
          - selectedEmail: The currently selected email to apply highlighting.
        */}
        <EmailList
          onSelectEmail={handleSelectEmail}
          selectedEmail={selectedEmail}
        />

        {/* 
          The preview pane for the selected email. It is separated by a border.
          It receives:
          - email: The selected email object to display, or null if no email is selected.
        */}
        <div className="border-l">
          <EmailPreview email={selectedEmail} />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
