import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Search,
  Bell,
  Settings,
  HelpCircle,
  MessageSquare,
  Pencil,
  Trash2,
  Archive,
  Flag,
  Move,
  Reply,
  ReplyAll,
  Forward,
  Zap,
  BookOpen,
  Bookmark,
  Clock,
  Tag,
  Printer,
  Sun,
  Moon,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/ThemeProvider';

const TopHeader: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background border-b sticky top-0 z-10">
      <div className="h-16 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
            <div className='flex items-center gap-2'>
                <img src="/ascendion-logo.svg" alt="Ascendion Logo" className="h-6 w-6" />
                <h1 className="text-xl font-semibold">Outlook</h1>
            </div>
        </div>
        <div className="flex-1 max-w-md ml-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-10" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><HelpCircle className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://i.pravatar.cc/150?u=rp" alt="Raghuram Pathmanaban" />
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className='px-4 pb-2'>
        <div className='flex justify-between items-center'>
            <Tabs defaultValue="home">
              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="help">Help</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                <span>1/2</span>
                <Clock className='h-3 w-3' />
                <span>CRM - collab call</span>
                <span>Tomorrow 11:00 AM</span>
            </div>
        </div>
      </div>

      <div className='px-4 pb-2 border-b flex items-center gap-2 overflow-x-auto'>
            <Button variant='destructive' size='sm'> <Pencil className='h-4 w-4 mr-2'/> New mail</Button>
            <Button variant='ghost' size='sm'> <Trash2 className='h-4 w-4 mr-2'/> Delete</Button>
            <Button variant='ghost' size='sm'> <Archive className='h-4 w-4 mr-2'/> Archive</Button>
            <Button variant='ghost' size='sm'> <Flag className='h-4 w-4 mr-2'/> Report</Button>
            <Button variant='ghost' size='sm'> <Move className='h-4 w-4 mr-2'/> Move to</Button>
            <Separator orientation='vertical' className='h-6' />
            <Button variant='ghost' size='sm'> <Reply className='h-4 w-4 mr-2'/> Reply</Button>
            <Button variant='ghost' size='sm'> <ReplyAll className='h-4 w-4 mr-2'/> Reply all</Button>
            <Button variant='ghost' size='sm'> <Forward className='h-4 w-4 mr-2'/> Forward</Button>
            <Separator orientation='vertical' className='h-6' />
            <Button variant='ghost' size='sm'> <Zap className='h-4 w-4 mr-2'/> Quick steps</Button>
            <Button variant='ghost' size='sm'> <BookOpen className='h-4 w-4 mr-2'/> Read / Unread</Button>
            <Button variant='ghost' size='sm'> <Bookmark className='h-4 w-4 mr-2'/> </Button>
            <Button variant='ghost' size='sm'> <Tag className='h-4 w-4 mr-2'/> </Button>
            <Button variant='ghost' size='sm'> <Clock className='h-4 w-4 mr-2'/> </Button>
            <Button variant='ghost' size='sm'> <Printer className='h-4 w-4 mr-2'/> </Button>
      </div>

    </header>
  );
};

export default TopHeader;