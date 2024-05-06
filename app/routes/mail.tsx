import MailMain from "@/components/mail/mailMain";
import React from "react";
import { accounts, mails } from "~/data/mailData";
const Mail: React.FC = () => {
  const defaultLayout = undefined;
  const defaultCollapsed = undefined;
  return (
    <div className="hidden flex-col md:flex h-screen bg-neutral-950">
      <MailMain
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
};

export default Mail;
