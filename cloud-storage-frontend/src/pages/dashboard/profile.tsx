import React from "react";
import { NextPage, GetServerSidePropsContext } from "next";
import { Button, Form, Input, notification } from "antd";

import { CustomHeader } from "@/components/Header";
import { User } from "../../../api/dto/auth.dto";
import { checkAuth } from "../../../utils/checkAuth";
import * as Api from "../../../api";

interface OwnProps {
  userData: User;
}

const DashboardProfilePage: NextPage<OwnProps> = ({ userData }) => {
  const onClickLogOut = () => {
    if (window.confirm("Выдействительно хотите выйти ?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <>
      <CustomHeader />
      <div>
        <h1>Мой профиль</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Полное имя: <b>{userData.fullName}</b>
        </p>
        <p>
          Email : <b>{userData.email}</b>
        </p>
        <br />
        <Button type="primary" danger onClick={onClickLogOut}>
          Выйти
        </Button>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }
  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
