import React from "react";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { ProfileForm } from "@/components/forms/profileForm";
import { AccountForm } from "@/components/forms/accountForm";
import { AppearanceForm } from "@/components/forms/appearanceForm";
import { NotificationsForm } from "@/components/forms/notificationForm";
import { DisplayForm } from "@/components/forms/displayForm";

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ name: params.page });
}
const FormsPage: React.FC = () => {
  const page = useLoaderData<typeof loader>();
  return (
    <div>
      {page.name === "profile" ? (
        <ProfileForm />
      ) : page.name === "account" ? (
        <AccountForm />
      ) : page.name === "appearance" ? (
        <AppearanceForm />
      ) : page.name === "notifications" ? (
        <NotificationsForm />
      ) : page.name === "display" ? (
        <DisplayForm />
      ) : (
        <div>404</div>
      )}
    </div>
  );
};

export default FormsPage;
