import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Archive, Trash2, Flag, MailOpen } from 'lucide-react';

export interface Email {
  id: string;
  sender: string;
  avatar: {
    type: 'initials' | 'image';
    value: string;
    color?: string;
  };
  subject: string;
  snippet: string;
  timestamp: string;
  isRead: boolean;
  isMeeting?: boolean;
  isExternal?: boolean;
  meetingDetails?: {
    time: string;
    conflicts: string;
  };
}

interface EmailItemProps {
  email: Email;
  isSelected: boolean;
  onClick: () => void;
}

const EmailItem: React.FC<EmailItemProps> = ({ email, isSelected, onClick }) => {
  const { sender, subject, snippet, timestamp, isRead, isMeeting, meetingDetails, avatar, isExternal } = email;

  return (
    <div
      onClick={onClick}
      className={cn(
        'group flex items-start gap-3 p-3 pr-4 border-b border-l-4 cursor-pointer hover:bg-secondary/50',
        isSelected
          ? 'bg-red-100 dark:bg-red-900/30 border-l-red-500'
          : isRead
          ? 'border-l-transparent'
          : 'border-l-primary',
        !isRead && 'font-semibold'
      )}
    >
      <div className="flex items-center gap-3 pt-1">
        <Checkbox id={`select-${email.id}`} />
        <Avatar className="h-10 w-10">
          {avatar.type === 'image' && <AvatarImage src={avatar.value} alt={sender} />}
          <AvatarFallback className={cn(avatar.color)}>{avatar.value}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-baseline">
          <p className={cn('truncate', !isRead ? 'text-primary dark:text-foreground' : 'text-foreground')}>{sender}</p>
          <span className={cn('text-xs shrink-0 ml-2', isSelected ? 'text-red-600 dark:text-red-300' : 'text-muted-foreground')}>{timestamp}</span>
        </div>
        <p className="truncate text-sm">{subject}</p>
        <p className={cn('truncate text-sm', isSelected ? 'text-red-800 dark:text-red-300/80' : 'text-muted-foreground')}>{snippet}</p>
        {isExternal && <p className="text-xs text-red-500 mt-1">CAUTION:- External Mail.</p>}
        {isMeeting && meetingDetails && (
          <div className="flex justify-between items-center mt-2 border-t pt-2">
            <div>
              <p className="text-sm text-muted-foreground">{meetingDetails.time}</p>
              <p className="text-xs text-muted-foreground">{meetingDetails.conflicts}</p>
            </div>
            <Button size="sm" className="bg-muted-foreground/20 hover:bg-muted-foreground/30 text-foreground">RSVP</Button>
          </div>
        )}
      </div>
       <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity space-x-1 pt-1">
          <Button variant="ghost" size="icon" className="h-8 w-8"><Archive className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8"><MailOpen className="h-4 w-4" /></Button>
        </div>
    </div>
  );
};

export default EmailItem;
