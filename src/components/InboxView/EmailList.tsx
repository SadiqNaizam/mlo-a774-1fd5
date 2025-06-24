import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUpDown, Filter, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import EmailItem, { Email } from './EmailItem';

const dummyEmails: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    avatar: { type: 'initials', value: 'CT' },
    subject: 'Recenter: A Modern Yoga...', 
    snippet: 'Join the meeting now Meeting ID: 221 ...',
    timestamp: '1:13 PM',
    isRead: false,
    isMeeting: true,
    isExternal: false,
    meetingDetails: { time: 'Thu 7/3/2025 12:00 PM', conflicts: 'No conflicts' }
  },
  {
    id: '2',
    sender: 'Figma',
    avatar: { type: 'initials', value: 'F', color: 'bg-pink-500' },
    subject: 'We\'ve updated our Terms of...', 
    snippet: 'CAUTION:- External Mail.',
    timestamp: '4:33 AM',
    isRead: false,
    isExternal: true
  },
  {
    id: '3',
    sender: 'KK',
    avatar: { type: 'image', value: 'https://i.pravatar.cc/150?u=kk' },
    subject: 'ACTION REQUIRED: Mee...', 
    snippet: 'New monthly mailer for client engage...',
    timestamp: 'Mon 7:24 PM',
    isRead: true
  },
  {
    id: '4',
    sender: 'Prasad Maladkar, Mia Abendan, +1 other',
    avatar: { type: 'initials', value: 'P', color: 'bg-purple-500' },
    subject: 'Ascendion Daily Digest',
    snippet: 'CAUTION:- External Mail.',
    timestamp: 'Mon 6:44 PM',
    isRead: true,
    isExternal: true
  },
  {
    id: '5',
    sender: 'C&D Culture Team',
    avatar: { type: 'initials', value: 'CT' },
    subject: 'Unboxing Inclusion & All...',
    snippet: 'Click here to join the meeting now...',
    timestamp: 'Mon 3:44 PM',
    isRead: true
  },
  {
    id: '6',
    sender: 'Frontdesk Hyderabad',
    avatar: { type: 'image', value: 'https://i.pravatar.cc/150?u=fh' },
    subject: 'Admin Update >> Tran...',
    snippet: 'Dear Ascenders, I hope this message fi...',
    timestamp: 'Mon 10:58 AM',
    isRead: true
  }
];

const emailGroups = [
    { title: 'Today', emails: dummyEmails.slice(0, 2) },
    { title: 'Yesterday', emails: dummyEmails.slice(2, 4) },
    { title: 'Last week', emails: dummyEmails.slice(4) },
]

interface EmailListProps {
  onSelectEmail: (email: Email) => void;
  selectedEmail: Email | null;
}

const EmailList: React.FC<EmailListProps> = ({ onSelectEmail, selectedEmail }) => {

  return (
    <div className="bg-background flex flex-col h-full">
      <div className="p-2 border-b">
        <div className="flex justify-between items-center">
          <Tabs defaultValue="focused" className="w-full">
            <TabsList>
              <TabsTrigger value="focused">Focused</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
            <Button variant="ghost" size="sm">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {emailGroups.map(group => (
            <React.Fragment key={group.title}>
              <div className='flex items-center text-sm font-semibold p-2 text-muted-foreground'>
                  <ChevronDown className='h-4 w-4 mr-1'/>
                  <h4>{group.title}</h4>
              </div>
              {group.emails.map(email => (
                <EmailItem
                  key={email.id}
                  email={email}
                  isSelected={selectedEmail?.id === email.id}
                  onClick={() => onSelectEmail(email)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmailList;
