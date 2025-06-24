import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Pencil,
  Inbox,
  Send,
  FileText,
  Trash2,
  Archive,
  FileWarning,
  FileClock,
  Rss,
  FolderSearch,
  Users,
  ChevronDown,
  Mail,
  Calendar,
  UserSquare,
  CheckSquare,
  Briefcase,
  Shapes
} from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ElementType;
  count?: number;
  isActive?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: 'Favorites',
    items: [
      { name: 'Inbox', icon: Inbox, count: 2, isActive: true },
      { name: 'Sent Items', icon: Send },
      { name: 'Drafts', icon: FileText, count: 4 },
      { name: 'Deleted Items', icon: Trash2, count: 28 },
    ],
  },
  {
    title: 'raghuram.pathmanaba...',
    items: [
      { name: 'Inbox', icon: Inbox, count: 2, isActive: true },
      { name: 'Drafts', icon: FileText, count: 4 },
      { name: 'Sent Items', icon: Send },
      { name: 'Deleted Items', icon: Trash2, count: 28 },
      { name: 'Junk Email', icon: FileWarning },
      { name: 'Notes', icon: Pencil, count: 2 },
      { name: 'Archive', icon: Archive },
      { name: 'Conversation History', icon: FileClock },
    ],
  },
];

const otherFolders: NavItem[] = [
    { name: 'RSS Feeds', icon: Rss },
    { name: 'Search Folders', icon: FolderSearch },
]

const appIcons = [
  { icon: Mail, label: 'Mail', isActive: true },
  { icon: Calendar, label: 'Calendar' },
  { icon: UserSquare, label: 'Contacts' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Briefcase, label: 'Briefcase' },
  { icon: Shapes, label: 'Apps' },
];

const SidebarNav: React.FC = () => {
  return (
    <div className="flex h-full bg-secondary/50 dark:bg-card">
      <div className="flex flex-col items-center space-y-2 bg-secondary/30 dark:bg-background/50 p-2 border-r">
        {appIcons.map((item, index) => (
            <Button key={index} variant={item.isActive ? 'secondary' : 'ghost'} size="icon" className={cn('h-10 w-10', item.isActive && 'text-primary')}>
              <item.icon className="h-6 w-6" />
            </Button>
        ))}
      </div>
      <div className="w-60 flex flex-col bg-secondary/30 dark:bg-background/50 border-r">
        <div className="p-2">
          <Button className="w-full justify-start bg-pink-600 hover:bg-pink-700 text-white">
            <Pencil className="mr-2 h-4 w-4" />
            New mail
          </Button>
        </div>
        <ScrollArea className="flex-1 px-2">
          <Accordion type="multiple" defaultValue={['item-0', 'item-1']} className="w-full">
            {navSections.map((section, index) => (
              <AccordionItem key={section.title} value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="py-2 text-xs hover:no-underline font-semibold text-muted-foreground hover:bg-secondary rounded-md px-2">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="pt-1 space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={cn(
                        'w-full justify-start font-normal h-8',
                        item.isActive && 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span className="flex-1 text-left">{item.name}</span>
                      {item.count && (
                        <Badge variant="secondary" className={cn('text-xs', item.isActive ? 'bg-red-200 text-red-700 dark:bg-red-900/70 dark:text-red-300' : '')}>{item.count}</Badge>
                      )}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div className="space-y-1 mt-2">
                {otherFolders.map((item) => (
                    <Button key={item.name} variant="ghost" className="w-full justify-start font-normal h-8">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                    </Button>
                ))}
                 <Button variant="ghost" className="w-full justify-start font-normal h-8">
                    <Users className="mr-2 h-4 w-4" />
                    Go to Groups
                </Button>
            </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SidebarNav;
