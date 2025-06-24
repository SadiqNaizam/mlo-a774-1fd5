import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Reply,
  ReplyAll,
  Forward,
  AlertTriangle,
  MoreHorizontal,
  Smile,
  Paperclip,
  Trash2,
  Archive,
  Sun,
  CheckCircle
} from 'lucide-react';
import { type Email } from './EmailItem';

interface EmailPreviewProps {
  email: Email | null;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ email }) => {
  if (!email) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>Select an item to read</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full bg-card">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-semibold">{email.subject.replace('...', '')}</h1>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm"><Reply className="mr-2 h-4 w-4"/>Reply</Button>
                <Button variant="ghost" size="sm"><ReplyAll className="mr-2 h-4 w-4"/>Reply all</Button>
                <Button variant="ghost" size="sm"><Forward className="mr-2 h-4 w-4"/>Forward</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4"/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem><Archive className="mr-2 h-4 w-4"/>Archive</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4"/>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

        <Separator/>

        <div className="flex items-start gap-4 py-6">
          <Avatar className="h-12 w-12">
             {email.avatar.type === 'image' 
                ? <AvatarImage src={email.avatar.value} alt={email.sender} /> 
                : <AvatarFallback className={email.avatar.color}>{email.avatar.value}</AvatarFallback>}
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold text-lg">{email.sender}</p>
                    <p className="text-sm text-muted-foreground">&lt;announcements@figma.com&gt;</p>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                    <span>Tue 6/24/2025 4:33 AM</span>
                    <Button variant="ghost" size="icon"><Sun className='h-4 w-4'/></Button>
                    <Button variant="ghost" size="icon"><Smile className='h-4 w-4'/></Button>
                    <Button variant="ghost" size="icon"><Reply className='h-4 w-4'/></Button>
                </div>
            </div>
            <div className='text-sm text-muted-foreground flex items-center gap-1 mt-1'>
                To: <CheckCircle className='h-4 w-4 text-green-500'/> <span>Raghuram Pathmanaban</span>
            </div>
          </div>
        </div>

        <Alert variant="default" className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-300">
            Some content in this message has been blocked because the sender isn't in your Safe senders list.
            <div className='mt-2'>
                <Button variant='outline' size='sm' className='mr-2'>Trust sender</Button>
                <Button variant='outline' size='sm'>Show blocked content</Button>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="mb-6 bg-black text-white border-none">
          <AlertDescription className='font-mono tracking-wider'>
            CAUTION:- External Mail.
          </AlertDescription>
        </Alert>

        <div className="prose dark:prose-invert max-w-none text-foreground">
          <img src="/figma-logo.svg" alt="Figma Logo" className="h-8 mb-6" />
          <p className="text-lg">Hi there,</p>
          <p>We're reaching out to let you know we're updating <strong>Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.</p>
          <p>You can currently view both the existing and new Terms of Service <a href="#">here</a>, and we encourage you to do so.</p>
          <p>These updated Terms of Service go into effect on <strong>July 29, 2025</strong> - by keeping your Figma account after that date you agree to these updated terms.</p>
          <p>Thanks,</p>
          <p>The Figma Team</p>
        </div>

      </div>
    </ScrollArea>
  );
};

export default EmailPreview;
