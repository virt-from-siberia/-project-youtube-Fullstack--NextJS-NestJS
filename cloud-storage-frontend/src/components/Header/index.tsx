import React from "react";
import { useRouter } from "next/router";

import { Layout, Avatar, Menu, Popover, Button } from "antd";
import { CloudOutlined } from "@ant-design/icons";

import * as Api from "../../../api";

import styles from "./Header.module.scss";

export const CustomHeader: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogOut = () => {
    if (window.confirm("Выдействительно хотите выйти ?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <>
      <Layout.Header className={styles.root}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <h2>
              <CloudOutlined />
              Cloud Storage
            </h2>
            <Menu
              className={styles.topMenu}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectedMenu]}
              onSelect={({ key }) => router.push(key)}
              items={[
                {
                  key: "/dashboard",
                  label: "Главная",
                },
                {
                  key: "/dashboard/profile",
                  label: "Профиль",
                },
              ]}
            />
          </div>
          <div className={styles.headerRight}>
            <Popover
              trigger="hover"
              content={
                <Button type="primary" danger onClick={onClickLogOut}>
                  Выйти
                </Button>
              }
            >
              <Avatar>A</Avatar>
            </Popover>
          </div>
        </div>
      </Layout.Header>
    </>
  );
};
