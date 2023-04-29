import { NextPage, GetServerSidePropsContext } from "next";
import { checkAuth } from "../../../utils/checkAuth";
import { CustomHeader } from "@/components/Header";

const DashboardPage: NextPage = () => {
  return (
    <>
      <main>
        <CustomHeader />
        <h1>Dashboard page</h1>
      </main>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
