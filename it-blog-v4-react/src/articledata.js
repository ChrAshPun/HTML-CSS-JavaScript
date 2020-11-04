import winexplorertarget from "./png/winexplorertarget.png";
import fileexplorerthispc from "./png/fileexplorerthispc.png";
import smb1error from "./png/smb1error.png";
import mapdrives from "./png/mapdrives.png";
import printbyip from "./png/printbyip.png";
import clearspooler from "./png/clearspooler.png";
import hieroglyphics from "./png/hieroglyphics.png";
import setoffolders from "./png/setoffolders.png";
import librarynotregistered from "./png/librarynotregistered.png";
import instantsearch from "./png/instantsearch.png";
import protectedview2 from "./png/protectedview2.png";
import unlockadaccount from "./png/unlockadaccount.png";
import mailboxquota from "./png/mailboxquota.png";
import retention1 from "./png/retention1.png";
import retention2 from "./png/retention2.png";
import retention3 from "./png/retention3.png";

const articleData = [
  // OPERATING SYSTEMS articles
  {
    id: 1,
    category: "OPERATING SYSTEMS",
    title: "My drives are missing on Windows Explorer",
    subtitle: "Change the Windows Explorer target path",
    description:
      "If you are using Windows 7 and Windows Explorer is not showing all of your folders and drives, you may need to fix the target path.",
    instructions: [
      "Open the Windows Explorer Properties",
      "Select the Shortcut tab",
      "Set the Target path to: %windir%explorer.exe"
    ],
    img: winexplorertarget,
    alt: "winexplorertarget"
  },
  {
    id: 2,
    category: "OPERATING SYSTEMS",
    title:
      'How can I set File Explorer to open to "This PC" instead of "Quick Access?',
    subtitle: "Edit Folder Options",
    description: "Open File Explorer and edit the General settings",
    instructions: [
      "Open File Explorer",
      "Select File at the top left",
      "Select Change folder and search options",
      "Set Open File Explorer to: This PC"
    ],
    img: fileexplorerthispc,
    alt: "fileexplorerthispc"
  },
  {
    id: 3,
    category: "OPERATING SYSTEMS",
    title:
      "Error: \"You can't connect to the file share because it's not secure.\"",
    subtitle: "Enable SMBv1",
    description:
      "SMBv1 is an old and insecure network file sharing protocol that is disabled on Windows 10 by default.",
    instructions: [
      "Open Control Panel",
      "select Programs and Features",
      "Check SMB 1.0 / CIFS File Sharing Support"
    ],
    img: smb1error,
    alt: "smb1error"
  },
  {
    id: 4,
    category: "OPERATING SYSTEMS",
    title: "I need access to a network drive",
    subtitleOne: "Step 1. Set the Security permissions",
    descriptionOne:
      "If a user needs access to a specific folder, you may need to configure the Security Properties to give the user access to the contents in that folder before mapping the network drive.",
    instructionsOne: [
      "Right - click the folder the user needs access to",
      "Select Properties and go to the Security tab",
      "click Edit...and add the user / group",
      "Check all appropriate Allow checkboxes to grant the user / group access to the folder"
    ],
    subtitleTwo: "Step 2. Map the network drive using File Explorer",
    descriptionTwo:
      "After configuring the Security permissions, manually map the network drive on the user's computer.",
    instructionsTwo: [
      "Open File Explorer",
      "right - click This PC and select Map network drive…",
      "In the Folder box type the folder path like this: \\servershare"
    ],
    notes: [
      "Make sure you can ping the server",
      "Use the IP address of the server if the hostname isn’t working"
    ],
    img: mapdrives,
    alt: "mapdrives"
  },
  // PRINTERS articles
  {
    id: 5,
    category: "PRINTERS",
    title: "How to add a Printer by IP Address",
    subtitleOne: "Step 1. Add the printer from the Control Panel",
    descriptionOne:
      "Before you can add the printer to the client's desktop, make sure you know the IPv4 address of the printer or print a configuration page. If you are helping the client remotely, assist them on how to print a configuration page from the printer.",
    instructionsOne: [
      "Open Control Panel and select Devices and Printers",
      "click Add a printer",
      'select "The printer that I want isn’t listed"',
      "select Add a printer using a TCP / IP address or hostname",
      "Enter the IPv4 address and select the correct driver on the next page"
    ],
    subtitleTwo: "Step 2. Print a test page",
    descriptionTwo:
      "It's best practice to make sure the printer is printing correctly before ending your session with the client.",
    instructionsTwo: [
      "Open Control Panel and select Devices and Printers",
      "Right - click the printer and select Printer Properties",
      "Select Print Test Page"
    ],
    img: printbyip,
    alt: "printbyip"
  },
  {
    id: 6,
    category: "PRINTERS",
    title: '"My printer is randomly printing pages"',
    subtitle: "Clear the Print Spooler",
    description:
      "If a printer is randomly printing pages on it's own, try clearing the Print Spooler.",
    instructions: [
      "Press Winkey + r and type services.msc",
      "right - click Print Spooler select Stop",
      "Next, navigate to C: \\Windows\\System32\\spool\\PRINTERS",
      "Delete all the files in that folder and restart the Print Spooler"
    ],
    img: clearspooler,
    alt: "clearspooler"
  },
  {
    id: 7,
    category: "PRINTERS",
    title: '"My printer is printing a crazy symbols!"',
    subtitle: "Install the latest driver",
    description:
      "If a printer is printing hieroglyphics it's usually a driver issue. Go to the manufacturer's website to install the latest driver. Every installation process is different. If you've installed the latest driver and the printer is still not printing correctly, make sure the printer is using the latest driver from the Control Panel.",
    instructions: [
      "Open Control Panel and select Devices and Printers",
      "Right - click the printer and select Printer Properties",
      "Click the Advanced tab",
      "click on the Driver drop - down list and select the latest driver"
    ],
    img: hieroglyphics,
    alt: "hieroglyphics"
  },
  // OUTLOOK articles
  {
    id: 8,
    category: "OUTLOOK",
    title: 'Error: "The set of folders cannot be opened."',
    subtitle: "Delete the .ost file and recreate the Outlook profile",
    description:
      "If a client cannot open their Outlook because of this prompt, try deleting corrupt .ost file and recreating their Outlook Profile",
    instructions: [
      "Go to C: \\Users\\username\\AppData\\Local\\Microsoft\\Outlook",
      "Delete the corrupt.ost file",
      "Right - click the printer and select Printer Properties",
      "Open Control Panel and select Mail",
      "Click Add...to create a new profile"
    ],
    img: setoffolders,
    alt: "setoffolders"
  },
  {
    id: 9,
    category: "OUTLOOK",
    title: 'Error: "Library not registered."',
    subtitle: "Make changes to the Windows Registry",
    description:
      "This error usually occurs after a upgrade. There may be an older key in the Windows Registry that needs to be deleted. Backup the key by saving it as an Export before making any changes to the Registry. ",
    instructions: [
      "Press Start, type regedit and click on Registry Editor",
      "Nagivate to HKEY_CLASSES_ROOT\\Typelib\\0006F062 - 0000 - 0000 - C00 - 000000000046",
      "Backup the folder before deleting it",
      "Now try to open Outlook",
      "If that doesn't work, try running an Office repair"
    ],
    img: librarynotregistered,
    alt: "librarynotregistered"
  },
  {
    id: 10,
    category: "OUTLOOK",
    title:
      'Error: "Instant Search is not available when Outlook is running with administrator permissions."',
    subtitle: "Uncheck “Run As Administrator” for Outlook.exe",
    description:
      "If Outlook Instant Search is not working properly, trying reconfiguring the Compatibility settings for Outlook.",
    instructions: [
      "For 32 - bit Windows go to C: \\Program Files\\Microsoft Office\\Office14\\",
      "For 64 - bit Windows go to C: \\Program Files(x86)\\Microsoft Office\\Office14\\",
      "Right - click OUTLOOK.EXE and select properties",
      "Under the Compatibility tab, uncheck “Run As Administrator”"
    ],
    img: instantsearch,
    alt: "instantsearch"
  },
  // POWERPOINT articles
  {
    id: 11,
    category: "POWERPOINT",
    title: "I can't open Powerpoint attachments from Outlook.",
    subtitle: "Edit Trust Center settings",
    description:
      'If you are getting an error that says "If you trust the source of this presentation, click Repair." and clicking Repair does not fix the issue, try following these steps.',
    instructions: [
      "Open Powerpoint, click on File and then Options",
      "select Trust Center and click on Trust Center settings...",
      'select Protected View and uncheck "Enable Protected View for files originating from the Internet"'
    ],
    img: protectedview2,
    alt: "protectedview2"
  },
  // ACTIVE DIRECTORY articles
  {
    id: 12,
    category: "ACTIVE DIRECTORY",
    title: "I'm locked out of my desktop! I can't sign in.",
    subtitle: "Unlock the user's account on Active Directory",
    description:
      "When a user's login attempts exceed the Account lockout threshold, they'll need an administrator to unlock their account.",
    instructions: [
      "Log into the domain controller as an adminstrator and open Active Directory Users and Computers console",
      "Find the AD user, right - click and select Properties",
      "From the Account tab check the box next to Unlock Account and press OK"
    ],
    img: unlockadaccount,
    alt: "unlockadaccount"
  },
  // EXCHANGE articles
  {
    id: 13,
    category: "EXCHANGE",
    title: "How To Customize Mailbox Size",
    subtitle: "Customize the quota settings",
    description:
      "If a client is unable to send or receive mail, it may be due to their mailbox being full. You can increase the size of their mailbox from the Exchange Admin Center.",
    instructions: [
      "Log into the Exchange Admin Center, select Recipients and then Mailboxes",
      "Select the mailbox and go to Properties",
      "Select mailbox usage and check Customize the quota settings for this mailbox"
    ],
    notes: [
      "Issue a warning at(GB): sets the maximum storage limits before the user receives a warning",
      "Prohibit send at(GB): prevents the user from sending once the limit is reached",
      "Prohibit send and receive at(GB): prevents the user from sending or receiving email once the limit is reached."
    ],
    img: mailboxquota,
    alt: "mailboxquota"
  },
  {
    id: 14,
    category: "EXCHANGE",
    title: "How To Create A Retention Policy",
    subtitleOne: "Step 1. Enable Archiving",
    descriptionOne:
      "Enable archiving for the mailboxes that will be assigned the retention policy. You can do this step first or save it for last. Note that when archiving is enabled, the “Default MRM Policy” is applied by default which includes the “Default 2 year move to archive” retention tag.",
    instructionsOne: [
      "Log into the Exchange Admin Center, select Recipients and then Mailboxes",
      "You can bulk - enable archiving by holding Shift or Ctrl",
      "On the right, look for Archive and select Enable"
    ],
    subtitleTwo: "Step 2. Create A Retention Tag",
    descriptionTwo:
      "When creating a new retention tag, it is applied to the entire mailbox by default.",
    instructionsTwo: [
      "From Compliance Management navigate to Retention Tags and click Add +",
      "Name the retention tag and check a Retention action",
      "Set the Retention period"
    ],
    subtitleThree: "Step 3. Create A Retention Policy",
    descriptionThree:
      "After creating the retention tag, create a retention policy and add the retention tag to that policy.",
    instructionsThree: [
      "From Compliance Management navigate to Retention Policies and click Add +",
      "Name the retention policy and add the retention tag you created in the previous step",
      "click Save"
    ],
    subtitleFour: "Step 4. Apply The Retention Policy",
    descriptionFour: "Apply the retention policy individually or by bulk",
    instructionsFour: [
      "Select a mailbox and select mailbox features",
      "Click on the drop - down list under Retention policy: and select a retention policy",
      "You can confirm that the retention policy is working by checking mailbox features and to the right it should say Archiving: Enabled"
    ],
    img1: retention1,
    alt1: "retention1",
    img2: retention2,
    alt2: "retention2",
    img3: retention3,
    alt3: "retention3"
  }
];

export default articleData;
