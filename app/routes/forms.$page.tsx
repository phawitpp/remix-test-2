import React from "react";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  return { name: params };
}
const FormsPage: React.FC = () => {
  const page = useLoaderData<typeof loader>();
  return <div></div>;
};

export default FormsPage;
